/* section 1.-esCapicua */
function funcion_generaArrayBiInt(filas, columnas, minimo, maximo) {
  minimo = Number(minimo);
  maximo = Number(maximo);
  filas = Number(filas);
  columnas = Number(columnas);

  let matriz = [];

  for (let i = 0; i < filas; i++) {
    let fila = Array.from({ length: columnas }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
    matriz.push(fila);
  }
  console.log(matriz);
  return matriz;
}
/* !section fin - 1.-esCapicua */

function funcion_filaDeArrayBiInt(matriz, datos) {
  let indiceFila = parseInt(datos.num5); // Convertir a entero
  console.log(matriz);
  if (!Array.isArray(matriz) || indiceFila < 0 || indiceFila >= matriz.length) {
    return null; // índice inválido o no es una matriz
  }
  return matriz[indiceFila];
}

/* section 2.-minimoArrayInt */
function funcion_columnaDeArrayBiInt(matriz, datos) {
  let indiceColumna = parseInt(datos.num5); // El índice de la columna que queremos

  if (!Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
    return null; // No es una matriz válida
  }

  if (indiceColumna < 0 || indiceColumna >= matriz[0].length) {
    return null; // Índice fuera de rango
  }

  let columna = [];

  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][indiceColumna]);
  }

  return columna;
}

function funcion_coordenadasEnArrayBiInt(matriz, numero) {
  let coordenadas = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === parseInt(numero.num5)) {
        coordenadas.push([i, j]); // Guarda la posición [fila, columna]
      }
    }
  }
  return coordenadas;
}

function funcion_esPuntoDeSilla(matriz) {
  const puntosDeSilla = [];
  console.log(matriz);
  for (let i = 0; i < matriz.length; i++) {
    const fila = matriz[i];
    const minFila = Math.min(...fila); // Encuentra el mínimo de la fila

    // Buscar todas las columnas donde aparece ese mínimo
    for (let j = 0; j < fila.length; j++) {
      if (fila[j] === minFila) {
        // Verificar si es el máximo en su columna
        let esPunto = true;
        for (let k = 0; k < matriz.length; k++) {
          if (matriz[k][j] > minFila) {
            esPunto = false;
            break;
          }
        }

        if (esPunto) {
          puntosDeSilla.push([i, j]);
        }
      }
    }
  }

  return puntosDeSilla;
}

/* !section fin - 2.-minimoArrayInt */

function funcion_diagonal(matriz, datos) {
  const diagonales = [];
  const fila = Number(datos.num5);
  const columna = Number(datos.num6);
  const direccion = Number(datos.num7);
  // Diagonal de NorOeste a SurEste (NOSE)
  if (direccion === 1) {
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
  else if (direccion === 2) {
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
console.log('diagonales',diagonales)
  return diagonales;
}
