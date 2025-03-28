function construirMensaje_decimalABinario(datos, resultado) {
  let numero = parseInt(datos.num1, 10);

  let mensaje = '';
  if (verificarDecimal(numero)) {
    mensaje = `El numero decimal ${numero} es igual a :<br>${resultado} en base binario.`;
  } else {
    mensaje = `El numero ${numero} no es binario.`;
  }
  return mensaje;
}

function verificarDecimal(divisor) {
  while (divisor > 0) {
    if (divisor % 10 >= 0 && divisor % 10 <= 9) {
      divisor = Math.floor(divisor / 10);
    } else {
      return false;
    }
  }
  return true;
}
