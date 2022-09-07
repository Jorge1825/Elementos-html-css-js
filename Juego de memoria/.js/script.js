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

//Apuntando a documento
let MostrarMovimientos = document.getElementById("Movimientos");
let MostrarAciertos = document.getElementById("Aciertos");
let mostrarTiempo = document.getElementById("TiempoRestante");

//Funciones secundarias

function contarTiempo() {
  tiemporegresivo = setInterval(() => {
    tiempo--;
    mostrarTiempo.innerHTML = "Tiempo: " + tiempo + " segundos";
    if (tiempo == 0) {
      clearInterval(tiemporegresivo);
      bloquear_targetas();
    }
  }, 1000);
}

function bloquear_targetas() {
  for (let i = 0; i <= 15; i++) {
    let target = document.getElementById(i);
    target.innerHTML = numeros[i];
    if (target.disabled == false) {
        target.disabled = true;
        target.classList.add("ColorTargetaPerdedora");
    } 
  }
}

//Funcion principal

function Abrir(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }

  targetasAbiertas++;
  if (targetasAbiertas == 1) {
    //Mostrar numero
    targeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    targeta1.innerHTML = primerResultado;

    //deshabilitar resulado
    targeta1.disabled = true;
  } else if (targetasAbiertas == 2) {
    //Mostrar segundo numero
    targeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    targeta2.innerHTML = segundoResultado;

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

      if (Aciertos == 8) {
        clearInterval(tiemporegresivo);
        MostrarAciertos.innerHTML = "Aciertos: " + Aciertos + " 😱";
        mostrarTiempo.innerHTML =
          "Fantastico, solo te demoraste " + (30 - tiempo) + " segundos";
        MostrarMovimientos.innerHTML = "Movimientos: " + movimientos + " ✌️😎";
      }
    } else {
      //Mostrar momentaneamente los numeros
      setTimeout(() => {
        targeta1.innerHTML = " ";
        targeta2.innerHTML = " ";
        targeta1.disabled = false;
        targeta2.disabled = false;
        targetasAbiertas = 0;
      }, 400);
    }
  }
}
