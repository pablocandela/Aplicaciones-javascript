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
    this.retros = document.querySelector("#retros");
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.formCom = document.querySelector('#formCom');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:430px");
    this.formCom.setAttribute("src", "Imagenes/formula2.png");
    this.formCom.setAttribute("style", "top:250px; width: 170px; height: 170px; left: 100px");
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.botonOtro = document.querySelector("#botonOtro");
    this.input1.setAttribute("style", "margin: 40px 60px;");
    this.input2.setAttribute("style", "margin: 0px 0px;");

    this.bloqueo = false;
    this.random1 =  Math.floor(Math.random() * 10) + 2;
    this.random2 =  Math.floor(Math.random() * 11) + 1;
    while(random2 > random1){
      this.random2 =  Math.floor(Math.random() * 11) + 1;
    }

    this.info.setAttribute("style", "left:390px;");
    this.expFact2.setAttribute("style", "left:500px; background-color: #C2D5E5");
    this.retros.setAttribute("style", "top: 110; color: red; font-size: 20px");

    this.botonCalcula.setAttribute("style", "left:30px; top : 80px; ");


    this.info2.setAttribute("style", "left:23px; top : 10px; font-size: 17px;");
    this.info2.textContent = `Una combinacion es la variacion del orden o posicion de los
                              elementos de un conjunto, pero a diferencia de las permutaciones el orden no importa `;
    this.info3.setAttribute("style", "left:23px; top : 150px; font-size: 17px;");
    this.info3.textContent = `Las combinaciones se definen de la siguiente manera: El numero de combinaciones
                              de m elementos tomados de n en n se puede denotar por:`;
    this.info4.setAttribute("style", "left:23px; top : 400px; font-size: 17px; color: blue");
    this.info4.textContent = `Ingresa los valores (m,n) y comprueba los resultados`;

    this.info5.setAttribute("style", "left:30px; top : 40px; font-size: 20px;");
    this.info5.textContent = `m:`;

    this.info6.setAttribute("style", "left:195px; top : 40px; font-size: 20px;");
    this.info6.textContent = `n:`;

    this.info7.setAttribute("style", "left:35px; top : 260px; font-size: 30px;");
    this.info7.textContent = `Piensa...`;

    this.info8.setAttribute("style", "left:35px; top : 320px; font-size: 17px;");
    this.info8.textContent = `Suponga que tiene ${this.random1} libros en su casa y desea regalar ${this.random2},¿cuantas maneras de seleccionarlos tienes.?`;

    this.botonCalcula.setAttribute("style", "left:30px; top : 80px; ");
    this.botonOtro.setAttribute("style", "left:100px; top : 80px; ");

    document.querySelector("#botonCalcula").addEventListener("mousedown", () => combinacion());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());

    function factorial (n) {
      var total2 = 1;
      var i = 1;
      for (i; i<=n; i++) {
        total2 = total2 * i;
      }
      return total2;
    }

    function combinacion () {
      if(bloqueo == false){
        retros.display = "none";
        if(input1.value  - input2.value <= -1){
          retros.style.display = "block";
          info9.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : red");
          info9.textContent = `Los siento, vuelve a intentarlo con otro ejercicio`;
          bloqueo = true;
          return
        }
        if(random1 == input1.value && random2 == input2.value){
          var total = factorial(random1);
          var total2 = factorial(random2);
          var total3 = factorial(random1-random2);
          var resultado = total / (total2 * total3);
          info10.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : blue");
          info10.textContent = `Muy bien`;
          bloqueo = true;
        }else{
          var total = factorial(random1);
          var total2 = factorial(random2);
          var total3 = factorial(random1-random2);
          var resultado = total / (total2 * total3);
          info9.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : red");
          info9.textContent = `Los siento, vuelve a intentarlo con otro ejercicio.`;
          bloqueo = true;
        }
        info11.setAttribute("style", "left:35px; top : 150px; font-size: 17px; color : blue; display: block;");
        info11.textContent = `C(${random1},${random2}) = `;
        info12.setAttribute("style", "left:135px; top : 140px; font-size: 17px; color : blue; display: block;" );
        info12.textContent = `${random1}!`;
        info13.setAttribute("style", "left:115px; top : 145px; font-size: 17px; color : blue; display: block;");
        info13.textContent = `_______`;
        info14.setAttribute("style", "left:120px; top : 165px; font-size: 17px; color : blue; display: block;");
        info14.textContent = `${random2}! (${random1-random2}!)`;
        info15.setAttribute("style", "left:35px; top : 215px; font-size: 17px; color : blue; display: block;");
        info15.textContent = `C(${random1},${random2}) = ${resultado}`;
        bloqueo = true;
        return;
      }else{
        return;
      }
    }

    function nuevoEjercicio(){
      info9.style.display = "none";
      info10.style.display = "none";
      info11.style.display = "none";
      info12.style.display = "none";
      info13.style.display = "none";
      info14.style.display = "none";
      info15.style.display = "none";
      random1 =  Math.floor(Math.random() * 10) + 2;
      random2 =  Math.floor(Math.random() * 11) + 1;
      while(random2 > random1){
        random2 =  Math.floor(Math.random() * 11) + 1;
      }
      info8.setAttribute("style", "left:35px; top : 320px; font-size: 17px;");
      info8.textContent = `Suponga que tiene ${random1} libros en su casa y desea regalar ${random2},¿cuantas maneras de seleccionarlos tienes.?`;
      retros.style.display = "none";
      bloqueo = false;
    }


});
