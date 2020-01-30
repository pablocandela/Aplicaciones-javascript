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
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.boton_2 = document.querySelector('#boton1');
    this.formCom = document.querySelector('#formCom');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.botonOtro = document.querySelector("#botonOtro");
    this.input1 = document.querySelector('#input1');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_2.setAttribute("style", "left:480px");
    this.boton_2.setAttribute("style", "left:480px");
    this.expFact2.setAttribute("style", "left:500px; background-color: #C2D5E5");
    this.input1.setAttribute("style", "margin: 200px 200px;");
    this.bloqueo = false;

    this.carros = 4;
    this.info.setAttribute("style", "left:360px;");
    this.info2.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
    this.info2.textContent = `Si ${carros} carros se colocan uno de tras de otro ¿de cuantas formas distintas se pueden colocar?`;
    this.dado3d.setAttribute("src", "Imagenes/ca1.png");
    this.dado3d.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 30px;")
    this.dado3d2.setAttribute("src", "Imagenes/ca2.png");;
    this.dado3d2.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 100px;");
    this.dado3d3.setAttribute("src", "Imagenes/ca9.png");;
    this.dado3d3.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 170px;");
    this.dado3d4.setAttribute("src", "Imagenes/caamarillo.png");;
    this.dado3d4.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 240px;");
    this.info3.setAttribute("style", "left:20px; top : 205px; font-size: 17px;");
    this.info3.textContent = `Ingresa tu resultado`;

    this.botonCalcula.setAttribute("style", "left:20px; top : 230px; ");
    this.botonOtro.setAttribute("style", "left:90px; top : 230px; ");


    document.querySelector("#botonCalcula").addEventListener("mousedown", () => factorial());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());

    function factorial () {
      var resultadoUsuario = input1.value;
      var cadena = "1";
      var total = 1;
      var i = 1;
      for (i; i<=carros; i++) {
        if(i != 1 && i < 7){
            cadena = cadena + " * " + i;
        }
        total = total * i;
      }
      if(carros >= 7){
        cadena = cadena + " *.......* " + carros;
      }
      var resultado = total;

      info4.setAttribute("style", "left:23px; top : 280px; font-size: 17px;");
      info4.textContent = `El resultado es  ${total}`;

      if(resultadoUsuario == resultado){
        info5.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: blue");
        info5.textContent = `Muy bien`;
      }else{
        info6.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: red");
        info6.textContent = `Lo siento vuelve a intentarlo con otro ejercicio`;
      }
      info7.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
      info7.textContent = `Como podemos ver solo tenemos la informacion de cuantos carros estan formados,
                            por lo que este valor es igual a m, al solo tener un conjunto de elementos
                            (carros) entonces solo hace falta obtener el factorial de m para saber cuantas
                            permutaciones podemos hacer.`;

      info8.setAttribute("style", "left:20px; top : 190px; font-size: 17px;");
      info8.textContent = `Ahora solo calculamos el factorial de m de la siguiente manera:`;

      info9.setAttribute("style", "left:23px; top : 270px; font-size: 17px;");
      info9.textContent = `${carros}! = ${cadena} = ${resultado}`;

      info10.setAttribute("style", "left:23px; top : 330px; font-size: 17px;");
      info10.textContent = `Por lo tanto el numero de formas diferentes en el que podemos formar a los carros es ${resultado}`;



      bloqueo = true;
      return;
    }

    function nuevoEjercicio(){
      var ant = carros;
      while(carros == ant){
        carros = Math.floor(Math.random() * 3) + 2;
      }
      dado3d.style.display = "none";
      dado3d2.style.display = "none";
      dado3d3.style.display = "none";
      dado3d4.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      info8.style.display = "none";
      info9.style.display = "none";
      info10.style.display = "none";
      if(carros >= 2){
        dado3d.style.display = "block";
        dado3d2.style.display = "block";
      }
      if(carros >= 3){
        dado3d3.style.display = "block";
      }
      if(carros >= 4){
        dado3d4.style.display = "block";
      }
      info2.textContent = `Si ${carros} carros se colocan uno de tras de otro ¿de cuantas formas distintas se pueden colocar?`;
      bloqueo = false;
      return;
    }




});
