// Función para convertir un número entre bases numéricas
function convertirBase(numero, baseOrigen, baseDestino) {
  return parseInt(numero, baseOrigen).toString(baseDestino);
}

// Ejemplo de uso
var numeroDecimal = 172;
var numeroBinario = convertirBase(numeroDecimal, 10, 2);
var numeroHexadecimal = convertirBase(numeroDecimal, 10, 16);
var numeroOctal = convertirBase(numeroDecimal, 10, 8);

console.log("Decimal: " + numeroDecimal);
console.log("Binario: " + numeroBinario);
console.log("Hexadecimal: " + numeroHexadecimal);
console.log("Octal: " + numeroOctal);
