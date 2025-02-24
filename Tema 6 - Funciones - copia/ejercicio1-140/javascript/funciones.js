const acciones = {
  imprimir_esCapicua,
};

function esCapicua(num) {
  let numAbs = Math.abs(num).toString(); // Convertir a positivo y a string
  let numReverso = numAbs.split('').reverse().join(''); // Invertir el número

  let esCapicua = numAbs === numReverso; // Comparar original vs. invertido
  let color = esCapicua ? 'green' : 'red'; // Seleccionar color según resultado
  let estado = esCapicua ? 'es capicúa' : 'NO es capicúa'; // Mensaje dinámico

  return `El número <span style='color: ${color}'>${numAbs}</span> ${estado}`;
}
