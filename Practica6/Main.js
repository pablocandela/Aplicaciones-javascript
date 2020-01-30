import Interactive from "./Interactive.js";

window.addEventListener("load", function(evt) {

  let lastTime = Date.now();
  let current = 0;
  let elapsed = 0;
  let max_elapsed_wait = 30/1000;

  let interactive = new Interactive(document.getElementById("container"));

  

  (function gameLoop() {
    current = Date.now();
    elapsed = (current - lastTime) / 1000;

    if (elapsed > max_elapsed_wait) {
      elapsed = max_elapsed_wait;
    }

    interactive.processInput();
    interactive.update(elapsed);
    interactive.render();

    lastTime = current;

    window.requestAnimationFrame(gameLoop);
  })();
});
