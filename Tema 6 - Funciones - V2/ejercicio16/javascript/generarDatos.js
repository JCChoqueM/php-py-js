let clickCount = 0;

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarDatos() {
  const num1 = document.getElementById("num1");

  // Incrementar el contador de clics
  clickCount++;

  // Definir el rango según el número de clics
  let min, max;
  if (clickCount % 4 === 1) {
    // Primer clic: números de 1 dígito (1-9)
    min = 1;
    max = 99;
  } else if (clickCount % 4 === 2) {
    // Segundo clic: números de 2 a 3 dígitos (10-999)
    min = 10;
    max = 999;
  } else if (clickCount % 4 === 3) {
    // Tercer clic: números de 4 a 5 dígitos (1000-99999)
    min = 1000;
    max = 99999;
  } else {
    // Cuarto clic y posteriores: números de 6 a 6 dígitos (100000-999999)
    min = 100000;
    max = 999999;
  }

  // Generar y asignar el número aleatorio
  num1.value = generarNumeroAleatorio(min, max);
  enviarFormulario();
}