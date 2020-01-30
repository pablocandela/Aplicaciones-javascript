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

    this.info.setAttribute("style", "left:320px;");
    this.info2.setAttribute("style", "left:20px; top : 0px; font-size: 17px;");
    this.info2.textContent = `En estos ejercicios estudiaremos el numero de posibles resultados
                              que se pueden obtener al lanzar varia monedas, dados, etc y las
                              diferentes formas en las que pueden combinarse piezas de ropa.`;
    this.info3.setAttribute("style", "left:20px; top : 130px; font-size: 17px;");
    this.info3.textContent = `Partiendo del principio fundamental del conteo: Si en un proceso de k niveles
                              el numero de resultados posibles de cada uno de ellos tiene n1,n2,n3,...,nk
                              resultados posibles, entonces el numero total de resultados posibles es:`;

    this.info4.setAttribute("style", "left:20px; top : 260px; font-size: 17px;");
    this.info4.textContent = `n1 * n2 * n3 *......* nk`;

    this.info5.setAttribute("style", "left:20px; top : 300px; font-size: 17px;");
    this.info5.textContent = `A este principio se le conoce tambien como regla de la multiplicacion`;








});
