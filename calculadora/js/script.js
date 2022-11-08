let valor1 = 0;
let valor2 = 0;
let contm = 0;
let signoFuncionando = "";

let label = document.getElementById("label");
let caja = document.getElementById("cajanum");
const punto = document.getElementById("punto");





function borrar() {
  caja.value = caja.value.slice(0, -1);
}

function limpiar() {
  valor1 = 0;
  valor2 = 0;
  contm = 0;
  caja.value = "";
  caja.placeholder = "0";
  label.innerHTML = "";
}

function escribir(valor) {
  if(caja.value.length == 0 && valor == "."){
    caja.value = "0.";
  }
  if (caja.value.includes(".") && valor == ".") {
  } else {
    if (
      caja.value.length == 1 &&
      caja.value.slice(0, 1) == "0" &&
      valor != "."
    ) {
      caja.value = "";
    }
    caja.value += valor;
  }
}

function operacion(signo) {
  signoFuncionando = signo;
  if (!caja.value == "") {
    if (contm == 0) {
      valor1 = caja.value;
      caja.value = "";
      caja.placeholder = valor1;
      contm = 1;
    } else if (contm == 1) {
      valor2 = caja.value;

      switch (signo) {
        case "+":
          valor1 = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          valor1 = valor1 - valor2;
          break;
        case "*":
          valor1 = valor1 * valor2;
          break;
        case "/":
          valor1 = valor1 / valor2;
          break;
      }
      caja.value = "";
      caja.placeholder = valor1;
    }
  }
}

function igual() {
  if (!caja.value == "") {
    valor2 = caja.value;
    switch (signoFuncionando) {
      case "+":
        valor1 = parseFloat(valor1) + parseFloat(valor2);
        break;
      case "-":
        valor1 = valor1 - valor2;
        break;
      case "*":
        valor1 = valor1 * valor2;
        break;
      case "/":
        valor1 = valor1 / valor2;
        break;
    }
    caja.value = "";
    caja.placeholder = valor1;
    contm = 0;
  }
}

function validarCaracter(tecla) {
  
  if ((tecla >= 48 && tecla <= 57) || tecla == 46) {
      if(tecla == 46 && caja.value.length == 0){
        caja.value = "0.";
            return false;
      }

      escribir(String.fromCharCode(tecla));
      return false;
  } else if (tecla == 43 || tecla == 45 || tecla == 42 || tecla == 47) {
    operacion(String.fromCharCode(tecla));
    return false;
  } else if (tecla == 13) {
    igual();
    return false;
  } else if (tecla == 8) {
    borrar();
    return false;
  } else if (tecla == 27) {
    limpiar();
    return false;
  }

  return false;
}
