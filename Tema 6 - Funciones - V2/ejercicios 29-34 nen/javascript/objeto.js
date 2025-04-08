// Función para generar los inputs de manera modular con campos predeterminados
function generarInputs() {
  const labels = ['Filas', 'Columnas', 'Minimo', 'Maximo'];
  return labels.map((label, index) => ({
    label: label,
    id: `num${index + 1}`,
    name: `num${index + 1}`,
    placeholder: `${label.toLowerCase()}`,
  }));
}

// Crear las secciones directamente usando generarInputs
const textos = [
  /* SECTION 1.-generaArrayBiInt */
  {
    texto: 'generaArrayBiInt',
    descripcion: 'Genera un array de tamaño n x m con números aleatorios cuyo intervalo (minimo y máximo) se indica como parametro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !SECTION fin - 1.-generaArrayBiInt */

  /* section 2.-filaDeArrayBiInt */
  {
    texto: 'filaDeArrayBiInt',
    descripcion: 'Devuelve la fila i-ésima del array que se pasa como parámetro.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'numero de fila', // El nuevo campo extra
        id: 'num5',
        name: 'num5',
        placeholder: 'Evaluar:',
      },
    ],
  },
  /* !section fin - 2.-filaDeArrayBiInt */

  /* SECTION 3.-columnaDeArrayBiInt */
  {
    texto: 'columnaDeArrayBiInt',
    descripcion: ' Devuelve la columna j-ésima del array que se pasa como parámetro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !SECTION fin - 3.-columnaDeArrayBiInt */

  /* section 4.-coordenadasEnArrayBiInt */
  {
    texto: 'coordenadasEnArrayBiInt',
    descripcion:
      'Devuelve la fila y la columna (en un array con dos elementos) de la primera ocurrencia de un número dentro de un array bidimensional. Si el número no se encuentra en el array, la funcion devuelve el array {-1, -1}',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !section fin - 4.-coordenadasEnArrayBiInt */

  /* SECTION 5.-esPuntoDeSilla */
  {
    texto: 'esPuntoDeSilla',
    descripcion: 'Dice si un número es o no punto silla, es decir, mínimo en su fila y máximo en su columna.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Evaluar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Evaluar:',
      },
    ],
  },
  /* !SECTION fin - 5.-esPuntoDeSilla */
  /* section 6.-diagonal */
  {
    texto: 'diagonal',
    descripcion: `Devuelve un array que contiene una de las diagonales del array bidimensional que se pasa como parámetro. Se pasan como parámetros fila, columna y direccion. La fila y la columna determinan el número que marcará las dos posibles diagonales dentro del array. La dirección es una cadena de caracteres que puede ser "NOSE" o "NESO" .
    La cadena "NOSE" indica que se elige la diagonal que va del NorOeste hacia el SurEste, mientras que la cadena "NESO" indica que se elige la diagonal que va del NorEste hacia el SurOeste .`,
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Buscar Número', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Buscar:',
      },
    ],
  },
  /* !section fin - 6.-diagonal */
];
