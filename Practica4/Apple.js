export default class Apple {
  constructor(svg,body) {
    this.svg = svg;
    this.body = body;
    //Se calcula aleatoriamente donde se dibujara la celda.
    this.positionM = Math.floor(Math.random() * ((3072)));
  }

  /**
   * Funcion que busca aleatoriamente un nuevo lugar para que aparezca la manzana.
   * la manzana no aparecera en ninguna casilla que ocupe la serpiente.
   */
  update() {
    //this.context.fillStyle = "#46764a";
    //this.context.fillRect(((this.positionM % 64) * 13) + 200,((Math.floor(this.positionM/64))*13) + 30, 13, 13);
    this.svg.children[this.positionM].setAttribute("fill", "#46764a");
    this.positionM = Math.floor(Math.random() * ((3072)));
  }

  /**
   * Funcion que dibuja la manzana en su posicion actual.
   */
  render() {
    //rect.setAttribute("x", x);
    //rect.setAttribute("y", y);
    //rect.setAttribute("width", 12);
    //rect.setAttribute("height", 12);
    this.svg.children[this.positionM].setAttribute("fill", "red");
    //rect.setAttribute("fill", "#aacc33");
    //this.context.fillStyle = "red";
    //this.context.fillRect(((this.positionM % 64) * 13) + 200,((Math.floor(this.positionM/64))*13) + 30, 13, 13);
  }

}
