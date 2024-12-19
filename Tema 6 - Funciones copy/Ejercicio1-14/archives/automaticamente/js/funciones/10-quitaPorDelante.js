function quitaPorDelante(numero, digito) {
  numero = Math.abs(numero);
  calculo = digitos(numero) - digito;
  nuevoNumero = numero % potencia(10, calculo);
  return nuevoNumero;
}
