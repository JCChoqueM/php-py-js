function mediaArrayInt(array) {
  // Verifica si el array no está vacío
  if (!Array.isArray(array) || array.length === 0) {
    return 0; // Retorna 0 si el array no es válido o está vacío
  }

  // Suma todos los elementos del array
  const suma = array.reduce((acc, valor) => acc + valor, 0);

  // Calcula el número de elementos en el array
  const numeroDeElementos = array.length;

  // Calcula la media
  const media = suma / numeroDeElementos;

  // Formatea la media a 2 decimales
  return media.toFixed(2);
}
