import Snake from "./Snake.js";
import Apple from "./Apple.js";

window.addEventListener("load", function(evt) {
  let canvas = document.getElementById("the_canvas");
  let context = canvas.getContext("2d");
  context.fillRect(200, 30, canvas.width, canvas.height);
  let lastTime = Date.now();
  let current = 0;
  let elapsed = 0;
  let max_elapsed_wait = 30/1000;
  let y = 0;
  let x = 0;
  let width_cell = 13;
  let height_cell = 13;
  let cells = [];
  let count = 0;
  draw();


  let snake = new Snake(context);

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
    context.fillStyle = "#0f4010";
    for(var i = 0; i < 48; i++){
      for(var j = 0; j < 64; j++ ){
        context.fillRect(x+200, y+30, width_cell, height_cell);
        context.lineWidth = 1;
        context.strokeStyle = "#0c600e";
        context.strokeRect(x+200, y+30, width_cell - 1, height_cell - 1);
        x += 13;
        count ++;
      }
      x = 0; y += 13;
    }
  }
});
