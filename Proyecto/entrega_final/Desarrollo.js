window.addEventListener("load", function(evt) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.info = document.querySelector("#info");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.boton_2 = document.querySelector('#boton_2');
    this.retro = document.querySelector("#retro");
    this.retro_txt = document.querySelector("#retro_txt");
    //document.querySelector("#retro_btn").addEventListener("mousedown", () => this.restart() );

    this.retro2 = document.querySelector("#retro2");
    this.retro_txt2 = document.querySelector("#retro_txt2");
    //document.querySelector("#retro_btn2").addEventListener("mousedown", () => this.restart() );

    this.retro3 = document.querySelector("#retro3");
    this.retro_txt3 = document.querySelector("#retro_txt3");
    //document.querySelector("#retro_btn3").addEventListener("mousedown", () => this.restart() );

    this.info.setAttribute("style", "left:400px; height: 50px; top: 30px");
    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.retro2.setAttribute("style", "top: 350px; left: 450px");
    this.retro3.setAttribute("style", "left: 705px");
    this.retro_txt.setAttribute("style", "left: 120px");
    this.boton_1.setAttribute("style", "left:500px");
    this.boton_2.setAttribute("style", "left:350px");


});
