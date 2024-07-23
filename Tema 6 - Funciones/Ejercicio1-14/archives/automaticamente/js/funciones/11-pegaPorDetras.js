function pegaPorDetras(numero, digito) {
  let pegado = Math.abs(numero) * 10 + digito;
  if (numero < 0) {
    return -pegado;
  } else {
    return pegado;
  }
}
