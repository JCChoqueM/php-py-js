// Función para generar una matriz bidimensional y datos adicionales
function generarMatrizYDatos() {
  // Array para almacenar una secuencia lineal de números aleatorios únicos
  let lineal = [];
  let i = 0;

  // Generación de números aleatorios únicos
  do {
    // Generar un número aleatorio entre 100 y 999
    let n = generarNumeroAleatorio(0, 100);
    // Verificar si el número generado ya está en la secuencia lineal
    lineal.push(n);
    i++;
  } while (i < 12*12); // Repetir hasta tener 54 números únicos

  // Variables para almacenar el valor mínimo y sus coordenadas en la matriz

  i = 0;
  let numero = [];

  // Creación de la matriz bidimensional
  for (let x = 0; x < 12; x++) {
    numero[x] = [];
    for (let y = 0; y < 12; y++) {
      // Llenar la matriz con los números aleatorios únicos
      numero[x][y] = lineal[i];
      i++;
      // Actualizar el valor mínimo y sus coordenadas si se encuentra un nuevo mínimo
    }
  }

  // Imprimir la secuencia lineal, la matriz y el valor mínimo con sus coordenadas
  console.log(lineal);
  console.log(numero);

  // Retornar un objeto con la matriz, el valor mínimo y sus coordenadas
  return {
    num1ero: numero,
  };
}
