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
    this.fondo = document.querySelector('#fondo');
    this.logo = document.querySelector('#logo');
    this.barra = document.querySelector('#barra');
    this.boton_1 = document.querySelector('#boton');
    this.dado3d = document.querySelector('#dado3d');
    this.dado3d2 = document.querySelector('#dado3d2');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.botonOtro = document.querySelector("#botonOtro");
    this.input1 = document.querySelector('#input1');

    this.bloqueo = false;
    this.blusas = 4;
    this.zapatos = 4;
    this.faldas = 7;

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:430px");
    this.boton_1.setAttribute("style", "left:430px");
    this.dado3d.setAttribute("src", "Imagenes/blusa.png");
    this.dado3d.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 30px;")
    this.dado3d2.setAttribute("src", "Imagenes/zapato.png");;
    this.dado3d2.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 100px;");
    this.dado3d3.setAttribute("src", "Imagenes/falda.png");;
    this.dado3d3.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 170px;");
    this.expFact.setAttribute("style", "left:245px; width: 450px;height: 450px; background-color: #C2D5E5" );
    this.input1.setAttribute("style", "margin: 230px 190px;");


    this.info.setAttribute("style", "left:350px;");
    this.info2.setAttribute("style", "left:20px; top : 0px; font-size: 20px;");
    this.info2.textContent = `Maria tiene ${blusas} blusas, ${zapatos} pares de zapatos y ${faldas} faldas
                            ¿de cuantas formas distintas puede vestir maria.`;
    this.info3.setAttribute("style", "left:50px; top : 160px; font-size: 18px; color: blue;");
    this.info3.textContent = `${blusas}`;
    this.info4.setAttribute("style", "left:120px; top : 160px; font-size: 18px; color: blue;");
    this.info4.textContent = `${zapatos}`;
    this.info5.setAttribute("style", "left:190px; top : 160px; font-size: 18px; color: blue;");
    this.info5.textContent = `${faldas}`;
    this.info6.setAttribute("style", "left:20px; top : 235px; font-size: 17px;");
    this.info6.textContent = `Escriba el resultado`;

    this.botonCalcula.setAttribute("style", "left:20px; top : 260px; ");
    this.botonOtro.setAttribute("style", "left:100px; top : 260px; ");
    document.querySelector("#botonCalcula").addEventListener("mousedown", () => reglaMult());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());


    function reglaMult(){
      if(bloqueo == false){
        var total;
        total = blusas * faldas * zapatos;
        if(input1.value == total){
          info10.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: blue;display = block");
          info10.textContent = `Muy bien`;
        }else{
          info11.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: red; display = block");
          info11.textContent = `Lo siento vuelve a intentarlo con otro ejercicio`;
        }
        info9.setAttribute("style", "left:20px; top : 285px; font-size: 17px;");
        info9.textContent = `El total de formas psibles son: ${total}`;
        bloqueo = true;
      }
      return;
    }
    function nuevoEjercicio(){
      blusas = Math.floor(Math.random() * 7) + 1;
      faldas = Math.floor(Math.random() * 5) + 1;
      zapatos = Math.floor(Math.random() * 5) + 1;
      info10.style.display = "none";
      info11.style.display = "none";
      info9.style.display = "none";
      info3.textContent = `${blusas}`;
      info4.textContent = `${zapatos}`;
      info5.textContent = `${faldas}`;
      info2.textContent = `Maria tiene ${blusas} blusas, ${zapatos} pares de zapatos y ${faldas} faldas
                              ¿de cuantas formas distintas puede vestir maria.`;
      bloqueo = false;
    }









});
