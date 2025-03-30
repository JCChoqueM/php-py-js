function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarDatos() {
  // Generar tamaño, mínimo y máximo de forma aleatoria
  const tamaño = generarNumeroAleatorio(1, 10); // Tamaño aleatorio entre 1 y 10
  const minimo = generarNumeroAleatorio(0, 50); // Mínimo aleatorio entre 0 y 50
  const maximo = minimo + generarNumeroAleatorio(1, 50); // Máximo aleatorio mayor que mínimo

  // Insertar estos valores en los inputs
  document.querySelector('#num1').value = tamaño;
  document.querySelector('#num2').value = minimo;
  document.querySelector('#num3').value = maximo;

  // Mostrar los valores generados (opcional)
  enviarFormulario(); // Llamar a la función para procesar el formulario
}
