export default class Model {
  constructor() {
    this.redo_list = [];
    this.redo_step = 0;
  }

  init(controller) {
    this.canvas = document.getElementById("drawing");
    this.context = this.canvas.getContext("2d");

    this.controller = controller;
  }


  setImage(image) {
    this.context.drawImage(image, 0, 0);

    this.undo_step = 0;
    this.undo_list = [image];
  }

  getImage() {
    return this.canvas.toDataURL("image/png");
  }

  putImage(image) {
    this.context.drawImage(image, 0, 0);

    let img = document.createElement("img");
    img.src = this.canvas.toDataURL("image/png");

    this.undo_step++;
    this.undo_list[this.undo_step] = img;
  }

  /*
  * Funcion que permite deshacer cambios en el canvas.
  */
  undo() {
    if (this.undo_step > 0) {
      this.redo_list[this.redo_step] = this.undo_list[this.undo_step];
      this.redo_step++;
      this.undo_step--;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(this.undo_list[this.undo_step], 0, 0);
    }
  }

  /*
  *Funcion que permite rehacer las acciones que se deshiccieron en el canvas,
  *en caso de que se haya dibujado algo antes esta funcion no hace nada.
  */
  redo() {
    if(this.redo_step > 0){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(this.redo_list[this.redo_step - 1], 0, 0);
      this.undo_step ++;
      this.redo_step --;
    }
  }


}
