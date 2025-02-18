function pegaPorDetras(numero, numero2) {
  const exponente = digitos(numero2);
  const pegado = Math.abs(numero) * potencia(10, exponente) + Math.abs(numero2);
  return numero < 0 ? -pegado : pegado;
}
