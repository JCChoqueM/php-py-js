function funcion_esCapicua(datos) {
  const numero = Math.abs(datos.num1);
  const numStr = numero.toString();
  const numInvertido = numStr.split('').reverse().join('');
  let resultado = numStr === numInvertido;

  return resultado;
}

function funcion_potencia(params) {
  return Math.pow(params.num1, params.num2);
}
