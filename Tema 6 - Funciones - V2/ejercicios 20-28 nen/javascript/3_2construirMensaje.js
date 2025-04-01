/* section 1.-esCapicua */
function construirMensaje_generaArrayInt(datos, resultado) {
  let mensajeError = '';
  if (Array.isArray(resultado)) {
    mensajeError = 'El array Generado es:';
    mensajeError += crearTabla(resultado, -1, -1);
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}
/* !section fin - 1.-esCapicua */

/* section 2.-minimoArrayInt */
function construirMensaje_minimoArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    mensajeError = "El valor minimo del array es: " + minimoArrayInt(input1);
    mensajeError += crearTabla(input1, -1, minimoArrayInt(input1));
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}
/* !section fin - 2.-minimoArrayInt */

/* SECTION 3.-maximoArrayInt */
function construirMensaje_maximoArrayInt(input1) {
  let mensajeError = "";
  if (Array.isArray(input1)) {
    mensajeError = "El valor maximo del array es: " + maximoArrayInt(input1);
    mensajeError += crearTabla(input1, -1, maximoArrayInt(input1));
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}
/* !SECTION fin - 3.-maximoArrayInt */

/* section 4.-mediaArrayInt */
function construirMensaje_mediaArrayInt(input1) {
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
/* !section fin - 4.-mediaArrayInt */

/* SECTION 5.-estaEnArrayInt */
function construirMensaje_estaEnArrayInt(input1, extra) {
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
/* !SECTION fin - 5.-estaEnArrayInt */
/* section 6.-posicionEnArrayInt */
function construirMensaje_posicionEnArrayInt(input1, extra) {
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
/* !section fin - 6.-posicionEnArrayInt */
/* SECTION 7.-volteaArrayInt */
function construirMensaje_volteaArrayInt(input1) {
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
/* !SECTION fin - 7.-volteaArrayInt */
/* section 8.-rotaDerechaArrayInt */
function construirMensaje_rotaDerechaArrayInt(input1, extra) {
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
/* !section fin - 8.-rotaDerechaArrayInt */
/* SECTION 9.-rotaIzquierdaArrayInt */
function construirMensaje_rotaIzquierdaArrayInt(input1, extra) {
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
/* !SECTION fin - 9.-rotaIzquierdaArrayInt */