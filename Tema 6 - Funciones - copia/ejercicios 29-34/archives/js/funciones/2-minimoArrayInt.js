
function minimoArrayInt(array) {
  let minimo = array[0]; // Inicializa el mínimo con el primer valor del array

  for (let i = 1; i < array.length; i++) {
    // Empieza desde el segundo elemento
    if (array[i] < minimo) {
      minimo = array[i];
    }
  }

  return minimo;
}