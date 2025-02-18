function rotaDerechaArrayInt(input1, extra) {
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
