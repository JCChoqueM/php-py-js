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
  let min, max, longitud;
  if (clickCount % 2 === 1) {
    // Primer clic: números decimales de hasta 3 dígitos (1-999)
    min = 1;
    max = 999;
    num1.value = generarNumeroAleatorio(min, max);
  } else if (clickCount % 2 === 0) {
    // Segundo clic: números binarios con una longitud aceptable
    longitud = Math.floor(Math.random() * 8) + 4; // Longitud entre 4 y 11 bits
    num1.value = generarNumeroBinario(longitud);
  }

  resolver();
}
