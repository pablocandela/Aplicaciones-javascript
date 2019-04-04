import Snake from "./Snake.js";
import Apple from "./Apple.js";

window.addEventListener("load", function(evt) {
  let svg_namespace = "http://www.w3.org/2000/svg";
  let lastTime = Date.now();
  let current = 0;
  let elapsed = 0;
  let max_elapsed_wait = 30/1000;
  let y = 40;
  let x = 0;
  let width_cell = 13;
  let height_cell = 13;
  let cells = [];
  let count = 0;
  let container = document.getElementById("container");
  let svg = document.createElementNS(svg_namespace, "svg");
  svg.setAttribute("width", 832);
  svg.setAttribute("height", 664);
  draw();
  container.appendChild(svg);
  
  let snake = new Snake(svg,container);

  (function gameLoop() {
    current = Date.now();
    elapsed = (current - lastTime) / 10000;
    if (elapsed > max_elapsed_wait) {
      elapsed = max_elapsed_wait;
    }
    snake.processInput();
    snake.update(elapsed);
    snake.render();
    lastTime = current;
    window.requestAnimationFrame(gameLoop);
  })();


  /**
   * Funcion que se encarga de dibujar la cuadricula en el canvas.
   */
  function draw(){
    for(var i = 0; i < 48; i++){
      for(var j = 0; j < 64; j++ ){
        let rect = document.createElementNS(svg_namespace, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", 12);
        rect.setAttribute("height", 12);
        rect.setAttribute("fill", "#0f4010");
        rect.setAttribute("stroke","#0c600e");
        rect.setAttribute("stroke-width","1");
        x += 13;
        count ++;
        svg.appendChild(rect);
      }
      x = 0; y += 13;
    }
  }
});
