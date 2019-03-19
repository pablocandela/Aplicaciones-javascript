window.addEventListener("load", function(evt) {
  let container = document.querySelector("#container");
  //Tendremos un manejador de evetos para mostrar la imagen al dar click con el mouse.
  let children = evt.target.querySelectorAll(".special_div");
  //Nos servira para mostrar el mensaje oculto al terminar la partida.
  let oculto = evt.target.querySelectorAll(".texto_oculto");
  //Nos servira para hacer el cambio de imagen en cada turno.
  let imagen = evt.target.querySelector(".img"); 
  //Varaiable para evitar que se pueda seguir jugando cuando se haya encontrado un ganador.
  let bloquea = false;
  let turnoActual = 0;//Bandera para saber de quien es el turno.

  //Inicializamos el tablero del juego.
  inicializaTablero(children);
  
  container.addEventListener("mousedown", function(evt) {
    evt.target.setAttribute("clicked", true);
    manejaEventos(evt);
    seleccionaGnador(children);          
   
  });

  /**
   * Funcion que nos ayudara a manejar cada evento que ocurre con el raton.
   * Cuando una casilla es seleccionada se le asignara la imagen correspondiente a el 
   * jugador que la presiono.
   * @param {Se recibe el evento que esta ocurriendo} evt 
   */
  function manejaEventos(evt){
    if(!bloquea){
      if(turnoActual % 2 == 0 && evt.target.style.backgroundImage == "" && evt.target != container){
        evt.target.style.backgroundImage = "url('circulo.png')"; // background-image:url('marca.svg');
        evt.target.setAttribute("jugadorA",1);
        cambiaTurno();
      }else if(evt.target.style.backgroundImage == "" && evt.target != container){
        evt.target.style.backgroundImage = "url('cruz.png')"; // background-image:url('marca.svg');
        evt.target.setAttribute("jugadorA",0);
        cambiaTurno();
      }
    }
  }

  /**
   * Funcion que inicializara el tablero de la partida.
   * @param {Recibe el arreglo con las casillas que tendra el tablero} children 
   */
  function inicializaTablero(children){
    children[0].style.top = "-15px"; children[0].style.left = "30px";
    children[1].style.borderTop = "4px solid #000000"; children[1].style.top = "-15px"; 
    children[1].style.left = "30px";
    children[2].style.borderTop = "4px solid #000000"; children[2].style.top = "-15px"; 
    children[2].style.left = "30px";
    children[3].style.left = "180px"; children[3].style.top = "-473px"; children[3].style.borderLeft = "4px solid #000000"; 
    children[3].style.borderBottom = "4px solid #000000"; 
    children[4].style.left = "180px"; children[4].style.top = "-473px"; children[4].style.borderLeft = "4px solid #000000"; 
    children[4].style.borderBottom = "4px solid #000000";
    children[5].style.left = "180px"; children[5].style.top = "-473px"; children[5].style.borderLeft = "4px solid #000000"; 
    children[6].style.left = "330px"; children[6].style.top = "-931px"; children[6].style.borderLeft = "4px solid #000000"; 
    children[6].style.borderBottom = "4px solid #000000"; 
    children[7].style.left = "330px"; children[7].style.top = "-931px"; children[7].style.borderLeft = "4px solid #000000"; 
    children[7].style.borderBottom = "4px solid #000000";
    children[8].style.left = "330px"; children[8].style.top = "-931px"; children[8].style.borderLeft = "4px solid #000000"; 
  }

  /**Funcion que imprimira en pantalla el ganador de la partida cuando detecte
   * tres imagenes del mismo tipo en linea.
   * @param {Recibe el arreglo que contiene a cada uno de los div} children
   */
  function seleccionaGnador(children){
    if(children[0].style.backgroundImage == children[1].style.backgroundImage && children[1].style.backgroundImage == children[2].style.backgroundImage
      && children[0].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[3].style.backgroundImage == children[4].style.backgroundImage && children[4].style.backgroundImage == children[5].style.backgroundImage
      && children[3].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[6].style.backgroundImage == children[7].style.backgroundImage && children[7].style.backgroundImage == children[8].style.backgroundImage
      && children[6].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[0].style.backgroundImage == children[3].style.backgroundImage && children[3].style.backgroundImage == children[6].style.backgroundImage
      && children[0].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[1].style.backgroundImage == children[4].style.backgroundImage && children[4].style.backgroundImage == children[7].style.backgroundImage
      && children[1].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[2].style.backgroundImage == children[5].style.backgroundImage && children[5].style.backgroundImage == children[8].style.backgroundImage
      && children[2].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[0].style.backgroundImage == children[4].style.backgroundImage && children[4].style.backgroundImage == children[8].style.backgroundImage
      && children[0].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      else if(children[6].style.backgroundImage == children[4].style.backgroundImage && children[4].style.backgroundImage == children[2].style.backgroundImage
      && children[6].style.backgroundImage != "")
        muestraGanador(turnoActual % 2);
      if(turnoActual == 9)
        oculto[2].style.display = "block";
  }
  
   /**
   * Funcion que hara visible el mensaje oculto del ganador de la partida,si el turnoGanador
   * es 0 significa que el jugador 1 gano y se mostrara en pantalla, en caso contrario
   * se mostrara que el hanador fue el jugador 2.
   * @param {Recibe un entero que representa el turno en el que se gano la partida} codigoGanador
   */
  function muestraGanador(codigoGanador) {
    bloquea = true;
    if(codigoGanador == 1 && turnoActual != 9)
      oculto[0].style.display = "block";  
    else if(turnoActual != 9)
      oculto[1].style.display = "block";
  }

  /**
   * Funcion que cambiara la imagen que muestra a que jugador le toca tirar,
   * si recibe 0 la imagen mostrada sera la del circulo, en caso contrario se mostrara la cruz.
   * @param {Recibe el turno en el que se encuentra la partida} turnoActual 
   */
  function cambiaTurno(){
    if(turnoActual % 2 == 1)
      imagen.style.content = "url('circulo.png')";
    else
      imagen.style.content = "url('cruz.png')";
    turnoActual = turnoActual + 1;
  }
});