import Apple from "./Apple.js";
import KEY from "./Key.js";
import Score from "./Score.js";

export default class Snake {
  constructor(context) {
    this.context = context;
    this.retro = document.querySelector("#retro");
    this.score = new Score();
    this.retro_txt = document.querySelector("#retro_txt");
    this.head = Math.floor(Math.random() * ((3072)));
    this.body = [0];
    this.apple = new Apple(this.context,this.body);
    this.tail = 0;
    this.speed = 100;
    this.direction = 64;
    this.start = 0;
    this.aux = 0;
    this.previous = 0;
    this.gameOver = false;

    document.querySelector("#retro_btn").addEventListener("mousedown", () => this.restart() );

    window.addEventListener("keydown", (evt) => {
      KEY.onKeyDown(evt.key);
    });
    window.addEventListener("keyup", (evt) => {
      KEY.onKeyUp(evt.key);
    });
  }

  /**
   * Funcion que se encargara de actualizar la direccion de la serpiente de acuerdo a
   * la entrada del teclado.
   */
  processInput() {
    var flag = false;
    if (KEY.isPressed(KEY.DOWN) && this.direction != -64 && !flag){
      this.direction = 64;
      flag = true;
    }
    if (KEY.isPressed(KEY.RIGHT) && this.direction != -1 && !flag){
      this.direction = 1;
      flag = true;
    }
    if (KEY.isPressed(KEY.UP) && this.direction != 64 && !flag){
      this.direction = -64;
      flag = true;
    }
    if (KEY.isPressed(KEY.LEFT) && this.direction != 1 && !flag){
      this.direction = -1;
      flag = true;
    }
  }

  /**
   * Funcion que va a actualizar la posicion de la serpiente y manejar la
   * velocidad que tendrá.
   * @param {Recibe el tiempo transcurrido en el ciclo de juego} elapsed.
   */
  update(elapsed) {
    this.body[0] = this.head;
    if(!this.gameOver){
      this.aux = this.aux + (elapsed*this.speed);
      if(this.aux > this.start)
        this.update_position();
        //En caso de que se coma una manzana se calula la nueva posicion de la manzana y se incrementa
        //el tamaño de la serpiente.
      if(this.head == this.apple.positionM){
        this.score.update();
        this.apple.update();
        this.body.push(this.body[0]);
      }
      this.apple.render();
      this.score.render();
    }
  }

  /**
   * Funcion que va dibujar a la serpiente en el tablero con su respectivo tamaño y posicion.
   */
  render(){
    if(!this.gameOver){
      //Regresamos el color original a la celda que ya no se ocupa.
      this.context.fillStyle = "#0f4010";
      this.context.fillRect(((this.tail % 64) * 13) + 200,((Math.floor(this.tail / 64)) * 13) +30 , 13, 13);
      this.context.lineWidth = 1;
      this.context.strokeStyle = "#0c600e";
      this.context.strokeRect(((this.tail % 64) * 13) + 200,((Math.floor(this.tail / 64)) * 13) +30, 12, 12);
      //Actualizamos la posicion de cada parte del cuerpo.
      for(var i = 0;i < this.body.length;i++){
        this.context.fillStyle = "#99ff33";
        this.assign_color(this.body[i]);
      }
    }
  }

  /**
   * Funcion que nos ayudara a calcular en que celdas se va a dibujar
   * la serpiente cada vez que se actualiza.
   */
  update_position(){
    this.tail = this.body[this.body.length-1];
    var previous = this.head;
    this.body[0] = this.head + this.direction;
    this.head = this.head + this.direction;
    //Se hace un intercambio de posicion entre las celdas subsecuentes para simular el movimiento.
    for(var i = 1; i < this.body.length; i++){
      var temp = this.body[i];
      this.body[i] = previous;
      previous = temp;
    }
    this.start++;
    this.verify();
  }

  /**
   * Funcion encargada de verificar si la serpiente se ha muerto,es decir si choca con sigo misma
   * o con alguna pared, en caso de ser asi lo notifica al jugador.
   */
  verify(){
    //Caso en el que la serpiente choca con sigo misma.
    if(this.body.length != 0){
      for(var i = 1; i < this.body.length; i++){
        if(this.head == this.body[i]){
          this.notify();
        }
      }
    }
    //El caso en el que la serpiente choca con alguna pared.
    if((this.head % 64 == 0 && this.direction == 1) ||
      (this.head % 64 == 63 && this.direction == -1)||
      (this.head < 0 || this.head > 3072)){
        this.notify();
      }
  }

  /**
   * Funcion que imprime en pantalla el mesaje de que ya se perdio la partida y da la opcion de reiniciar..
   */
  notify(){
    this.retro_txt.textContent = `Perdiste`;
    this.retro.style.display = "block";
    this.gameOver = true;
  }

  /**
   * Funcion que actualiza el color con el que se rellenaran las celdas.
   * @param {Recibe la celda que se va a colorear} coordinate.
   */
  assign_color(coordinate){
    this.context.fillRect(((coordinate % 64) * 13) + 200,((Math.floor(coordinate / 64)) * 13) + 30 , 13, 13);
    this.context.strokeRect(((coordinate % 64) * 13) + 200,((Math.floor(coordinate / 64)) * 13) + 30, 12, 12);
  }

  /**
   * Funcion que servirar para reiniciar el juego con los valores iniciales
   * en caso de que el jugador asi lo deseé.
   */
  restart() {
    this.body = [0];
    this.head =  Math.floor(Math.random() * ((1500)));
    this.tail = 0;
    this.score.marcador = 0;
    this.retro.style.display = "none";
    this.direction = 64;
    this.aux = 0;
    this.start = 0;
    this.previous = 0;
    this.gameOver = false;
    this.apple.positionM = Math.floor(Math.random() * ((1500)));
    for(var i = 0; i < 3072;i++){
      this.context.fillStyle = "#0f4010";
      this.assign_color(i);
    }
  }
}
