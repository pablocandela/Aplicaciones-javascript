window.addEventListener("load", function(evt) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.info = document.querySelector("#info");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.factorial = document.querySelector('#fact');
    this.combinaciones = document.querySelector('#comb');
    this.permutacion = document.querySelector('#perm');
    this.barra = document.querySelector('#barra');
    this.boton1 = document.querySelector('#boton1');
    this.boton2 = document.querySelector('#boton2');
    this.boton3 = document.querySelector('#boton3');
    this.boton_1 = document.querySelector('#boton');
    this.boton_2 = document.querySelector('#boton_2');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.factorial.setAttribute("src", "Imagenes/Factorial.png");
    this.factorial.setAttribute("style", "top: 150px; left: 110px; width: 100px; height: 100px;");
    this.permutacion.setAttribute("src", "Imagenes/Permutacion.png");
    this.permutacion.setAttribute("style", "top: 150px; left: 420px; width: 100px; height: 100px;");
    this.combinaciones.setAttribute("src", "Imagenes/Combinaciones.jpeg");
    this.combinaciones.setAttribute("style", "top: 150px; left: 730px; width: 100px; height: 100px;");
    this.info.setAttribute("style", "left:430px");
    this.boton_1.setAttribute("style", "left:500px");
    this.boton_2.setAttribute("style", "left:350px");
    this.boton1.setAttribute("style","width: 290px; height: 450px; top: 100px; left: 20px;font-size: 30px; background-color: #FFE1C6");
    this.boton2.setAttribute("style","width: 290px; height: 450px; top: 100px; left: 330px;font-size: 30px; background-color: #FFD586");
    this.boton3.setAttribute("style","width: 290px; height: 450px; top: 100px; left: 640px;font-size: 30px; background-color: #FFFFB5");

});
