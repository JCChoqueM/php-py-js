/* section 1.-esCapicua */
function construirMensaje_numerosPrimos(datos, resultado) {
  const numero = Number(datos.num1);
  let mensaje = '';

  switch (true) {
    case numero > 1 && numero <= 1000:
      mensaje = imprimirTabla(resultado);
      break;
    case numero === 0 || numero === 1:
      mensaje = 'No hay números primos menores a 2';
      break;
    case numero < 0:
      mensaje = 'No se permiten números negativos';
      break;
    default:
      mensaje = 'El número debe estar entre 2 y 1000';
  }

  return mensaje;
}
/* !section fin - 1.-esCapicua */

