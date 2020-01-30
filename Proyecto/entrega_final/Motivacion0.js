window.addEventListener("load", function(evt) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.info = document.querySelector("#info");
    this.video = document.querySelector('#video');
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:420px");

    reproduceVideo(this.video);

    function reproduceVideo(video) {
      if (video.canPlayType("video/mp4")) {
        video.setAttribute("src","Videos/Introduccion.mp4");
      } else {
        video.setAttribute("src","movie.ogg");
      }
      video.setAttribute("controls", "controls");
      document.body.appendChild(video);
    }

});
