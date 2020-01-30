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
    this.boton_2 = document.querySelector('#boton1');
    this.dado3d = document.querySelector('#dado3d');
    this.dado3d2 = document.querySelector('#dado3d2');
    this.botonCalcula = document.querySelector("#botonCalcula");
    this.botonOtro = document.querySelector("#botonOtro");
    this.input1 = document.querySelector('#input1');

    this.bloqueo = false;
    this.random1 =  5;

    this.fondo.setAttribute("src","Imagenes/Fondo.jpeg");
    this.logo.setAttribute("src", "Imagenes/Ciencias.png");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_1.setAttribute("style", "left:350px");
    this.boton_2.setAttribute("style", "left:480px");
    this.boton_2.setAttribute("style", "left:480px");
    this.dado3d.setAttribute("src", "Imagenes/dado3d.png");
    this.dado3d.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 30px;")
    this.dado3d2.setAttribute("src", "Imagenes/dado3d.png");;
    this.dado3d2.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 100px;");
    this.dado3d3.setAttribute("src", "Imagenes/dado3d.png");;
    this.dado3d3.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 170px;");
    this.dado3d4.setAttribute("src", "Imagenes/dado3d.png");;
    this.dado3d4.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 240px;");
    this.dado3d5.setAttribute("src", "Imagenes/dado3d.png");;
    this.dado3d5.setAttribute("style", "top:110px; width: 50px; height: 50px; left: 310px;");
    this.expFact.setAttribute("style", "left:245px; width: 450px;height: 450px; background-color: #C2D5E5" );
    this.input1.setAttribute("style", "margin: 230px 190px;");


    this.info.setAttribute("style", "left:350px;");
    this.info2.setAttribute("style", "left:20px; top : 0px; font-size: 21px;");
    this.info2.textContent = `Si se lanzan ${random1} dados ¿de cuantas formas distintas puede caer?`;
    this.info3.setAttribute("style", "left:50px; top : 160px; font-size: 18px; color: blue;");
    this.info3.textContent = `6`;
    this.info4.setAttribute("style", "left:120px; top : 160px; font-size: 18px; color: blue;");
    this.info4.textContent = `6`;
    this.info5.setAttribute("style", "left:190px; top : 160px; font-size: 18px; color: blue;");
    this.info5.textContent = `6`;
    this.info6.setAttribute("style", "left:260px; top : 160px; font-size: 18px; color: blue;");
    this.info6.textContent = `6`;
    this.info7.setAttribute("style", "left:330px; top : 160px; font-size: 18px; color: blue;");
    this.info7.textContent = `6`;
    this.info8.setAttribute("style", "left:20px; top : 235px; font-size: 17px;");
    this.info8.textContent = `Escriba el resultado`;

    this.botonCalcula.setAttribute("style", "left:20px; top : 260px; ");
    this.botonOtro.setAttribute("style", "left:100px; top : 260px; ");
    document.querySelector("#botonCalcula").addEventListener("mousedown", () => reglaMult());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());


    function reglaMult(){
      if(bloqueo == false){
        var i = 1;
        var total = 6;
        for(i; i < random1; i++){
          total = total * 6;
        }
        if(input1.value == total){
          info10.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: blue");
          info10.textContent = `Muy bien`;
          bloqueo = true;
        }else{
          info11.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: red");
          info11.textContent = `Lo siento vuelve a intentarlocon otro ejercicio`;
          bloqueo = true;
        }
        info9.setAttribute("style", "left:20px; top : 285px; font-size: 17px;");
        info9.textContent = `El total de formas distintas en el que pueden caer es: ${total}`;
        bloqueo = true;
      }
    }

    function nuevoEjercicio(){
      var ant = random1;
      while(random1 == ant){
        random1 = Math.floor(Math.random() * 5) + 1;
      }
      dado3d.style.display = "none";
      info3.style.display = "none";
      dado3d2.style.display = "none";
      info4.style.display = "none";
      dado3d3.style.display = "none";
      info5.style.display = "none";
      dado3d4.style.display = "none";
      info6.style.display = "none";
      dado3d5.style.display = "none";
      info7.style.display = "none";
      info9.style.display = "none";
      info10.style.display = "none";
      info11.style.display = "none";
      if(random1 >= 1){
        dado3d.style.display = "block";
        info3.style.display = "block";
      }
      if(random1 >= 2){
        dado3d2.style.display = "block";
        info4.style.display = "block";
      }
      if(random1 >= 3){
        dado3d3.style.display = "block";
        info5.style.display = "block";
      }
      if(random1 >= 4){
        dado3d4.style.display = "block";
        info6.style.display = "block";
      }
      if(random1 >= 5){
        dado3d5.style.display = "block";
        info7.style.display = "block";
      }
      info2.textContent = `Si se lanzan ${random1} dados ¿de cuantas formas distintas puede caer?`;
      bloqueo = false;
    }
});
