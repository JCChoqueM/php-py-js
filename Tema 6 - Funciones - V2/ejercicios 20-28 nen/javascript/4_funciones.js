/* section 1.-esCapicua */
function funcion_generaArrayInt(tamano, minimo, maximo) {
  minimo = Number(minimo); // Asegurar que son números
  maximo = Number(maximo);
  return Array.from({ length: tamano }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
}
/* !section fin - 1.-esCapicua */
