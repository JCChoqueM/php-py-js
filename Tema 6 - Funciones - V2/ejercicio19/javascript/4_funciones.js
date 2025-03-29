function DecimalBinario(numeroDecimal) {
  return (parseInt(numeroDecimal, 10) >>> 0).toString(2);
}

function DecimalHexadecimal(numeroDecimal) {
  return (parseInt(numeroDecimal, 10) >>> 0).toString(16).toUpperCase();
}

function DecimalOctal(numeroDecimal) {
  return (parseInt(numeroDecimal, 10) >>> 0).toString(8);
}

function BinarioDecimal(numeroBinario) {
  return parseInt(numeroBinario, 2).toString(10);
}

function HexadecimalDecimal(numeroHexadecimal) {
  return parseInt(numeroHexadecimal, 16).toString(10);
}

function OctalDecimal(numeroOctal) {
  return parseInt(numeroOctal, 8).toString(10);
}

function DecimalDecimal(numeroDecimal) {
  return numeroDecimal;
}

function BinarioBinario(numeroBinario) {
  return numeroBinario;
}

function HexadecimalHexadecimal(numeroHexadecimal) {
  return numeroHexadecimal;
}

function OctalOctal(numeroOctal) {
  return numeroOctal;
}

function BinarioHexadecimal(numeroBinario) {
  return parseInt(numeroBinario, 2).toString(16).toUpperCase();
}

function BinarioOctal(numeroBinario) {
  return parseInt(numeroBinario, 2).toString(8);
}

function HexadecimalBinario(numeroHexadecimal) {
  return parseInt(numeroHexadecimal, 16).toString(2);
}

function HexadecimalOctal(numeroHexadecimal) {
  return parseInt(numeroHexadecimal, 16).toString(8);
}

function OctalBinario(numeroOctal) {
  return parseInt(numeroOctal, 8).toString(2);
}

function OctalHexadecimal(numeroOctal) {
  return parseInt(numeroOctal, 8).toString(16).toUpperCase();
}