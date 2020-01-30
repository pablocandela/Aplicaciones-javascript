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
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.formCom = document.querySelector('#formCom');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.botonOtro = document.querySelector("#botonOtro");
    this.input1 = document.querySelector('#input1');

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:450px");
    this.expFact2.setAttribute("style", "left:500px; background-color: #C2D5E5");
    this.input1.setAttribute("style", "margin: 230px 200px;");
    this.bloqueo = false;

    this.disponibles = 5;
    this.camisas = 3;
    this.bloqueo = false;

    this.info.setAttribute("style", "left:400px;");
    this.info2.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
    this.info2.textContent = `Maria va de compras y se detiene en una tienda donde hay una oferta,
                              si compra ${camisas - 1} camisas le regalan otra `;
    this.info3.setAttribute("style", "left:20px; top : 80px; font-size: 17px;");
    this.info3.textContent = `¿De cuantas formas puede maria llevarse sus camisas si no puede
                              repetir color y solo hay disponibles las que se muestran.`;
    this.dado3d.setAttribute("src", "Imagenes/camisa5.png");
    this.dado3d.setAttribute("style", "top:160px; width: 50px; height: 50px; left: 30px;")
    this.dado3d2.setAttribute("src", "Imagenes/camisa6.png");
    this.dado3d2.setAttribute("style", "top:160px; width: 50px; height: 50px; left: 100px;");
    this.dado3d3.setAttribute("src", "Imagenes/camisa7.png");
    this.dado3d3.setAttribute("style", "top:160px; width: 50px; height: 50px; left: 170px;");
    this.dado3d4.setAttribute("src", "Imagenes/camisa8.png");
    this.dado3d4.setAttribute("style", "top:160px; width: 50px; height: 50px; left: 240px;");
    this.dado3d5.setAttribute("src", "Imagenes/camisaazul.png");
    this.dado3d5.setAttribute("style", "top:160px; width: 50px; height: 50px; left: 310px;");
    this.info4.setAttribute("style", "left:20px; top : 235px; font-size: 17px;");
    this.info4.textContent = `Ingresa tu resultado`;

    this.botonCalcula.setAttribute("style", "left:20px; top : 260px; ");
    this.botonOtro.setAttribute("style", "left:90px; top : 260px; ");


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
          var resultadoUsuario = input1.value;
          var total = factorial(disponibles);
          var total2 = factorial(camisas);
          var total3 = factorial(disponibles-camisas);
          var resultado = total / (total2 * total3);
          console.log(resultado);
          if(resultado == resultadoUsuario){
            info5.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : blue");
            info5.textContent = `Muy bien`;
          }else{
            info6.setAttribute("style", "left:35px; top : 390px; font-size: 17px; color : red");
            info6.textContent = `Los siento, vuelve a intentarlo con otro ejercicio.`;
          }
          info7.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
          info7.textContent = `Sabemos que hay ${disponibles} camisas disponibles para escojer pero que
                                solo nos llevaremos ${camisas}, en este caso m es ${disponibles} y n es ${camisas}`;
          info8.setAttribute("style", "left:20px; top : 90px; font-size: 17px;");
          info8.textContent = `Si sustituimos los valores obtenidos en la formula de las combinaciones tenemos que:`;

          info9.setAttribute("style", "left:35px; top : 150px; font-size: 17px; color : blue; display: block;");
          info9.textContent = `C(${disponibles},${camisas}) = `;
          info10.setAttribute("style", "left:135px; top : 140px; font-size: 17px; color : blue; display: block;" );
          info10.textContent = `${disponibles}!`;
          info11.setAttribute("style", "left:115px; top : 145px; font-size: 17px; color : blue; display: block;");
          info11.textContent = `_______`;
          info12.setAttribute("style", "left:120px; top : 165px; font-size: 17px; color : blue; display: block;");
          info12.textContent = `${camisas}! (${disponibles-camisas}!)`;
          info13.setAttribute("style", "left:35px; top : 215px; font-size: 17px; color : blue; display: block;");
          info13.textContent = `C(${disponibles},${camisas}) = ${resultado}`;
          info14.setAttribute("style", "left:35px; top : 265px; font-size: 17px; color : blue; display: block;");
          info14.textContent = `Por lo tanto hay ${resultado} formas diferentes de elegir que camisas llevar."`;
          bloqueo = true;
          return;
        }else{
          return;
        }
    }

    function nuevoEjercicio(){
      var ant2 = camisas;
      while(camisas == ant2){
        camisas = Math.floor(Math.random() * 4)+2;
      }
      disponibles = camisas + 1;
      dado3d.style.display = "none";
      dado3d2.style.display = "none";
      dado3d3.style.display = "none";
      dado3d4.style.display = "none";
      dado3d5.style.display = "none";
      info4.style.display = "none";
      info5.style.display = "none";
      info6.style.display = "none";
      info7.style.display = "none";
      info8.style.display = "none";
      info9.style.display = "none";
      info10.style.display = "none";
      info11.style.display = "none";
      info12.style.display = "none";
      info13.style.display = "none";
      info14.style.display = "none";
      if(disponibles >= 3){
        dado3d.style.display = "block";
        dado3d2.style.display = "block";
        dado3d3.style.display = "block";
      }
      if(disponibles >= 4){
        dado3d4.style.display = "block";
      }
      if(disponibles >= 5){
        dado3d5.style.display = "block";
      }
      info2.textContent = `Maria va de compras y se detiene en una tienda donde hay una oferta,
                                si compra ${camisas - 1} camisas le regalan otra `;
      bloqueo = false;
      return;
    }




});
