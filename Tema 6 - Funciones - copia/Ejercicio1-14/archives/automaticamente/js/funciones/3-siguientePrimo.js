function siguientePrimo(numero) {
  for (numero += 1; !esPrimo(numero); numero++);
  return numero;
}
