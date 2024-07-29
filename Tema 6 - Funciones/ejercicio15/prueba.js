// Función para crear un array bidimensional de 12x12 con números aleatorios del 0 al 100
function createRandomArray() {
  const rows = 4;
  const cols = 4;
  const array = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const randomNumber = Math.floor(Math.random() * 101); // Número aleatorio entre 0 y 100
      row.push(randomNumber);
    }
    array.push(row);
  }

  return array;
}

// Función para imprimir una matriz como una tabla con celdas
function printMatrixAsTable(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Imprimir tabla
  console.log("+---------------------------------+".repeat(cols));
  for (let i = 0; i < rows; i++) {
    let row = "|";
    for (let j = 0; j < cols; j++) {
      row += ` ${matrix[i][j].toString().padStart(3, " ")} |`;
    }
    console.log(row);
    console.log("+---------------------------------+".repeat(cols));
  }
}

// Crear una matriz aleatoria
const randomArray = createRandomArray();

// Imprimir la matriz aleatoria como una tabla con celdas
console.log("Matriz Aleatoria:");
printMatrixAsTable(randomArray);
