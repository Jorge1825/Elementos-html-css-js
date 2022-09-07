//Inicializacion de variables

let targetasAbiertas = 0;
let targeta1 = null;
let targeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let Aciertos = 0;
let temporizador = false;
let tiempo = 30;
let tiemporegresivo = null;
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);


//Audios
let buenmovimiento = new Audio("./sounds/buenMovimiento.wav");
let click = new Audio("./sounds/click.mp3");
let ganapartida = new Audio("./sounds/ganapartida.mp3");
let malmovimiento = new Audio("./sounds/malmovimiento.wav");
let pierdepartida = new Audio("./sounds/pierdepartida.mp3");
let time = new Audio("./sounds/time2.mp3");

//Apuntando a documento
let MostrarMovimientos = document.getElementById("Movimientos");
let MostrarAciertos = document.getElementById("Aciertos");
let mostrarTiempo = document.getElementById("TiempoRestante");
let boton = document.getElementById("btn-2");


//Funciones secundarias

function Reiniciar() {
  location.reload();  //location.reload sirve para recargar la pagina
}


function contarTiempo() {
  tiemporegresivo = setInterval(() => {
    time.play();
    tiempo--;
    mostrarTiempo.innerHTML = "Tiempo: " + tiempo + " segundos";
    if (tiempo == 0) {
      clearInterval(tiemporegresivo);
      bloquear_targetas();
      pierdepartida.play();

    }
  }, 1000);
}

function bloquear_targetas() {
  for (let i = 0; i <= 15; i++) {
    let target = document.getElementById(i);
    target.innerHTML = `<img class="target" src="./img/${numeros[i]}.png" alt="${numeros[i]}">`;;
    if (target.disabled == false) {
        target.disabled = true;
        target.classList.add("ColorTargetaPerdedora");
    } 
  }

  //Activar el boton reiniciar 
  boton.classList.add("reiniciar")



}

//Funcion principal

function Abrir(id) {

  
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }
  click.play();
  targetasAbiertas++;
  if (targetasAbiertas == 1) {
    //Mostrar numero
    targeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    targeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="${primerResultado}"/>`;

    //deshabilitar boton
    targeta1.disabled = true;



  } else if (targetasAbiertas == 2) {
    //Mostrar segundo numero
    targeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    targeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="${segundoResultado}"/>`;;

    //deshabilitar resulado
    targeta2.disabled = true;

    //Incrementar movimientos
    movimientos++;
    //Mostrar mensaje con numero de movimientos
    MostrarMovimientos.innerHTML = "Movimientos: " + movimientos;

    if (primerResultado === segundoResultado) {
      //Reiniciar variables
      targetasAbiertas = 0;
      Aciertos++;

      //Mostrar mensaje con numero de aciertos
      MostrarAciertos.innerHTML = "Aciertos: " + Aciertos;
      targeta1.classList.add("ColorTargetaGana");
     targeta2.classList.add("ColorTargetaGana");
     buenmovimiento.play();

      if (Aciertos == 8) {
        clearInterval(tiemporegresivo);
        MostrarAciertos.innerHTML = "Aciertos: " + Aciertos + " 😱";
        mostrarTiempo.innerHTML =
          "Fantastico, solo te demoraste " + (30 - tiempo) + " segundos";
        MostrarMovimientos.innerHTML = "Movimientos: " + movimientos + " ✌️😎";
        ganapartida.play();
        boton.classList.add("reiniciar")
        
      }
    } else {
      //Mostrar momentaneamente los numeros
      setTimeout(() => {
        malmovimiento.play();
        targeta1.innerHTML = " ";
        targeta2.innerHTML = " ";
        targeta1.disabled = false;
        targeta2.disabled = false;
        targetasAbiertas = 0;
      }, 400);
    }
  }
}
