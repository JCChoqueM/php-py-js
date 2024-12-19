function maximoArrayInt(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("El input no es un array válido o está vacío.");
  }

  let maximo = array[0]; // Inicializa el máximo con el primer valor del array

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }

  return maximo;
}
