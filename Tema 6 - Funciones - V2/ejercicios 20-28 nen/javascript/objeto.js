// Función para generar los inputs de manera modular con campos predeterminados
function generarInputs() {
  const labels = ['Tamaño', 'Minimo', 'Maximo'];
  return labels.map((label, index) => ({
    label: label,
    id: `num${index + 1}`,
    name: `num${index + 1}`,
    placeholder: `Ingrese el ${label.toLowerCase()} que desea en el array:`,
  }));
}

// Crear las secciones directamente usando generarInputs
const textos = [
  /* SECTION 1.-generaArrayInt */
  {
    texto: 'generaArrayInt',
    descripcion: 'Genera un array de tamaño n con números aleatorios cuyo intervalo (minimo y maximo) se pasan como parámetro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !SECTION fin - 1.-generaArrayInt */

  /* section 2.-minimoArrayInt */
  {
    texto: 'minimoArrayInt',
    descripcion: 'Devuelve el minimo del array que se pasa como parámetro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !section fin - 2.-minimoArrayInt */

  /* SECTION 3.-maximoArrayInt */
  {
    texto: 'maximoArrayInt',
    descripcion: ' Devuelve el maximo del array que se pasa como parámetro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !SECTION fin - 3.-maximoArrayInt */

  /* section 4.-mediaArrayInt */
  {
    texto: 'mediaArrayInt',
    descripcion: ' Devuelve la media del array que se pasa como parámetro.',
    inputs: generarInputs(), // Llamar directamente sin necesidad de pasar parámetros
  },
  /* !section fin - 4.-mediaArrayInt */

  /* SECTION 5.-estaEnArrayInt */
  {
    texto: 'estaEnArrayInt',
    descripcion: 'Dice si un número está o no dentro de un array.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Número a Buscar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Ingrese el número que desea buscar en el array:',
      },
    ],
  },
  /* !SECTION fin - 5.-estaEnArrayInt */
  /* section 6.-posicionEnArrayInt */
  {
    texto: 'posicionEnArrayInt',
    descripcion: 'Busca un número en un array y devuelve la posición (el índice) en la que se encuentra.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Número a Buscar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Ingrese el número que desea buscar en el array:',
      },
    ],
  },
  /* !section fin - 6.-posicionEnArrayInt */
  /* SECTION 7.-volteaArrayInt */
  {
    texto: 'volteaArrayInt',
    descripcion: 'Le da la vuelta a un array',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Número a Buscar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Ingrese el número que desea buscar en el array:',
      },
    ],
  },
  /* !SECTION fin - 7.-volteaArrayInt */
  /* section 8.-rotaDerechaArrayInt */
  {
    texto: 'rotaDerechaArrayInt',
    descripcion: 'Rota n posiciones a la derecha los números de un array.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Número a Buscar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Ingrese el número que desea buscar en el array:',
      },
    ],
  },
  /* !section fin - 8.-rotaDerechaArrayInt */
  /* SECTION 9.-rotaIzquierdaArrayInt */
  {
    texto: 'rotaIzquierdaArrayInt',
    descripcion: 'Rota n posiciones a la izquierda los números de un array.',
    inputs: [
      ...generarInputs(), // Usamos los inputs predeterminados
      {
        label: 'Número a Buscar', // El nuevo campo extra
        id: 'num4',
        name: 'num4',
        placeholder: 'Ingrese el número que desea buscar en el array:',
      },
    ],
  },
  /* !SECTION fin - 9.-rotaIzquierdaArrayInt */
];
