import Ship from "./Ship.js";
import KEY from "./Key.js";

let left;
let right;
let top;
let bottom;
const epsilon = .7;

export default class Interactive {
  constructor(container) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.retro = document.querySelector("#retro");
    this.retro_txt = document.querySelector("#retro_txt");
    document.querySelector("#retro_btn").addEventListener("mousedown", () => this.restart() );
    this.retro2 = document.querySelector("#retro2");
    this.retro_txt2 = document.querySelector("#retro_txt2");
    document.querySelector("#retro_btn2").addEventListener("mousedown", () => this.restart() );

    let w = this.drawing.offsetWidth;
    let h = this.drawing.offsetHeight;

    this.banderaM = false;
    this.bandera1 = false;
    this.bandera2 = false;
    this.bandera3 = false;
    this.bandera4 = false;
    this.Ship = new Ship(this.drawing, 180, 0, 40);

    let svg_namespace = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svg_namespace, "svg");
    svg.setAttribute("width", 360);
    svg.setAttribute("height", 100);

    this.polyline = document.createElementNS(svg_namespace, "polyline");
    svg.appendChild(this.polyline);
    this.container.appendChild(svg);

    this.creaLineas();

    left = 0;
    right = w;
    top = 0;
    bottom = h;

    window.addEventListener("keydown", (evt) => {
      KEY.onKeyDown(evt.key);
    });
    window.addEventListener("keyup", (evt) => {
      KEY.onKeyUp(evt.key);
    });
  }

  processInput() {
    this.Ship.processInput(KEY);
  }

  update(elapsed) {
    this.Ship.update(elapsed);
    this.checkBoundaries();
    this.collisionSegmentPoint(this.banderaM,this.lmx1 ,this.lmy1+420,this.lmx2,this.lmy2+420,this.Ship.x + 10 ,this.Ship.y)
    this.collisionSegmentPoint(this.bandera1,this.l1x1 ,this.l1y1+420,this.l1x2 ,this.l1y2+420,this.Ship.x + 10,this.Ship.y)
    this.collisionSegmentPoint(this.bandera2,this.l2x1 ,this.l2y1+420,this.l2x2 ,this.l2y2+420,this.Ship.x + 10,this.Ship.y)
    this.collisionSegmentPoint(this.bandera3,this.l3x1 ,this.l3y1+420,this.l3x2 ,this.l3y2+420,this.Ship.x + 10,this.Ship.y)
    this.collisionSegmentPoint(this.bandera4,this.l4x1 ,this.l4y1+420,this.l4x2 ,this.l4y2+420,this.Ship.x + 10,this.Ship.y)
  }

  checkBoundaries() {
    if (this.Ship.x > right) {
      this.Ship.x = left;
    }
    else if (this.Ship.x < left) {
      this.Ship.x = right;
    }

    if (this.Ship.y > bottom) {
      this.Ship.y = top;
    }
    else if (this.Ship.y < top) {
      this.Ship.y = bottom;
    }
  }



  render() {
    this.Ship.render();
  }


  collisionSegmentPoint(flag,p1,p2,p3,p4,x,y) {
    let dist_1 = this.distance(p1, p2,x,y);
    let dist_2 = this.distance(p3, p4,x,y);
    let dist_segment = this.distance(p1, p2, p3, p4);

    if (Math.abs(dist_1 + dist_2 - dist_segment) < epsilon) {
      this.Ship.y = (p2+p4)/2;
      this.Ship.velocity.y = 0;
      this.Ship.acceleration.y = 0;
      this.Ship.bloqueo = true;
      if(!flag){
        this.notifyLose();
      }else{
        this.notifyWin();
      }
    }
  }

  /**
   * Funcion que crea una polilinea aleatoria para simular el campo de aterrizaje.
   * Se garantiza que por lo menos hay una meseta de tamaño 50 para que la nave pueda aterrizar.
   *
   */
  creaLineas() {
    //Puntos de la linea inicial.
    this.lmx1 = 0;
    this.lmy1 = Math.floor(Math.random() * 101);
    this.lmx2 = Math.floor(Math.random() * 90);
    if(this.lmx2 < 80){
      this.lmx2 = 80;
    }
    this.lmy2 = Math.floor(Math.random() * 101);

    //Puntos linea 1
    this.l1x1 = this.lmx2;
    this.l1y1 = Math.floor(Math.random() * 101);
    this.l1x2 = Math.floor(Math.random() * this.l1x1 + 90);
    if(this.l1x2 - this.l1x1 < 70){
      this.l1x2 = this.l1x1 + 70;
    }
    this.l1y2 = Math.floor(Math.random() * 101);

    //Puntos linea 2
    this.l2x1 = this.l1x2;
    this.l2y1 = Math.floor(Math.random() * 101);
    this.l2x2 = Math.floor(Math.random() * this.l2x1 + this.l1x2);
    if(this.l2x2 - this.l2x1 < 70){
      this.l2x2 = this.l2x1 + 70;
    }
    this.l2y2 = Math.floor(Math.random() * 101);

    //Puntos linea 3
    this.l3x1 = this.l2x2;
    this.l3y1 = Math.floor(Math.random() * 101);
    this.l3x2 = Math.floor(Math.random() * this.l3x1 + this.l2x2);
    if(this.l3x2 - this.l3x1 < 70){
      this.l3x2 = this.l3x1 + 70;
    }
    this.l3y2 = Math.floor(Math.random() * 101);

    //Puntos linea 4
    this.l4x1 = this.l3x2;
    this.l4y1 = Math.floor(Math.random() * 101);
    this.l4x2 = 360;
    this.l4y2 = Math.floor(Math.random() * 101);

    this.creaMeseta();

    //Se crea la pollinea con los puntos calculados.
    this.polyline.setAttribute("points",`${this.lmx1} ${this.lmy1} , ${this.lmx2} ${this.lmy2},
                                    ${this.l1x1} ${this.l1y1}, ${this.l1x2} ${this.l1y2},
                                    ${this.l2x1} ${this.l2y1}, ${this.l2x2} ${this.l2y2},
                                    ${this.l3x1} ${this.l3y1}, ${this.l3x2} ${this.l3y2},
                                    ${this.l4x1} ${this.l4y1}, ${this.l4x2} ${this.l4y2}`);
    this.polyline.setAttribute("fill", "transparent");
    this.polyline.setAttribute("stroke","white");
  }

  /**
   * Funcion auxiliar que garantiza que la polilinea tiene una meceta.
   * Para eso hacemos que una linea tenga tanto su punto1 como su punto2 a la misma altura.
   */
  creaMeseta(){
    let meseta = Math.floor(Math.random() * 4);
    switch (meseta) {
      case 0:
        this.lmy2 = this.lmy1;
        this.banderaM = true;
      case 1:
        this.l1y2 = this.l1y1;
        this.bandera1 = true;
        break;
      case 2:
        this.l2y2 = this.l2y1;
        this.bandera2 = true;
        break;
      case 3:
        this.l3y2 = this.l3y1;
        this.bandera3 = true;
        break;
      case 4:
        this.l4y2 = this.l4y1;
        this.bandera4 = true;
        break;
    }
  }
  /**
   * Funcion que imprime en pantalla el mesaje de que ya se perdio la partida y da la opcion de reiniciar..
   */
  notifyLose(){
    this.retro_txt.textContent = `Perdiste`;
    this.retro.style.display = "block";
  }

  /**
   * Funcion que imprime en pantalla el mesaje de que ya se ganó la partida y da la opcion de reiniciar..
   */
  notifyWin(){
    this.retro_txt.textContent = `Ganaste`;
    this.retro.style.display = "block";
  }

  distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
  }

  restart() {
    this.Ship.bloqueo = false;
    this.Ship.velocity.x = 0;
    this.Ship.velocity.y = 0;
    this.Ship.acceleration.x = 0;
    this.Ship.acceleration.y = 3;
    this.Ship.x = 180;
    this.Ship.y = 0;
    this.banderaM = false;
    this.bandera1 = false;
    this.bandera2 = false;
    this.bandera3 = false;
    this.bandera4 = false;
    this.creaLineas();
    this.retro.style.display = "none";
    this.retro2.style.display = "none";
  }
}
