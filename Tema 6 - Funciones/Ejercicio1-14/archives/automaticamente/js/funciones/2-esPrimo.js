function esPrimo(numero) {
  // Un número menor o igual a 1 no es primo
  if (numero <= 1) {
    return false;
  }
  // Iterar desde 2 hasta la raíz cuadrada del número
  // Si el número es divisible por algún otro número, no es primo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  // Si no se encontraron divisores, el número es primo
  return true;
}
