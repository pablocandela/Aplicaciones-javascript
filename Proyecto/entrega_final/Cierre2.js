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
    this.info12 = document.querySelector("#info12");
    this.info13 = document.querySelector("#info13");
    this.info14 = document.querySelector("#info14");
    this.info15 = document.querySelector("#info15");
    this.info16 = document.querySelector("#info16");
    this.info17 = document.querySelector("#info17");
    this.expFact = document.querySelector("#expFact");
    this.expFact2 = document.querySelector("#expFact2");
    this.expFact3 = document.querySelector("#expFact3");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.input1 = document.querySelector('#input1');
    this.botonOtro = document.querySelector("#botonOtro");
    this.input2 = document.querySelector('#input2');
    this.botonOtro2 = document.querySelector("#botonOtro2");
    this.input3 = document.querySelector('#input3');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:430px");
    this.boton_1.setAttribute("style", "left:430px");
    this.input1.setAttribute("style", "margin: 150px 100px;");
    this.input2.setAttribute("style", "margin: 150px 100px;");
    this.input3.setAttribute("style", "margin: 150px 100px;");
    this.bloqueo = false;
    this.bloqueo2 = false;
    this.bloqueo3 = false;

    this.expFact.setAttribute("style", "left:30px; background-color: #C2D5E5; width: 260px;height: 400px;" );
    this.expFact2.setAttribute("style", "left:340px;  width: 260px;height: 400px;");
    this.expFact3.setAttribute("style", "left:650px; background-color: #C2D5E5; width: 260px;height: 400px;");

    this.info.setAttribute("style", "left:200px;");
    this.info2.setAttribute("style", "left:20px; top : 0px; font-size: 18px;");
    this.info2.textContent = `¿Cuantos numero de 4 cifras se pueden forma si se pueden repetir numeros?, Para los digitos 1,2,3,4,5,6,7,8,9`;
    this.info3.setAttribute("style", "left:10px; top : 155px; font-size: 17px;");
    this.info3.textContent = `Respuesta`;
    this.info8.setAttribute("style", "left:20px; top : 0px; font-size: 18px;");
    this.info8.textContent = `¿Cuantos numero de 4 cifras se pueden forma si no se pueden repetir numeros?, Para los digitos 1,2,3,4,5,6,7,8,9`;
    this.info9.setAttribute("style", "left:10px; top : 155px; font-size: 17px;");
    this.info9.textContent = `Respuesta`;
    this.info13.setAttribute("style", "left:20px; top : 0px; font-size: 18px;");
    this.info13.textContent = `¿De cuantas formas se pueden extraer 4 de estos numeros si no importa el orden al sacarlos?, Para los digitos 1,2,3,4,5,6,7,8,9`;
    this.info14.setAttribute("style", "left:10px; top : 155px; font-size: 17px;");
    this.info14.textContent = `Respuesta`;

    this.botonCalcula.setAttribute("style", "left:10px; top : 180px; ");
    this.botonOtro.setAttribute("style", "left:10px; top : 180px; ");
    this.botonOtro2.setAttribute("style", "left:10px; top : 180px; ");
    document.querySelector("#botonCalcula").addEventListener("mousedown", () => revisa1());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => revisa2());
    document.querySelector("#botonOtro2").addEventListener("mousedown", () => revisa3());

    function revisa1(){
      if(bloqueo == false){
        if(input1.value == 6561){
          info4.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: blue");
          info4.textContent = `Correcto, la respuesta es 6561`;
        }else{
          info5.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: red");
          info5.textContent = `Incorrecto, la respuesta es 6561`;
        }
        info7.setAttribute("style", "left:10px; top : 300px; font-size: 17px; color: blue");
        info7.textContent = `M(9,4) = 6561`;
      }
      bloqueo = true;
    }

    function revisa2(){
      if(bloqueo2 == false){
        if(input2.value == 3024){
          info10.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: blue");
          info10.textContent = `Correcto, la respuesta es 3024`;
        }else{
          info11.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: red");
          info11.textContent = `Incorrecto, la respuesta es 3024`;
        }
        info12.setAttribute("style", "left:10px; top : 300px; font-size: 17px; color: blue");
        info12.textContent = `P(9,4) = 3024`;
      }
      bloqueo2 = true;
    }

    function revisa3(){
      if(bloqueo3 == false){
        if(input3.value == 126){
          info15.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: blue");
          info15.textContent = `Correcto, la respuesta es 126`;
        }else{
          info16.setAttribute("style", "left:10px; top : 250px; font-size: 17px; color: red");
          info16.textContent = `Incorrecto, la respuesta es 126`;
        }
        info17.setAttribute("style", "left:10px; top : 300px; font-size: 17px; color: blue");
        info17.textContent = `C(9,4) = 126`;
      }
      bloqueo3 = true;
    }

});
