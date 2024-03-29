// Función para generar una matriz bidimensional y datos adicionales
function generarMatrizYDatos() {
  // Array para almacenar una secuencia lineal de números aleatorios únicos
  let lineal = [];
  let i = 0;

  // Generación de números aleatorios únicos
  do {
    // Generar un número aleatorio entre 100 y 999
    let n = generarNumeroAleatorio(100, 999);
    // Verificar si el número generado ya está en la secuencia lineal
    if (!lineal.includes(n)) {
      // Si no está presente, agregarlo al array
      lineal.push(n);
      i++;
    }
  } while (i < 54); // Repetir hasta tener 54 números únicos

  // Variables para almacenar el valor mínimo y sus coordenadas en la matriz
  let minimo = 999;
  i = 0;
  let xMinimo;
  let yMinimo;
  let numero = [];

  // Creación de la matriz bidimensional
  for (let x = 0; x < 6; x++) {
    numero[x] = [];
    for (let y = 0; y < 9; y++) {
      // Llenar la matriz con los números aleatorios únicos
      numero[x][y] = lineal[i];
      i++;
      // Actualizar el valor mínimo y sus coordenadas si se encuentra un nuevo mínimo
      if (numero[x][y] < minimo) {
        minimo = numero[x][y];
        xMinimo = x;
        yMinimo = y;
      }
    }
  }

  // Imprimir la secuencia lineal, la matriz y el valor mínimo con sus coordenadas
  console.log(lineal);
  console.log(numero);
  console.log(
    `El valor mínimo es ${minimo} en la posición [${xMinimo}][${yMinimo}].`
  );

  // Retornar un objeto con la matriz, el valor mínimo y sus coordenadas
  return {
    num1ero: numero,
    minimo: minimo,
    xMinimo: xMinimo,
    yMinimo: yMinimo,
  };
}
