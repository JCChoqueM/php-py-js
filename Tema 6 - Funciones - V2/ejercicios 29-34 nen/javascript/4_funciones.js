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
  console.log(matriz)
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

/* !section fin - 2.-minimoArrayInt */
