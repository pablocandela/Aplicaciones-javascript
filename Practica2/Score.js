export default class Score {
  constructor(container) {
    this.info = document.querySelector("#info");
    this.marcador = 0;
  }

  /**
   * Funcion que actualiza el marcador actual.
   */
  update() {
    this.marcador ++;
  }

  /**
   * Funcion que dibuja en pantalla el marcador actual.
   */
  render(){
    this.info.textContent = `Score ${this.marcador}`;
  }

}
