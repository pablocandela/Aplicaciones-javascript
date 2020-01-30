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
    this.input1.setAttribute("style", "margin: 200px 200px;");
    this.bloqueo = false;

    this.aspirantes = 4;
    this.premios = 2;

    this.info.setAttribute("style", "left:360px;");
    this.info2.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
    this.info2.textContent = `${aspirantes} aspirantes se han presentado a un concurso de pintura. El concurso otorga $200 al primer lugar y $100 al segundo. ¿De cuántas formas se pueden repartir los premios de primer y segundo lugar?`;
    this.dado3d.setAttribute("src", "Imagenes/Persona.png");
    this.dado3d.setAttribute("style", "top:120px; width: 50px; height: 50px; left: 30px;")
    this.dado3d2.setAttribute("src", "Imagenes/Persona.png");;
    this.dado3d2.setAttribute("style", "top:120px; width: 50px; height: 50px; left: 100px;");
    this.dado3d3.setAttribute("src", "Imagenes/Persona.png");;
    this.dado3d3.setAttribute("style", "top:120px; width: 50px; height: 50px; left: 170px;");
    this.dado3d4.setAttribute("src", "Imagenes/Persona.png");;
    this.dado3d4.setAttribute("style", "top:120px; width: 50px; height: 50px; left: 240px;");
    this.info3.setAttribute("style", "left:20px; top : 205px; font-size: 17px;");
    this.info3.textContent = `Ingresa tu resultado`;

    this.botonCalcula.setAttribute("style", "left:20px; top : 230px; ");
    this.botonOtro.setAttribute("style", "left:90px; top : 230px; ");


    document.querySelector("#botonCalcula").addEventListener("mousedown", () => permutaciones());
    document.querySelector("#botonOtro").addEventListener("mousedown", () => nuevoEjercicio());


    function factorial (n) {
      var total2 = 1;
      var i = 1;
      for (i; i<=n; i++) {
        total2 = total2 * i;
      }
      return total2;
    }

    function permutaciones() {
      if(bloqueo == false){
        var resultadoUsuario = input1.value;
        var total = factorial(aspirantes)
        var total2 = factorial(aspirantes - premios)
        var resultado = total / total2;

        info4.setAttribute("style", "left:23px; top : 280px; font-size: 17px;");
        info4.textContent = `El resultado es  ${resultado}`;

        if(resultadoUsuario == resultado){
          info5.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: blue");
          info5.textContent = `Muy bien`;
        }else{
          info6.setAttribute("style", "left:20px; top : 350px; font-size: 17px; color: red");
          info6.textContent = `Lo siento vuelve a intentarlo con otro ejercicio`;
        }
        info7.setAttribute("style", "left:20px; top : 10px; font-size: 17px;");
        info7.textContent = `Sabemos que el numero de aspirantes es ${aspirantes} y el numero de premios es 2
                              , entonces nuestra m es ${aspirantes} y n es 2. Notemos que el orden si importa ya que no es lo mismo quedar en primer lugar que en segundo`;

        info8.setAttribute("style", "left:20px; top : 125px; font-size: 17px;");
        info8.textContent = `Si sustituimos los valores obtenidos en la formula de las permutaciones tenemos que:`;

        info9.setAttribute("style", "left:35px; top : 180px; font-size: 17px; color : blue; display: block;");
        info9.textContent = `P(${aspirantes},2) =  `;

        info10.setAttribute("style", "left:135px; top : 170px; font-size: 17px; color : blue; display: block;" );
        info10.textContent = `${aspirantes}!`;

        info11.setAttribute("style", "left:115px; top : 175px; font-size: 17px; color : blue; display: block;");
        info11.textContent = `_______ = _______`;

        info12.setAttribute("style", "left:120px; top : 195px; font-size: 17px; color : blue; display: block;");
        info12.textContent = `(${aspirantes}- 2)!`;

        info13.setAttribute("style", "left:220px; top : 170px; font-size: 17px; color : blue; display: block;");
        info13.textContent = `${aspirantes}!`;

        info14.setAttribute("style", "left:220px; top : 195px; font-size: 17px; color : blue; display: block;");
        info14.textContent = `( ${aspirantes - 2} )!`;

        info15.setAttribute("style", "left:35px; top : 235px; font-size: 17px; color : blue; display: block;");
        info15.textContent = `P(${aspirantes},2) = ${resultado}`;

        info16.setAttribute("style", "left:35px; top : 275px; font-size: 17px; color : blue; display: block;");
        info16.textContent = `Por lo tanto los premios se pueden repartir de ${resultado} formas diferentes."`;
        bloqueo = true;
        return;
      }

    }

    function nuevoEjercicio(){
      var ant = aspirantes;
      while(aspirantes == ant){
        aspirantes = Math.floor(Math.random() * 3) + 2;
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
      info11.style.display = "none";
      info12.style.display = "none";
      info13.style.display = "none";
      info14.style.display = "none";
      info15.style.display = "none";
      info16.style.display = "none";
      if(aspirantes >= 2){
        dado3d.style.display = "block";
        dado3d2.style.display = "block";
      }
      if(aspirantes >= 3){
        dado3d3.style.display = "block";
      }
      if(aspirantes >= 4){
        dado3d4.style.display = "block";
      }
      info2.textContent = `${aspirantes} aspirantes se han presentado a un concurso de pintura. El concurso otorga $200 al primer lugar y $100 al segundo. ¿De cuántas formas se pueden repartir los premios de primer y segundo lugar?`;
      bloqueo = false;
      return;
    }




});
