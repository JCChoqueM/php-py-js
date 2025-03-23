function binarioADecimal(divisor) {
  divisor = Math.abs(divisor);
  let suma = 0;
  let i = 0;
  while (divisor > 0) {
    suma += (divisor % 10) * Math.pow(2, i);
    divisor = Math.floor(divisor / 10);
    i++;
  }

  return suma;
}
