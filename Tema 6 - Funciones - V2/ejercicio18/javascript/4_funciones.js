function decimalABinario(divisor) {
  divisor = Math.abs(divisor);
  let suma = 0;
  let i = 0;
  while (divisor > 0) {
    if (divisor % 2 === 1) {
      suma += Math.pow(10, i);
    }
    divisor = Math.floor(divisor / 2);
    i++;
  }
  return suma;
}
