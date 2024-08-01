let clickCount = 0;

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function llenarFormulario() {
  const num1 = document.getElementById("num1");

  // Incrementar el contador de clics
  clickCount++;

  // Definir el rango según el número de clics
  let min, max;
  if (clickCount % 3 === 1) {
    // Primer clic: 1-100
    min = 1;
    max = 100;
  } else if (clickCount % 3 === 2) {
    // Segundo clic: 101-1000
    min = 101;
    max = 1000;
  } else {
    // Tercer clic: 1001-2000
    min = 1001;
    max = 2000;
  }

  // Generar y asignar el número aleatorio
  num1.value = generarNumeroAleatorio(min, max);
  resolver();
}
