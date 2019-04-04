export default class Score {
  constructor(svg) {
    this.info = document.querySelector("#info");
    this.marcador = 0;
    this.svg = svg;
    let svg_namespace = "http://www.w3.org/2000/svg";
    this.text = document.createElementNS(svg_namespace, "text");
    this.text.setAttribute("x", 350);
    this.text.setAttribute("y", 30);
    this.text.setAttribute("font-size","35px");
    this.text.setAttribute("font-family","Serif");
    svg.appendChild(this.text);
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
      this.text.textContent = `Score ${this.marcador}`;
  }

}
