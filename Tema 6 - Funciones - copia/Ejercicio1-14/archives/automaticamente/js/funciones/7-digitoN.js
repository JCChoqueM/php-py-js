function digitoN(numero, posicion) {
  let digito_numero = digitos(numero);
  let exponente = digito_numero - posicion - 1;
  let primero = Math.trunc(numero / potencia(10, exponente));
  let segundo = primero % 10;
  return segundo;
}
