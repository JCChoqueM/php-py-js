function pegaPorDelante(numero, numero2) {
  const aux = digitos(numero);
  const pegado = Math.abs(numero2) * potencia(10, aux) + Math.abs(numero);
  return numero2 < 0 ? -pegado : pegado;
}
