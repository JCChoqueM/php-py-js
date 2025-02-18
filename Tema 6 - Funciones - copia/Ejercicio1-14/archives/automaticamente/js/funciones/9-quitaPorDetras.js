function quitaPorDetras(numero, digito) {
  numero = Math.abs(numero);
  nuevoNumero = Math.trunc(numero / potencia(10, digito));
  return nuevoNumero;
}
