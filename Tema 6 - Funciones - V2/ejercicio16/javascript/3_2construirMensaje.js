/* section 1.-esCapicua */
function construirMensaje_numerosCapicua(datos, resultado) {
  const numero = Number(datos.num1);
  let mensaje = '';

  switch (true) {
    case numero > 1 && numero <= 1000:
      mensaje = imprimirTabla(resultado);
      break;
    default:
      mensaje = 'Solo se permiten numeros entre 1 y 99999';
  }

  return mensaje;
}
/* !section fin - 1.-esCapicua */
