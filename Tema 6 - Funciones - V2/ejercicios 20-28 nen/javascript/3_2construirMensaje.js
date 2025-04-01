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
function construirMensaje_minimoArrayInt(datos, resultado) {

  let mensajeError = '';

    mensajeError = 'El valor minimo del array es: ' + resultado;

  return mensajeError;
}
