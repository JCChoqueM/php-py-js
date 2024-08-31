function generarPrimerDato() {
  // Genera un tamaño aleatorio entre 1 y 10
  let tamaño = generarNumeroAleatorio(1, 9);

  // Genera un mínimo y máximo aleatorio
  let minimo = Math.floor(Math.random() * 100);
  let maximo = minimo + Math.floor(Math.random() * (100 - minimo));

  let extra = generarNumeroAleatorio(1, 9);
  let array = generarArray(tamaño, minimo, maximo);
  return { tamaño, minimo, maximo, extra, array };
}
