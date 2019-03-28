export default class Apple {
  constructor(context,body) {
    this.context = context;
    this.body = body;
    //Se calcula aleatoriamente donde se dibujara la celda.
    this.positionM = Math.floor(Math.random() * ((3072)));
  }

  /**
   * Funcion que busca aleatoriamente un nuevo lugar para que aparezca la manzana.
   * la manzana no aparecera en ninguna casilla que ocupe la serpiente.
   */
  update() {
    this.context.fillStyle = "#46764a";
    this.context.fillRect(((this.positionM % 64) * 13) + 200,((Math.floor(this.positionM/64))*13) + 30, 13, 13);
    this.positionM = Math.floor(Math.random() * ((3072)));
  }

  /**
   * Funcion que dibuja la manzana en su posicion actual.
   */
  render() {
    this.context.fillStyle = "red";
    this.context.fillRect(((this.positionM % 64) * 13) + 200,((Math.floor(this.positionM/64))*13) + 30, 13, 13);
  }

}
