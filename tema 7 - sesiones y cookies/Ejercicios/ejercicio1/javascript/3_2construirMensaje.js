function construirMensaje(resultado) {
  const { datos, promedio } = resultado;
  let mensaje = 'Números ingresados: ' + datos.join(', ');

  if (promedio !== undefined) {
    mensaje += `<span style="color:red"> / ${datos.length}</span> <br> <strong>Promedio:</strong> ${promedio.toFixed(2)}`;
  }

  return mensaje;
}
