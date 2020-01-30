const PI_180 = Math.PI/180;
const ROTATE_ANGLE = 3;
const SHIP_FORCE = 20;

export default class Ship {
  constructor(container, x=0, y=0, size=1) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vr = 0;
    this.rotation = 0;
    this.force = 0;
    this.friction = 0.95;
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 4};
    this.graphics = container.appendChild( document.createElement("div") );
    this.bloqueo = false;
    this.graphics.setAttribute("style", `position:relative; left:-${size/2}px; top:-${size/2}px; transform-origin:center; width:${size}px; height:${size}px;`);
    document.querySelector("#retro_btn3").addEventListener("mousedown", () => this.leftMouse() );
    document.querySelector("#retro_btn4").addEventListener("mousedown", () => this.downMouse() );
    document.querySelector("#retro_btn5").addEventListener("mousedown", () => this.rightMouse() );

    this.ship_graphic = this.graphics.appendChild( document.createElement("img") );
    this.ship_graphic.src = "img/space_ship.svg";
    this.ship_graphic.setAttribute("style", `position:absolute; width:100%; height:100%;`);

  }

  /** */
  processInput(KEY) {
    if(!this.bloqueo){
      if (KEY.isPressed(KEY.LEFT)) {
        this.x -= 1;
      }
      if (KEY.isPressed(KEY.RIGHT)) {
        this.x += 1;
      }
      if (KEY.isPressed(KEY.DOWN)) {
        this.y -= 2.2;
        this.velocity.y = 110;
      }
    }
  }

  //Funcion que se encarga de mover la nave hacia la izquierda si el boton <- esta siendo presionado.
  leftMouse() {
    if(!this.bloqueo){
        this.x -= 1;
    }
  }

  //Funcion que se encarga de mover la nave hacia arriba si el boton <- esta siendo presionado.
  downMouse() {
    if(!this.bloqueo){
      this.y -= 2.2;
      this.velocity.y = 110;
    }
  }

  //Funcion que se encarga de mover la nave hacia la derecha si el boton <- esta siendo presionado.
  rightMouse() {
    if(!this.bloqueo){
        this.x += 1;
    }
  }


  /** */
  update(elapsed) {
    this.velocity.x = this.velocity.x + this.acceleration.x;
    this.velocity.y = this.velocity.y + this.acceleration.y;

    this.x = this.x + this.velocity.x * elapsed;
    this.y = this.y + this.velocity.y * elapsed;

    //Evitamos que traspase las paredes.
    if(this.x < 16){
      this.x = 16;
    }
    if(this.x > 344){
      this.x = 344;
    }
  }

  /** */
  render(context) {
    this.graphics.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}
