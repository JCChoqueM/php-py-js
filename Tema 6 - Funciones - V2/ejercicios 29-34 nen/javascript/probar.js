function obtenerDiagonal(matriz, fila, columna, direccion) {
  const diagonales = [];

  // Diagonal de NorOeste a SurEste (NOSE)
  if (direccion === 'NOSE') {
    // Subir y hacia la izquierda (NorOeste)
    let i = fila;
    let j = columna;
    while (i >= 0 && j >= 0) {
      diagonales.push({ coordenada: [i, j], valor: matriz[i][j] });
      i--;
      j--;
    }

    // Bajar y hacia la derecha (SurEste)
    i = fila + 1;
    j = columna + 1;
    while (i < matriz.length && j < matriz[0].length) {
      diagonales.push({ coordenada: [i, j], valor: matriz[i][j] });
      i++;
      j++;
    }
  }

  // Diagonal de NorEste a SurOeste (NESO)
  else if (direccion === 'NESO') {
    // Subir y hacia la derecha (NorEste)
    let i = fila;
    let j = columna;
    while (i >= 0 && j < matriz[0].length) {
      diagonales.push({ coordenada: [i, j], valor: matriz[i][j] });
      i--;
      j++;
    }

    // Bajar y hacia la izquierda (SurOeste)
    i = fila + 1;
    j = columna - 1;
    while (i < matriz.length && j >= 0) {
      diagonales.push({ coordenada: [i, j], valor: matriz[i][j] });
      i++;
      j--;
    }
  }

  // Ordenar las coordenadas primero por fila y luego por columna
  diagonales.sort((a, b) => {
    if (a.coordenada[0] !== b.coordenada[0]) {
      return a.coordenada[0] - b.coordenada[0]; // Primero por fila
    }
    return a.coordenada[1] - b.coordenada[1]; // Luego por columna
  });

  return diagonales;
}

// Ejemplo de uso:
const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const fila = 2;
const columna = 2;

// Obtener diagonal NOSE
const diagonalNOSE = obtenerDiagonal(matriz, fila, columna, 'NOSE');
console.log('Diagonal NOSE:', diagonalNOSE);

// Obtener diagonal NESO
const diagonalNESO = obtenerDiagonal(matriz, fila, columna, 'NESO');
console.log('Diagonal NESO:', diagonalNESO);
