window.addEventListener("load", function(evt) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.info = document.querySelector("#info");
    this.info2 = document.querySelector("#info2");
    this.info3 = document.querySelector("#info3");
    this.expFact = document.querySelector("#expFact");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.boton_2 = document.querySelector('#boton1');
    this.formCom = document.querySelector('#formCom');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_2.setAttribute("style", "left:480px");
    this.boton_2.setAttribute("style", "left:480px");
    this.expFact.setAttribute("style", "left:245px; width: 450px;height: 450px;" );

    this.info.setAttribute("style", "left:360px;");
    this.info2.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
    this.info2.textContent = `En estos ejercicios estudiaremos el numero de posbles combinaciones
                              que podemos formar dentro de un conjunto de elementos.`;
    this.info3.setAttribute("style", "left:20px; top : 110px; font-size: 17px;");
    this.info3.textContent = `Recordemos que en las permutaciones si importa el orden en el
                              que acomodemos a los elementos por lo que hacemos combinaciones sin repeticion.`;










});
