// app/includes/archivo2.js

// Función para imprimir si un número está en el array
function imprimirEstaEnArrayInt(input1, extra) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    if (estaEnArrayInt(input1, extra)) {
      mensajeError = `El numero ${extra} sí está en el array`;
    } else {
      mensajeError = `El numero ${extra} NO está en el array`;
    }
    mensajeError += crearTabla(input1, -1, parseInt(extra));
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}

// Función para imprimir la posición de un valor en el array
function imprimirPosicionEnArrayInt(input1, extra) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    let posiciones = posicionEnArrayInt(input1, extra);
 
    if (posiciones.length > 0) {
      mensajeError = `Las posiciones del valor ${extra} son: ${posiciones.join(
        ", "
      )}`;
      mensajeError += crearTabla(input1, -1, parseInt(extra));
    } else {
      mensajeError = `El valor ${extra} no está en el array.`;
      mensajeError += crearTabla(input1, -1, parseInt(extra));
    }
  } else {
    mensajeError = "El primer parámetro no es un array.";
  }
  return mensajeError;
}

// Función para imprimir el array rotado a la derecha
function imprimirRotaDerechaArrayInt(input1, extra) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    let [arrayRotado, nuevaPosicion] = rotaDerechaArrayInt(input1, extra);
    mensajeError += `Array Original:<br>${crearTablaRotada(input1, 0)}<br>`;
    mensajeError += `Array Rotado ${extra} veces:<br>${crearTablaRotada(
      arrayRotado,
      nuevaPosicion
    )}<br>`;
  } else {
    mensajeError = "El índice 'arrayGenerado' no es un array.";
  }
  return mensajeError;
}

// Función para imprimir el array rotado a la izquierda
function imprimirRotaIzquierdaArrayInt(input1, extra) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    let [arrayRotado, nuevaPosicion] = rotaIzquierdaArrayInt(input1, extra);
    mensajeError += `Array Original:<br>${crearTablaRotada(input1, 0)}<br>`;
    mensajeError += `Array Rotado ${extra} veces:<br>${crearTablaRotada(
      arrayRotado,
      nuevaPosicion
    )}<br>`;
  } else {
    mensajeError = "El índice 'arrayGenerado' no es un array.";
  }
  return mensajeError;
}
