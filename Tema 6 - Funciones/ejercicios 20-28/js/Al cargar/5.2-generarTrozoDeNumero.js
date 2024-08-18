function generarTrozoDeNumero() {
  // Genera un tamaño aleatorio entre 1 y 10
  let tamaño = Math.floor(Math.random() * 10) + 1;

  // Genera un mínimo y máximo aleatorio
  let minimo = Math.floor(Math.random() * 100);
  let maximo = minimo + Math.floor(Math.random() * (100 - minimo));

  // Asegura que tamaño esté dentro del rango permitido
  if (tamaño < 1 || tamaño > 10) {
    tamaño = Math.floor(Math.random() * 10) + 1;
  }

  return { tamaño, minimo, maximo };
}
