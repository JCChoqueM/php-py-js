let clickCount = 0;
let clickNegativo = generarClickNegativo(); // Se genera al principio

function generarClickNegativo(min = 4, max = 7) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarDatos() {
  const num1 = document.getElementById('num1');
  clickCount++;

  // Si llegó al clic aleatorio, genera número negativo y reinicia
  if (clickCount === clickNegativo) {
    num1.value = -generarNumeroAleatorio(1, 100); // Negativo entre -1 y -100
    clickCount = 0;
    clickNegativo = generarClickNegativo(); // Elegir un nuevo click aleatorio
  } else {
    num1.value = generarNumeroAleatorio(100, 200); // Positivo entre 0 y 100
  }

  enviarFormulario();
}

function enviarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  procesarFormulario(formulario);
}
