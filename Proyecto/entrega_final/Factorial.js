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
    this.info11 = document.querySelector("#info11");
    this.expFact = document.querySelector("#expFact");
    this.expFact2 = document.querySelector("#expFact2");
    this.video = document.querySelector('#video');
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.input1 = document.querySelector('#input1');
    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:430px");

    this.resultado = 0;



    this.expFact2.setAttribute("style", "left:500px; background-color: #C2D5E5");

    this.info.setAttribute("style", "left:420px;");

    this.info2.setAttribute("style", "left:23px; top : 0px; font-size: 17px;");
    this.info2.textContent = `Un factorial se designa con un numero natural positivo seguido
                            por un signo de exclamacion, por ejemplo 7!.`;
    this.info3.setAttribute("style", "left:23px; top : 80px; font-size: 17px;");
    this.info3.textContent = `7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040`;

    this.info4.setAttribute("style", "left:23px; top : 120px; font-size: 17px;");
    this.info4.textContent = `El valor de un factorial es el producto de todos los numeros
                              desde 1 hasta el numero del factorial`;

    this.info5.setAttribute("style", "left:23px; top : 200px; font-size: 17px;");
    this.info5.textContent = `Los factoriales se utilizan para determinar las cantidades
                              de combinaciones y permutaciones y para averiguar probabilidades`;

    this.info6.setAttribute("style", "left:23px; top : 330px; font-size: 17px; color: blue");
    this.info6.textContent = `Ingresa un numero y observa su factorial`;

    this.info7.setAttribute("style", "left:23px; top : 50px; font-size: 20px;");
    this.info7.textContent = `Factorial de:`;

    this.botonCalcula.setAttribute("style", "left:30px; top : 80px; ");


    document.querySelector("#botonCalcula").addEventListener("mousedown", () => factorial());



    function factorial () {
      var n = input1.value;
      var cadena = "1";
      var total = 1;
      var i = 1;
      for (i; i<=n; i++) {
        if(i != 1 && i < 7){
            cadena = cadena + " * " + i;
        }
        total = total * i;
      }
      if(n >= 7){
        cadena = cadena + " *.......* " + n;
      }
      resultado = total;
      info8.setAttribute("style", "left:23px; top : 120px; font-size: 17px;");
      info8.textContent = `${n}! = ${cadena}`;

      info9.setAttribute("style", "left:23px; top : 170px; font-size: 17px;");
      info9.textContent = `Es el producto de todos los numeros naturales desde 1 hasta el numero del factorial`;

      info10.setAttribute("style", "left:23px; top : 280px; font-size: 19px;");
      info10.textContent = `El factorial de este numero es :`;

      info11.setAttribute("style", "left:23px; top : 340px; font-size: 19px; color: red;");
      info11.textContent = `${n}! = ${resultado}`;
      return
    }
});
