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
function construirMensaje_minimoArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  mensajeError = 'El valor minimo del array es: ' + resultado;
  mensajeError += crearTabla(arrayGenerado, -1, resultado);

  return mensajeError;
}
/* !section fin - 2.-minimoArrayInt */

/* SECTION 3.-maximoArrayInt */
function construirMensaje_maximoArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  mensajeError = 'El valor minimo del array es: ' + resultado;
  mensajeError += crearTabla(arrayGenerado, -1, resultado);

  return mensajeError;
}
/* !SECTION fin - 3.-maximoArrayInt */

/* section 4.-mediaArrayInt */
function construirMensaje_mediaArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  let media = resultado;
  let suma = arrayGenerado.reduce((a, b) => a + b, 0);
  let cantidad = arrayGenerado.length;
  let expresion = arrayGenerado.join(' + ') + ' / ' + cantidad + ' = ' + media;
  mensajeError = 'La media del array es: ' + media + '<br><br>';
  mensajeError += 'Expresión matemática utilizada: <br>' + expresion;
  mensajeError += crearTabla(arrayGenerado, -1, -1);

  return mensajeError;
}
/* !section fin - 4.-mediaArrayInt */

/* SECTION 5.-estaEnArrayInt */
function construirMensaje_estaEnArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';
  let extra = datos.num4;
  if (resultado) {
    mensajeError = `El numero ${extra} sí está en el array`;
  } else {
    mensajeError = `El numero ${extra} NO está en el array`;
  }
  mensajeError += crearTabla(arrayGenerado, -1, parseInt(extra));

  return mensajeError;
}
/* !SECTION fin - 5.-estaEnArrayInt */
/* section 6.-posicionEnArrayInt */
function construirMensaje_posicionEnArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';
  let extra = datos.num4;

  let posiciones = resultado;

  if (posiciones.length > 0) {
    mensajeError = `Las posiciones del valor ${extra} son: ${posiciones.join(', ')}`;
    mensajeError += crearTabla(arrayGenerado, -1, parseInt(extra));
  } else {
    mensajeError = `El valor ${extra} no está en el array.`;
    mensajeError += crearTabla(arrayGenerado, -1, -1);
  }

  return mensajeError;
}
/* !section fin - 6.-posicionEnArrayInt */
/* SECTION 7.-volteaArrayInt */
function construirMensaje_volteaArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  let arrayVolteado = resultado;
  mensajeError += 'Array Original:' + crearTablaRotada(arrayGenerado, -1) + '<br>';
  mensajeError += 'Array Volteado:' + crearTablaRotada(arrayVolteado, -1) + '<br>';

  return mensajeError;
}
/* !SECTION fin - 7.-volteaArrayInt */
/* section 8.-rotaDerechaArrayInt */
function construirMensaje_rotaDerechaArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';
  let extra = datos.num4;

  let [arrayRotado, nuevaPosicion] = resultado;
  mensajeError += `Array Original:<br>${crearTablaRotada(arrayGenerado, 0)}<br>`;
  mensajeError += `Array Rotado ${extra} veces:<br>${crearTablaRotada(arrayRotado, nuevaPosicion)}<br>`;

  return mensajeError;
}
/* !section fin - 8.-rotaDerechaArrayInt */
/* SECTION 9.-rotaIzquierdaArrayInt */
function construirMensaje_rotaIzquierdaArrayInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';
  let extra = datos.num4;
  let [arrayRotado, nuevaPosicion] = resultado;
  mensajeError += `Array Original:<br>${crearTablaRotada(arrayGenerado, 0)}<br>`;
  mensajeError += `Array Rotado ${extra} veces:<br>${crearTablaRotada(arrayRotado, nuevaPosicion)}<br>`;

  return mensajeError;
}
/* !SECTION fin - 9.-rotaIzquierdaArrayInt */
