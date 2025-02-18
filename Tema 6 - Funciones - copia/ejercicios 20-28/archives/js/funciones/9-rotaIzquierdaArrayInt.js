function rotaIzquierdaArrayInt(input1, n) {
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
