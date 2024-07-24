function pegaPorDelante(numero, numero2) {
  let aux = digitos(numero);
  let pegado = Math.abs(numero2) * potencia(10, aux) + Math.abs(numero);
  if (numero2 < 0) {
    return -pegado;
  } else {
    return pegado;
  }
}
