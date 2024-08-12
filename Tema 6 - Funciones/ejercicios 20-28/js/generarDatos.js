let esPrimerClick = true;
let trozoDenumeroError = true;
let contadorDeClicks = 1;
let falsofalso = 0;

let contadorClicks = 0;
let generarNegativoEnTercerClick = false;



function generarDatos() {
  const select = document.getElementById("accion");
  const opcionSeleccionada = select.value;
  const numInput = document.getElementById("tamaño");
  const numInput2 = document.getElementById("minimo");
  const numInput3 = document.getElementById("maximo");
  const numInput4 = document.getElementById("extra");
  /*   console.log("---------------------------------------------"); */
  switch (opcionSeleccionada) {
    case "generaArrayInt":
      let datos = generarTrozoDeNumero();
      numInput.value = datos.tamaño;
      numInput2.value = datos.minimo;
      numInput3.value = datos.maximo;
      resolver();
      break;
    case "minimoArrayInt":
      numInput.value = generarPrimo();
      resolver();
      break;
    case "maximoArrayInt":
      numInput.value = generarSiguientePrimo();
      resolver();
      break;
    case "potencia":
      let numero = generarPotencia();
      numInput.value = numero[0];
      numInput2.value = numero[1];
      resolver();
      break;
    case "digitos":
      numInput.value = generarDigito();
      resolver();
      break;
    case "voltea":
      numInput.value = generarVoltea();
      resolver();
      break;
    case "digitoN":
      let digitoN = generarDigitoN();
      numInput.value = digitoN.input1;
      numInput2.value = digitoN.input2;
      resolver();
      break;
    case "posicionDeDigito":
      let posicionDedigito = generarPosicionDeDigito();
      numInput.value = posicionDedigito.input1;
      numInput2.value = posicionDedigito.input2;
      resolver();
      break;
    case "quitaPorDetras":
      let QuitaPorDetras = generarQuitaPorDetras();
      numInput.value = QuitaPorDetras.input1;
      numInput2.value = QuitaPorDetras.input2;
      resolver();
      break;
    default: // Color por defecto
      numInput.value = 666;
      break;
  }
}

function generarNumeroAleatorio(min, max) {
  // Verificar si se proporcionaron los valores mínimo y máximo del rango
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Los valores mínimo y máximo del rango deben ser números.");
  }

  // Generar un número aleatorio dentro del rango especificado
  return Math.floor(min + Math.random() * (max - min + 1));
}

//SECTION - Inicio 13.- trozoDeNumero
function generarTrozoDeNumero() {
  // Genera un tamaño aleatorio entre 1 y 10
  let tamaño = Math.floor(Math.random() * 10) + 1;

  // Genera un mínimo y máximo aleatorio
  let minimo = Math.floor(Math.random() * 100);
  let maximo = minimo + Math.floor(Math.random() * (100 - minimo));

  // Asegura que tamaño esté dentro del rango permitido
  if (tamaño < 1 || tamaño > 10) {
    tamaño = Math.floor(Math.random() * 10) + 1;
  }

  return { tamaño, minimo, maximo };
}

// !SECTION 13.- trozoDeNumero
