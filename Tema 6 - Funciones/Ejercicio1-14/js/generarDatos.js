let esPrimerClick = true;
let trozoDenumeroError = true;
let contadorDeClicks = 1;
let falsofalso = 0;

let contadorClicks = 0;
let generarNegativoEnTercerClick = false;

function generarDatos() {
  const select = document.getElementById("accion");
  const opcionSeleccionada = select.value;
  const numInput = document.getElementById("num1");
  const numInput2 = document.getElementById("num2");
  const numInput3 = document.getElementById("num3");
  /*   console.log("---------------------------------------------"); */
  switch (opcionSeleccionada) {
    case "esCapicua":
      numInput.value = generarCapicua();
      resolver();
      break;
    case "esPrimo":
      numInput.value = generarPrimo();
      resolver();
      break;
    case "siguientePrimo":
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
    case "quitaPorDelante":
      let QuitaPorDelante = generarQuitaPorDelante();
      numInput.value = QuitaPorDelante.input1;
      numInput2.value = QuitaPorDelante.input2;
      resolver();
      break;
    case "pegaPorDetras":
      let posicionPegaPorDetras = generarPegaPorDetras();
      numInput.value = posicionPegaPorDetras.input1;
      numInput2.value = posicionPegaPorDetras.input2;
      resolver();
      break;
    case "pegaPorDelante":
      let posicionPegaPorDelante = generarPegaPorDelante();
      numInput.value = posicionPegaPorDelante.input1;
      numInput2.value = posicionPegaPorDelante.input2;
      validarInputPegaPorDelante(numInput2);
      break;
    case "trozoDeNumero":
      let posicionTrozoDeNumero = generarTrozoDeNumero();
      console.log(numInput);
      numInput.value = posicionTrozoDeNumero.input1;
      numInput2.value = posicionTrozoDeNumero.input2;
      numInput3.value = posicionTrozoDeNumero.input3;
      validarInputTrozoDeNumero();

      break;
    case "juntaNumeros":
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
function contarDigitos(numero) {
  let contador = 0;
  let dividendo = Math.abs(numero);
  if (numero >= 0 && numero < 10) {
    contador = 1;
    return contador;
  } else {
    while (dividendo > 0) {
      contador += 1;
      dividendo = Math.trunc(dividendo / 10);
    }
    return contador;
  }
}
//SECTION - Inicio 1.- esCapicua
// Función para generar un número capicúa aleatorio de 5 cifras
function generarCapicua() {
  let numeroGenerado;

  if (esPrimerClick) {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100000);
    } while (!esCapicuaGenerar(numeroGenerado));
  } else {
    numeroGenerado = generarNumeroAleatorio(0, 100000);
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}

// Función para verificar si un número es capicúa
function esCapicuaGenerar(numero) {
  // Convertir el número en una cadena de texto
  const cadenaNumero = numero.toString();
  // Obtener la cadena invertida
  const cadenaInvertida = cadenaNumero.split("").reverse().join("");
  // Convertir la cadena invertida nuevamente en un número
  const numeroInvertido = parseInt(cadenaInvertida);

  // Comprobar si el número original es igual al invertido
  return numero === numeroInvertido;
}
// !SECTION 1.- esCapicua

//SECTION - Inicio 2.- esPrimo
function generarPrimo() {
  let numeroGenerado;

  if (esPrimerClick) {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100);
    } while (!esPrimoGenerar(numeroGenerado));
  } else {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100);
    } while (esPrimoGenerar(numeroGenerado));
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}

// Función para verificar si un número es capicúa
function esPrimoGenerar(numero) {
  // Un número menor o igual a 1 no es primo
  if (numero <= 1) {
    return false;
  }
  // Iterar desde 2 hasta la raíz cuadrada del número
  // Si el número es divisible por algún otro número, no es primo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  // Si no se encontraron divisores, el número es primo
  return true;
}
// !SECTION 2.- esPrimo
//SECTION - Inicio 3.- siguientePrimo
function generarSiguientePrimo() {
  let numeroGenerado;

  if (esPrimerClick) {
    numeroGenerado = generarNumeroAleatorio(0, 100);
  } else {
    numeroGenerado = generarNumeroAleatorio(100, 200);
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}
// !SECTION 3.- siguientePrimo

//SECTION - Inicio 4.- potencia
function generarPotencia() {
  let numeroGenerado = [];
  for (let i = 0; i < 2; i++) {
    numeroGenerado[i] = generarNumeroAleatorio(-7, 5);
  }
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}
// !SECTION 4.- potencia

//SECTION - Inicio 5.- digitos
function generarDigito() {
  let numeroGenerado;

  if (esPrimerClick) {
    numeroGenerado = generarNumeroAleatorio(0, 99999);
  } else {
    numeroGenerado = generarNumeroAleatorio(-10000, 0);
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}
// !SECTION 5.- digitos

//SECTION - Inicio 6.- voltea
function generarNumeroTerminadoEnCero(min, max) {
  let numero;
  do {
    numero = generarNumeroAleatorio(min, max);
  } while (numero % 10 !== 0);
  return numero;
}

function generarVoltea() {
  contadorClicks++;

  let numeroGenerado;
  if (contadorClicks % 3 === 0) {
    if (generarNegativoEnTercerClick) {
      numeroGenerado = generarNumeroTerminadoEnCero(-999, -1);
    } else {
      numeroGenerado = generarNumeroTerminadoEnCero(0, 999);
    }
    generarNegativoEnTercerClick = !generarNegativoEnTercerClick;
  } else {
    if (esPrimerClick) {
      numeroGenerado = generarNumeroAleatorio(-999, 0);
    } else {
      numeroGenerado = generarNumeroAleatorio(0, 999);
    }
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick;

  return numeroGenerado;
}
// !SECTION 6.- voltea

//SECTION - Inicio 7.- digitoN
function generarDigitoN() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(0, 999999);
  let digitos = contarDigitos(input1);
  if (esPrimerClick) {
    input2 = generarNumeroAleatorio(0, digitos - 1);
  } else {
    input2 = generarNumeroAleatorio(digitos + 2, digitos + 4);
  }
  esPrimerClick = !esPrimerClick;

  return { input1, input2 };
}

// !SECTION 7.- digitoN

//SECTION - Inicio 8.- posicionDeDigito
function generarPosicionDeDigito() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(0, 999999);
  if (esPrimerClick) {
    input2 = generarNumeroAleatorio(0, 9);
  } else {
    input2 = generarNumeroAleatorio(10, 25);
  }
  esPrimerClick = !esPrimerClick;

  return { input1, input2 };
}
// !SECTION 8.- posicionDeDigito

//SECTION - Inicio 9.- quitaPorDetras
function generarQuitaPorDetras() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(0, 999999);
  let digitos = contarDigitos(input1);
  if (esPrimerClick) {
    input2 = generarNumeroAleatorio(0, digitos - 1);
  } else {
    input2 = generarNumeroAleatorio(digitos + 2, digitos + 4);
  }
  esPrimerClick = !esPrimerClick;

  return { input1, input2 };
}

// !SECTION 9.- quitaPorDetras

//SECTION - Inicio 10.- quitaPorDelante
function generarQuitaPorDelante() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(0, 999999);
  let digitos = contarDigitos(input1);
  if (esPrimerClick) {
    input2 = generarNumeroAleatorio(0, digitos - 1);
  } else {
    input2 = generarNumeroAleatorio(digitos + 2, digitos + 4);
  }
  esPrimerClick = !esPrimerClick;

  return { input1, input2 };
}

// !SECTION 10.- quitaPorDelante

//SECTION - Inicio 11.- pegaPorDetras
function generarPegaPorDetras() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(-150, 999);
  if (esPrimerClick) {
    input2 = generarNumeroAleatorio(0, 9);
  } else {
    do {
      input2 = generarNumeroAleatorio(-15, 15);
    } while (!(input2 < 0 || input2 > 9));
  }
  esPrimerClick = !esPrimerClick;
  return { input1, input2 };
}

// !SECTION 11.- pegaPorDetras

//SECTION - Inicio 12.- pegaPorDelante
function generarPegaPorDelante() {
  let input1;
  let input2;
  input1 = generarNumeroAleatorio(0, 999999);
  let digitos = contarDigitos(input1);

  if (esPrimerClick) {
    do {
      input2 = generarNumeroAleatorio(0, digitos);
    } while (!((input2 <= 0 && input2 > -9) || (input2 >= 0 && input2 < 9)));
  } else {
    do {
      input2 = generarNumeroAleatorio(-19, 19);
    } while (
      !((input2 <= -10 && input2 > -19) || (input2 >= 10 && input2 < 19))
    );
  }
  esPrimerClick = !esPrimerClick;

  return { input1, input2 };
}
// !SECTION 12.- pegaPorDelante

//SECTION - Inicio 13.- trozoDeNumero
function generarTrozoDeNumero() {
  let input1, input2, input3;
  input1 = generarNumeroAleatorio(0, 9999999);
  let digitos = contarDigitos(input1) - 1;
  if (falsofalso != 5) {
    if (esPrimerClick) {
      do {
        input2 = generarNumeroAleatorio(0, digitos);
      } while (!(input2 >= 0 && input2 <= digitos));
      do {
        input3 = generarNumeroAleatorio(0, digitos);
      } while (!(input3 >= input2 && input3 <= digitos));
      falsofalso += 1;
    } else {
      if (trozoDenumeroError) {
        input2 = generarNumeroAleatorio(digitos + 1, digitos + 5);
        do {
          input3 = generarNumeroAleatorio(0, digitos);
        } while (!(input3 >= 0 && input3 <= digitos));
        falsofalso += 1;
      } else {
        do {
          input2 = generarNumeroAleatorio(0, digitos);
        } while (!(input2 >= 0 && input2 <= digitos));
        input3 = generarNumeroAleatorio(digitos + 2, digitos + 5);
        falsofalso += 1;
      }
      trozoDenumeroError = !trozoDenumeroError;
    }
  } else {
    input2 = generarNumeroAleatorio(digitos + 1, digitos + 5);
    input3 = generarNumeroAleatorio(digitos + 1, digitos + 5);
    falsofalso = 0;
  }

  esPrimerClick = !esPrimerClick;

  return { input1, input2, input3 };
}

// !SECTION 13.- trozoDeNumero

//SECTION - Inicio 14.- juntaNumeros

// !SECTION 14.- juntaNumeros
