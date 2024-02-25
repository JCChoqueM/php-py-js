const MAX_LEN = 5;

// Función para copiar el contenido de un array a otro.
function arraySet(dst, src) {
  for (let i = 0; i < MAX_LEN; i++) {
    for (let j = 0; j < MAX_LEN; j++) {
      dst[i][j] = src[i][j];
    }
  }
}

// Función para girar hacia la derecha.
function rotateRight(arr) {
  const newArr = Array.from({ length: MAX_LEN }, () => Array(MAX_LEN).fill(""));

  for (let i = 0; i < MAX_LEN - 1; i++) {
    newArr[0][i + 1] = arr[0][i];
  }

  for (let i = 0; i < MAX_LEN - 1; i++) {
    newArr[i + 1][MAX_LEN - 1] = arr[i][MAX_LEN - 1];
  }

  for (let i = 0; i < MAX_LEN - 1; i++) {
    newArr[MAX_LEN - 1][i] = arr[MAX_LEN - 1][i + 1];
  }

  for (let i = 0; i < MAX_LEN - 1; i++) {
    newArr[i][0] = arr[i + 1][0];
  }

  arraySet(arr, newArr);
}

// Función para imprimir el array.
function printArray(arr) {
  console.log("");
  for (let i = 0; i < MAX_LEN; i++) {
    let row = "";
    for (let j = 0; j < MAX_LEN; j++) {
      row += "\t" + arr[i][j];
    }
    console.log(row);
  }
  console.log("");
}

// Punto de entrada
function main() {
  // Array para operar
  const arr = [
    ["a", "b", "c", "d", "e"],
    ["p", " ", " ", " ", "f"],
    ["o", " ", " ", " ", "g"],
    ["n", " ", " ", " ", "h"],
    ["m", "l", "k", "j", "i"],
  ];

  printArray(arr); // Imprimir la matriz original
  rotateRight(arr); // Realizar una rotación hacia la derecha
  printArray(arr); // Imprimir la matriz rotada
}

// Iniciar el programa
main();
