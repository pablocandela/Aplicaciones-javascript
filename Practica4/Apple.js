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
    this.svg.children[this.positionM].setAttribute("fill", "#46764a");
    this.positionM = Math.floor(Math.random() * ((3072)));
  }

  /**
   * Funcion que dibuja la manzana en su posicion actual.
   */
  render() {
    this.svg.children[this.positionM].setAttribute("fill", "red");
  }

}
