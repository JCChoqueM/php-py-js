function decimalBinario(numeroDecimal) {
  // Convertir de decimal a binario
  return Number(numeroDecimal).toString(2);
}

function decimalHexadecimal(numeroDecimal) {
  // Convertir de decimal a hexadecimal
  return Number(numeroDecimal).toString(16).toUpperCase(); // Convertir a mayúsculas para una mejor presentación
}

function decimalOctal(numeroDecimal) {
  // Convertir de decimal a octal
  return Number(numeroDecimal).toString(8);
}
