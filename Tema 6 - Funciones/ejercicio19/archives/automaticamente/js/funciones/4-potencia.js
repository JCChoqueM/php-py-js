function potencia(base, exponente) {
  let potencia = 1;
  for (let i = exponente; i > 0; i--) {
    potencia = potencia * base;
  }
  return potencia;
}
