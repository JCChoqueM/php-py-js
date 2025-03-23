function construirMensaje_binarioADecimal(datos, resultado) {
  let numero = parseInt(datos.num1, 10);

  let mensaje = '';
  if (verificarBinario(numero)) {
    mensaje = `El numero binario ${numero} es igual a :<br>${resultado} en base decimal.`;
  } else {
    mensaje = `El numero ${numero} no es binario.`;
  }
  return mensaje;
}

function verificarBinario(divisor) {
  while (divisor > 0) {
    if (divisor % 10 !== 0 && divisor % 10 !== 1) {
      return false;
    }
    divisor = Math.floor(divisor / 10);
  }
  return true;
}
