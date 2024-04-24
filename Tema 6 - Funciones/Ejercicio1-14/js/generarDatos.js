let esPrimerClick = true;

function generarDatos() {
  const select = document.getElementById("accion");
  const opcionSeleccionada = select.value;
  const numInput = document.getElementById("num1");

  if (esPrimerClick) {
    if (opcionSeleccionada === "esPrimo") {
      numInput.value = generarPrimo();
    } else {
      numInput.value = generarNumeroAleatorio();
    }
  } else {
    if (opcionSeleccionada === "esPrimo") {
      numInput.value = generarNoPrimo();
    } else {
      numInput.value = generarCapicua();
    }
  }

  esPrimerClick = !esPrimerClick;
}

function generarNumeroAleatorio() {
  // Generar un número aleatorio de 5 cifras
  return Math.floor(10000 + Math.random() * 90000);
}

function generarPrimo() {
  // Implementa la lógica para generar un número primo aleatorio de 5 cifras
  // Por ahora, devuelve 0 como marcador de posición
  return 3;
}

function generarNoPrimo() {
  // Implementa la lógica para generar un número no primo aleatorio de 5 cifras
  // Por ahora, devuelve 0 como marcador de posición
  return 6;
}

function generarCapicua() {
  // Generar un número capicúa aleatorio de 5 cifras
  let numAleatorio;
  do {
    numAleatorio = generarNumeroAleatorio();
  } while (!esCapicua(numAleatorio));
  return numAleatorio;
}

function esCapicua(numero) {
  const numeroInvertido = parseInt(
    numero.toString().split("").reverse().join("")
  );
  return numero === numeroInvertido;
}
