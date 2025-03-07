function funcion_esCapicua(datos) {
  const numStr = datos.toString();
  const numInvertido = numStr.split('').reverse().join('');
  return numStr === numInvertido;
}
