// app/includes/archivo2.js

// Función para imprimir el array generado
function imprimirGenerarArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    mensajeError = "El array Generado es:";
    mensajeError += crearTabla(input1, -1, -1);
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}

// Función para imprimir el valor mínimo del array
function imprimirMinimoArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    mensajeError = "El valor minimo del array es: " + minimoArrayInt(input1);
    mensajeError += crearTabla(input1, -1, minimoArrayInt(input1));
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}

// Función para imprimir el valor máximo del array
function imprimirMaximoArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    mensajeError = "El valor maximo del array es: " + maximoArrayInt(input1);
    mensajeError += crearTabla(input1, -1, maximoArrayInt(input1));
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}

// Función para imprimir la media del array
function imprimirMediaArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    let media = mediaArrayInt(input1);
    let suma = input1.reduce((a, b) => a + b, 0);
    let cantidad = input1.length;
    let expresion = input1.join(" + ") + " / " + cantidad + " = " + media;
    mensajeError = "La media del array es: " + media + "<br><br>";
    mensajeError += "Expresión matemática utilizada: <br>" + expresion;
    mensajeError += crearTabla(input1, -1, -1);
  } else {
    mensajeError = "El índice 'arrayGenerado' no es un array.";
  }
  return mensajeError;
}

// Función para imprimir el array volteado
function imprimirVolteaArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    let arrayVolteado = volteaArrayInt(input1);
    mensajeError += "Array Original:" + crearTablaRotada(input1, -1) + "<br>";
    mensajeError +=
      "Array Volteado:" + crearTablaRotada(arrayVolteado, -1) + "<br>";
  } else {
    mensajeError = "El índice 'arrayGenerado' no es un array.";
  }
  return mensajeError;
}
