window.addEventListener("load", function(evt) {
    this.container = container;
    this.drawing = document.getElementById("drawing");
    this.info = document.querySelector("#info");
    this.info2 = document.querySelector("#info2");
    this.info3 = document.querySelector("#info3");
    this.info4 = document.querySelector("#info4");
    this.info5 = document.querySelector("#info5");
    this.info6 = document.querySelector("#info6");
    this.info7 = document.querySelector("#info7");
    this.info8 = document.querySelector("#info8");
    this.info9 = document.querySelector("#info9");
    this.info10 = document.querySelector("#info10");
    this.expFact = document.querySelector("#expFact");
    this.expFact2 = document.querySelector("#expFact2");
    this.expFact3 = document.querySelector("#expFact3");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.dado3d = document.querySelector('#dado3d');
    this.formPer = document.querySelector('#formPer');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.boton_2 = document.querySelector('#boton1');
    this.formCom = document.querySelector('#formCom');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.dado3d.setAttribute("src", "Imagenes/dado3d.png");
    this.dado3d.setAttribute("style", "top:300px; width: 70px; height: 70px; left: 80px");
    this.formPer.setAttribute("src", "Imagenes/formula1.png");
    this.formPer.setAttribute("style", "top:280px; width: 120px; height: 150px; left: 80px");
    this.formCom.setAttribute("src", "Imagenes/formula2.png");
    this.formCom.setAttribute("style", "top:280px; width: 120px; height: 150px; left: 80px");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_2.setAttribute("style", "left:480px");
    this.boton_2.setAttribute("style", "left:480px");


    this.expFact.setAttribute("style", "left:30px; background-color: #C2D5E5; width: 260px;height: 400px;" );
    this.expFact2.setAttribute("style", "left:340px;  width: 260px;height: 400px;");
    this.expFact3.setAttribute("style", "left:650px; background-color: #C2D5E5; width: 260px;height: 400px;");

    this.info.setAttribute("style", "left:320px;");
    this.info2.setAttribute("style", "left:40px; top : 0px; font-size: 18px; color : red;");
    this.info2.textContent = `MULTIPLICACION`;

    this.info3.setAttribute("style", "left:40px; top : 50px; font-size: 18px; 7");
    this.info3.textContent = `La regla de la multiplicacion, si hay m formas de hacer una cosa y hay n
                              formas de hacer otra cosa entonces hay m * n formas de hacer ambas cosas.`;
    this.info4.setAttribute("style", "left:40px; top : 240px; font-size: 18px; 7");
    this.info4.textContent = `Para varios eventos : n1 * n2 *......*nm.`;

    this.info5.setAttribute("style", "left:60px; top : 0px; font-size: 18px; color : red;");
    this.info5.textContent = `PERMUTACION`;

    this.info6.setAttribute("style", "left:50px; top : 50px; font-size: 18px;");
    this.info6.textContent = `Una permutacion de objetos es un arreglo de estos donde el orden si importa`;

    this.info7.setAttribute("style", "left:50px; top : 150px; font-size: 18px;");
    this.info7.textContent = `Para encontrar el numero de permutaciones de m objetos diferentes en grupos de n se usa la siguiente formula:`;

    this.info8.setAttribute("style", "left:60px; top : 0px; font-size: 18px; color : red;");
    this.info8.textContent = `COMBINACION`;

    this.info9.setAttribute("style", "left:50px; top : 50px; font-size: 18px;");
    this.info9.textContent = `Una permutacion de objetos es un arreglo de estos donde el orden no importa`;

    this.info10.setAttribute("style", "left:50px; top : 150px; font-size: 18px;");
    this.info10.textContent = `Para encontrar el numero de combinaciones de m objetos diferentes en grupos de n se usa la siguiente formula:`;








});
