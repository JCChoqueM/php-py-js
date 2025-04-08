function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarDatos() {
  // Generar tamaño, mínimo y máximo de forma aleatoria
  const filas = generarNumeroAleatorio(1, 5); // Tamaño aleatorio entre 1 y 10
  const columnas = generarNumeroAleatorio(1, 5); // Mínimo aleatorio entre 0 y 50
  const minimo = generarNumeroAleatorio(0, 50); // Mínimo aleatorio entre 0 y 50
  const maximo = minimo + generarNumeroAleatorio(25, 90); // Máximo aleatorio mayor que mínimo

  // Guardar en sessionStorage para persistencia
  sessionStorage.setItem('num1', filas);
  sessionStorage.setItem('num2', columnas);
  sessionStorage.setItem('num3', minimo);
  sessionStorage.setItem('num4', maximo);

  // Insertar estos valores en los inputs
  actualizarInputs();

  // Generar y actualizar el array y luego imprimirlo
  generarYActualizarArray();
  enviarFormulario();
}
