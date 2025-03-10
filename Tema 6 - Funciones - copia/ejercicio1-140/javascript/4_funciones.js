function funcion_esCapicua(num1) {
  const numero = Math.abs(num1);
  const numStr = numero.toString();
  const numInvertido = numStr.split('').reverse().join('');
  return numStr === numInvertido;
}
function funcion_esPrimo(params) {
  const numero = Math.abs(params);
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}
function funcion_potencia(num1, num2) {
  return Math.pow(num1, num2);
}

function funcion_digitos(num) {
  return Math.abs(num).toString().length;
}