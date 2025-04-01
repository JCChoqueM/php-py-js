/* section 1.-esCapicua */
function funcion_generaArrayInt(tamano, minimo, maximo) {
  minimo = Number(minimo); // Asegurar que son números
  maximo = Number(maximo);
  let valores=Array.from({ length: tamano }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
  return  valores
}
/* !section fin - 1.-esCapicua */


function funcion_minimoArrayInt(array) {
  if (!Array.isArray(array) || array.length === 0) {
    console.warn("⚠ El array está vacío o no es válido.");
    return null;
  }

  return Math.min(...array); // Usa Math.min con spread para simplificar
}