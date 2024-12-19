let clickCount = 0;

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNumeroBinario(longitud) {
  let binario = "";
  for (let i = 0; i < longitud; i++) {
    binario += Math.floor(Math.random() * 2); // 0 o 1
  }
  return binario;
}

function llenarFormulario() {
  const num1 = document.getElementById("num1");

  // Incrementar el contador de clics
  clickCount++;

  // Definir el rango según el número de clics
  let min, max;
  if (clickCount % 2 === 1) {
    // Primer clic: números decimales de hasta 3 dígitos (1-999)
    min = 1;
    max = 99;
  } else if (clickCount % 2 === 0) {
    // Segundo clic: números decimales de hasta 6 dígitos (1-999999)
    min = 100;
    max = 9999;
  }

  // Generar y asignar el número aleatorio
  num1.value = generarNumeroAleatorio(min, max);
  resolver();
}
