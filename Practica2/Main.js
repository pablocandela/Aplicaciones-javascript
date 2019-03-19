import Snake from "./Snake.js";
import Apple from "./Apple.js";

window.addEventListener("load", function(evt) {
  let container = document.querySelector("#container");
  for (let i=0; i<3072; i++) {
    let new_div = document.createElement("div");
    container.appendChild(new_div);
  }
  let lastTime = Date.now();
  let current = 0;
  let elapsed = 0;
  let max_elapsed_wait = 30/1000;
  let snake = new Snake(document.getElementById("container"));

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
});
