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
    this.formPer = document.querySelector('#formPer');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.formPer.setAttribute("src", "Imagenes/formula1.png");
    this.formPer.setAttribute("style", "top:250px; width: 250px; height: 170px; left: 80px");
    this.boton_1.setAttribute("style", "left:430px");
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

    this.info.setAttribute("style", "left:400px;");
    this.retros.setAttribute("style", "top: 110; color: red; font-size: 20px");
    this.expFact2.setAttribute("style", "left:500px; background-color: #C2D5E5");

    this.info2.setAttribute("style", "left:23px; top : 0px; font-size: 17px;");
    this.info2.textContent = `Una permutacion es la variacion del orden o posicion de los
                              elementos de un conjunto ordenado, es decir es una combinacion ordenada.`;

    this.info3.setAttribute("style", "left:23px; top : 100px; font-size: 17px;");
    this.info3.textContent = `Es importante recalcar que en las permutaciones el orden si importa.`;

    this.info4.setAttribute("style", "left:23px; top : 170px; font-size: 17px;");
    this.info4.textContent = `Las permutaciones se definen de la siguiente manera: Se tienen m elementos,
                              de los cuales se eligen n importando el orden y ademas m > n y se calcula con la siguiente formula:`;

    this.info5.setAttribute("style", "left:23px; top : 400px; font-size: 17px; color: blue");
    this.info5.textContent = `Ingresa los valores (m,n) y comprueba los resultados`;

    this.info6.setAttribute("style", "left:30px; top : 40px; font-size: 20px;");
    this.info6.textContent = `m:`;

    this.info7.setAttribute("style", "left:195px; top : 40px; font-size: 20px;");
    this.info7.textContent = `n:`;

    this.info8.setAttribute("style", "left:35px; top : 280px; font-size: 30px;");
    this.info8.textContent = `Si tienes...`;

    this.info9.setAttribute("style", "left:35px; top : 340px; font-size: 17px;");
    this.info9.textContent = `Los primeros ${this.random1} digitos,¿cuantos numeros de ${this.random2} cifras puedes formar?`;

    this.botonCalcula.setAttribute("style", "left:30px; top : 80px; ");
    this.botonOtro.setAttribute("style", "left:100px; top : 80px; ");

    document.querySelector("#botonCalcula").addEventListener("mousedown", () => permutacion());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());

    function factorial (n) {
      var total2 = 1;
      var i = 1;
      for (i; i<=n; i++) {
        total2 = total2 * i;
      }
      return total2;
    }

    function permutacion () {
      if(bloqueo == false){
        retros.display = "none";
        if(input1.value  - input2.value <= -1){
          retros.style.display = "block";
          info10.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : red");
          info10.textContent = `Los siento, vuelve a intentarlo con otro ejercicio`;
          bloqueo = true;
          return
        }
        if(random1 == input1.value && random2 == input2.value){
          var total = factorial(random1)
          var total2 = factorial(random1 - random2)
          var resultado = total / total2;
          info11.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : blue");
          info11.textContent = `Muy bien`;
          bloqueo = true;
        }else{
          var total = factorial(random1)
          var total2 = factorial(random1 - random2)
          var resultado = total / total2;
          info10.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : red");
          info10.textContent = `Los siento, vuelve a intentarlo con otro ejercicio.`;
          bloqueo = true;
        }
        info12.setAttribute("style", "left:35px; top : 150px; font-size: 17px; color : blue; display: block;");
        info12.textContent = `P(${random1},${random2}) = `;
        info13.setAttribute("style", "left:135px; top : 140px; font-size: 17px; color : blue; display: block;" );
        info13.textContent = `${random1}!`;
        info14.setAttribute("style", "left:115px; top : 145px; font-size: 17px; color : blue; display: block;");
        info14.textContent = `_______ = _______`;
        info15.setAttribute("style", "left:120px; top : 165px; font-size: 17px; color : blue; display: block;");
        info15.textContent = `(${random1}-${random2})!`;
        info16.setAttribute("style", "left:220px; top : 140px; font-size: 17px; color : blue; display: block;");
        info16.textContent = `${random1}!`;
        info17.setAttribute("style", "left:220px; top : 165px; font-size: 17px; color : blue; display: block;");
        info17.textContent = `( ${random1 - random2} )!`;
        info18.setAttribute("style", "left:35px; top : 215px; font-size: 17px; color : blue; display: block;");
        info18.textContent = `P(${random1},${random2}) = ${resultado}`;
        bloqueo = true;
        return;
      }else{
        return;
      }
    }

    function nuevoEjercicio(){
      info10.style.display = "none";
      info11.style.display = "none";
      info12.style.display = "none";
      info13.style.display = "none";
      info14.style.display = "none";
      info15.style.display = "none";
      info16.style.display = "none";
      info17.style.display = "none";
      info18.style.display = "none";
      random1 =  Math.floor(Math.random() * 10) + 2;
      random2 =  Math.floor(Math.random() * 11) + 1;
      while(random2 > random1){
        random2 =  Math.floor(Math.random() * 11) + 1;
      }
      info9.setAttribute("style", "left:35px; top : 340px; font-size: 17px;");
      info9.textContent = `Los primeros ${random1} digitos,¿cuantos numeros de ${random2} cifras puedes formar?`;
      retros.style.display = "none";
      bloqueo = false;
    }
});
