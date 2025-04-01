/* section 1.-esCapicua */
function funcion_generaArrayInt(tamano, minimo, maximo) {
  minimo = Number(minimo); // Asegurar que son números
  maximo = Number(maximo);
  let valores = Array.from({ length: tamano }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
  return valores;
}
/* !section fin - 1.-esCapicua */

function funcion_minimoArrayInt(array) {
  if (!Array.isArray(array) || array.length === 0) {
    console.warn('⚠ El array está vacío o no es válido.');
    return null;
  }

  return Math.min(...array); // Usa Math.min con spread para simplificar
}

/* section 2.-minimoArrayInt */
function minimoArrayInt(array) {
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
function funcion_maximoArrayInt(array) {
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
function funcion_mediaArrayInt(array) {
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
function funcion_estaEnArrayInt(array, numero) {
  numero = parseInt(numero);
  console.log(typeof numero);
  console.log(typeof array);
  // Verifica si 'array' es un array y si 'numero' está en el array
  if (array.includes(numero)) {
    return true;
  }
  return false;
}

/* !SECTION fin - 5.-estaEnArrayInt */
/* section 6.-posicionEnArrayInt */
function funcion_posicionEnArrayInt(input1, extra) {
  let posiciones = [];
  console.log('.......................');
  console.log(input1);
  console.log(extra);

  extra = parseInt(extra);
  console.log(['2', 4, 'hola', '4']);
  // Verifica si input1 es un array
  if (Array.isArray(input1)) {
    input1.forEach((valor, indice) => {
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
function funcion_rotaDerechaArrayInt(input1, extra) {
  if (!Array.isArray(input1) || input1.length === 0) {
    return [input1, 0]; // Retorna el array vacío y posición 0 si input1 es vacío
  }

  // Calcula el número de rotaciones necesarias
  extra = extra % input1.length;

  // Si extra es 0, no se requiere rotación
  if (extra === 0) {
    return [input1, 0]; // Retorna el array original y posición 0
  }

  // Extrae las partes del input1 y las combina en el orden deseado
  const part1 = input1.slice(-extra); // Últimos extra elementos
  const part2 = input1.slice(0, -extra); // Elementos restantes

  // Calcula la nueva posición del elemento que estaba en el índice 0
  const nuevaPosicion = extra;

  // Devuelve el array rotado y la nueva posición del primer elemento original
  return [part1.concat(part2), nuevaPosicion];
}

/* !section fin - 8.-rotaDerechaArrayInt */
/* SECTION 9.-rotaIzquierdaArrayInt */
function funcion_rotaIzquierdaArrayInt(input1, n) {
  let count = input1.length;

  // Si el array está vacío o solo tiene un elemento, no se necesita rotación
  if (count <= 1) {
    return [input1, 0];
  }

  // Asegúrate de que n sea un número positivo y menor que el tamaño del array
  n = n % count;

  // Si n es 0, no se requiere rotación
  if (n === 0) {
    return [input1, 0];
  }

  // Realizar la rotación a la izquierda
  let part1 = input1.slice(0, n); // Primeros n elementos
  let part2 = input1.slice(n); // Elementos restantes

  // Calcula la nueva posición del elemento que estaba en el índice 0
  let nuevaPosicion = (count - n) % count;

  // Devuelve el array rotado y la nueva posición del primer elemento original
  return [part2.concat(part1), nuevaPosicion];
}

/* !SECTION fin - 9.-rotaIzquierdaArrayInt */
