export default class Apple {
  constructor(container) {
    this.container = container;
    this.cells = container.querySelectorAll("#container > div");
    this.positionM = Math.floor(Math.random() * ((3072)));
    this.cells[this.positionM].style.backgroundColor = "red";
  }

  /**
   * Funcion que busca aleatoriamente un nuevo lugar para que aparezca la manzana.
   * la manzana no aparecera en ninguna casilla que ocupe la serpiente.
   */
  update() {
    this.cells[this.positionM].style.backgroundColor = "#46764a";
    var flag = true;
    while (flag) {
      this.positionM = Math.floor(Math.random() * ((3072)));
      if (this.cells[this.positionM].style.backgroundColor != "#99ff33"){
        flag = false;
      }
    }
  }

  /**
   * Funcion que dibuja la manzana en su posicion actual.
   */
  render() {
    this.cells[this.positionM].style.backgroundColor = "red";
  }

}
