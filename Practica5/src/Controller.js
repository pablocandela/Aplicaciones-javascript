export default class Controller {
  constructor() {}

  init(model, view) {
    this.model = model;
    this.view = view;
  }

  open() {
    let file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    file_input.setAttribute("accept", "image/png,image/jpeg");

    file_input.addEventListener("change", (evt) => {
      let file = file_input.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (elem) => {
        let image = document.createElement("img");

        image.addEventListener("load", () => {
          this.view.setTitle(file.name);
          this.view.changeSize(image.width, image.height);
          this.model.setImage(image);
        });
        image.src = reader.result;
      });
      if (file) {
        reader.readAsDataURL(file);
      }
    });

    file_input.click();
  }

  save() {
    let link = document.createElement("a");
    link.setAttribute("download", "image.png");
    document.body.appendChild(link);

    link.addEventListener("click", (evt) => {
      link.href = this.model.getImage();
      document.body.removeChild(link);
    });

    link.click();
  }

  undo() {
    this.model.undo();
  }

  redo() {
    this.model.redo();
  }

  setStrokeColor(color) {
    this.strokeColor = color;
  }

  line_mode() {
    this.mode = "line";
  }

  rect_mode() {
    this.mode = "rect";
  }

  rect_fill_mode() {
    this.mode = "rect_fill";
  }

  circ_mode() {
    this.mode = "circ"
  }

  circ_fill_mode() {
    this.mode = "circ_fill"
  }

  free_mode() {
    this.mode = "free";
  }

  mouse_down(evt, canvas) {
    if ((this.mode === "line") || (this.mode === "free")) {
      this.rect = canvas.getBoundingClientRect();
      this.init_x = evt.clientX - this.rect.left;
      this.init_y = evt.clientY - this.rect.top;

      this.view.setStrokeColor(this.strokeColor);
    }else if((this.mode === "rect") || (this.mode === "rect_fill")) {
      this.rect = canvas.getBoundingClientRect();
      this.init_x = evt.clientX - this.rect.left;
      this.init_y = evt.clientY - this.rect.top;

      this.view.setStrokeColor(this.strokeColor);
    }else if((this.mode === "circ") || (this.mode === "circ_fill")) {
      this.rect = canvas.getBoundingClientRect();
      this.init_x = evt.clientX - this.rect.left;
      this.init_y = evt.clientY - this.rect.top;
    }

    if (this.mode === "free") {
      this.view.initFree(this.init_x, this.init_y);
    }
  }

  /*
  *Funcion que se encarga de dibujar dinamicamente en el canvas la figura seleccionada.
  * @param {evt} ect un evento del raton.
  */
  mouse_move(evt) {
    if (this.mode === "line") {
      this.view.drawLine(
        this.init_x, this.init_y,
        evt.clientX - this.rect.left, evt.clientY - this.rect.top
      );
    }else if(this.mode === "rect") {
      this.view.drawRect(
        this.init_x, this.init_y,
        evt.clientX-this.rect.left - this.init_x,
        evt.clientY-this.rect.top - this.init_y
      );
    }else if(this.mode === "rect_fill") {
      this.view.drawRectFill(
        this.init_x, this.init_y,
        evt.clientX-this.rect.left - this.init_x,
        evt.clientY-this.rect.top - this.init_y
      );
    }else if(this.mode === "circ") {
      this.view.drawCirc(
      this.init_x,this.init_y,
      //Calculamos el nuevo radio.
      Math.max(Math.abs(evt.clientX-this.rect.left - this.init_x),
               Math.abs(evt.clientY-this.rect.top - this.init_y))
      );
    }else if(this.mode === "circ_fill") {
      this.view.drawCircFill(
      this.init_x,this.init_y,
      //Calculamos el nuevo radio.
      Math.max(Math.abs(evt.clientX-this.rect.left - this.init_x),
               Math.abs(evt.clientY-this.rect.top - this.init_y))
      );
    }
    else if (this.mode === "free") {
      this.view.continueFree(evt.clientX - this.rect.left, evt.clientY - this.rect.top);
    }
    this.model.redo_list = [];
    this.model.redo_step = 0;
  }

  mouse_up(aux_canvas) {
    this.model.putImage(aux_canvas);

    this.view.clear();
  }




}
