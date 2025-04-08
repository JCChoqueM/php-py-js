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
function minimoArrayInt(array, datos) {
  let minimo = array[0]; // Inicializa el mínimo con el primer valor del array

  for (let i = 1; i < array.length; i++) {
    // Empieza desde el segundo elemento
    if (array[i] < minimo) {
      minimo = array[i];
    }
  }

  return minimo;
}
/* !section fin - 2.-minimoArrayInt */

/* SECTION 3.-maximoArrayInt */
function funcion_maximoArrayInt(array, datos) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('El input no es un array válido o está vacío.');
  }

  let maximo = array[0]; // Inicializa el máximo con el primer valor del array

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i];
    }
  }

  return maximo;
}

/* !SECTION fin - 3.-maximoArrayInt */

/* section 4.-mediaArrayInt */
function funcion_mediaArrayInt(array, datos) {
  // Verifica si el array no está vacío
  if (!Array.isArray(array) || array.length === 0) {
    return 0; // Retorna 0 si el array no es válido o está vacío
  }

  // Suma todos los elementos del array
  const suma = array.reduce((acc, valor) => acc + valor, 0);

  // Calcula el número de elementos en el array
  const numeroDeElementos = array.length;

  // Calcula la media
  const media = suma / numeroDeElementos;

  // Formatea la media a 2 decimales
  return media.toFixed(2);
}

/* !section fin - 4.-mediaArrayInt */

/* SECTION 5.-estaEnArrayInt */
function funcion_estaEnArrayInt(array, datos) {
  numero = parseInt(datos.num4);
  console.log('numero:', numero);
  console.log('array', array);
  // Verifica si 'array' es un array y si 'numero' está en el array
  if (array.includes(numero)) {
    return true;
  }
  return false;
}

/* !SECTION fin - 5.-estaEnArrayInt */
/* section 6.-posicionEnArrayInt */
function funcion_posicionEnArrayInt(array, datos) {
  let posiciones = [];

  extra = parseInt(datos.num4);

  // Verifica si input1 es un array
  if (Array.isArray(array)) {
    array.forEach((valor, indice) => {
      if (valor === extra) {
        posiciones.push(indice);
      }
    });
  } else {
    console.log('El primer parámetro no es un array.');
  }

  return posiciones;
}

/* !section fin - 6.-posicionEnArrayInt */
/* SECTION 7.-volteaArrayInt */
function funcion_volteaArrayInt(input1) {
  let resultado = [];
  let count = input1.length;

  for (let i = count - 1; i >= 0; i--) {
    resultado.push(input1[i]);
  }

  return resultado;
}

/* !SECTION fin - 7.-volteaArrayInt */
/* section 8.-rotaDerechaArrayInt */
function funcion_rotaDerechaArrayInt(array, datos) {
  if (!Array.isArray(array) || array.length === 0) {
    return [array, 0]; // Retorna el array vacío y posición 0 si array es vacío
  }

  // Calcula el número de rotaciones necesarias
  datos = datos.num4 % array.length;

  // Si datos es 0, no se requiere rotación
  if (datos === 0) {
    return [array, 0]; // Retorna el array original y posición 0
  }

  // Extrae las partes del array y las combina en el orden deseado
  const part1 = array.slice(-datos); // Últimos datos elementos
  const part2 = array.slice(0, -datos); // Elementos restantes

  // Calcula la nueva posición del elemento que estaba en el índice 0
  const nuevaPosicion = datos;

  // Devuelve el array rotado y la nueva posición del primer elemento original
  return [part1.concat(part2), nuevaPosicion];
}

/* !section fin - 8.-rotaDerechaArrayInt */
/* SECTION 9.-rotaIzquierdaArrayInt */
function funcion_rotaIzquierdaArrayInt(array, datos) {
  let count = array.length;

  // Si el array está vacío o solo tiene un elemento, no se necesita rotación
  if (count <= 1) {
    return [array, 0];
  }

  // Asegúrate de que n sea un número positivo y menor que el tamaño del array
  datos = datos.num4 % count;

  // Si n es 0, no se requiere rotación
  if (datos === 0) {
    return [array, 0];
  }

  // Realizar la rotación a la izquierda
  let part1 = array.slice(0, datos); // Primeros n elementos
  let part2 = array.slice(datos); // Elementos restantes

  // Calcula la nueva posición del elemento que estaba en el índice 0
  let nuevaPosicion = (count - datos) % count;

  // Devuelve el array rotado y la nueva posición del primer elemento original
  return [part2.concat(part1), nuevaPosicion];
}

/* !SECTION fin - 9.-rotaIzquierdaArrayInt */
