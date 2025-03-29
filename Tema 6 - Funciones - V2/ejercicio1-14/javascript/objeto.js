// Función para generar los inputs de manera modular con campos predeterminados
function generarInputs(campos) {
  return campos.map((campo, index) => ({
    label: campo.label,
    id: `num${index + 1}`, // Esto genera un id como num1, num2, etc.
    name: `num${index + 1}`,
    placeholder: campo.placeholder || `Ingrese el valor para ${campo.label}`,
  }));
}

// Crear las secciones directamente usando generarInputs
const textos = [
  {
    texto: 'esCapicua',
    descripcion: 'Devuelve verdadero si el número que se pasa como parámetro es capicúa y falso en caso contrario.',
    inputs: generarInputs([{ label: 'Número', placeholder: 'Ingrese un número aquí' }]),
  },

  {
    texto: 'esPrimo',
    descripcion: 'Ingrese un número para verificar si es primo.',
    inputs: generarInputs([{ label: 'Número', placeholder: 'Ingrese un número aquí' }]),
  },

  {
    texto: 'siguientePrimo',
    descripcion: 'Devuelve el menor primo que es mayor al número que se pasa como parámetro.',
    inputs: generarInputs([{ label: 'Número', placeholder: 'Ingrese un número aquí' }]),
  },

  {
    texto: 'potencia',
    descripcion: 'Dada una base y un exponente devuelve la potencia.',
    inputs: generarInputs([
      { label: 'Base', placeholder: 'Ingrese la base aquí' },
      { label: 'Exponente', placeholder: 'Ingrese el exponente aquí' },
    ]),
  },

  {
    texto: 'digitos',
    descripcion: 'Cuenta el número de dígitos de un número entero.',
    inputs: generarInputs([{ label: 'Número', placeholder: 'Ingrese un número aquí' }]),
  },

  {
    texto: 'voltea',
    descripcion: 'Le da la vuelta a un número.',
    inputs: generarInputs([{ label: 'Número', placeholder: 'Ingrese un número aquí' }]),
  },

  {
    texto: 'digitoN',
    descripcion: 'Devuelve el dígito que está en la posición n de un número entero.',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Posición', placeholder: 'Ingrese la posición aquí' },
    ]),
  },

  {
    texto: 'posicionDeDigito',
    descripcion: 'Da la posición de la primera ocurrencia de un dígito dentro de un número entero.',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Dígito', placeholder: 'Ingrese el dígito aquí' },
    ]),
  },

  {
    texto: 'quitaPorDetras',
    descripcion: 'Le quita a un número n dígitos por detrás (por la derecha).',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Cantidad de dígitos', placeholder: 'Ingrese la cantidad aquí' },
    ]),
  },

  {
    texto: 'quitaPorDelante',
    descripcion: 'Le quita a un número n dígitos por delante (por la izquierda).',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Cantidad de dígitos', placeholder: 'Ingrese la cantidad aquí' },
    ]),
  },

  {
    texto: 'pegaPorDetras',
    descripcion: 'Añade un dígito a un número por detrás.',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Número a pegar', placeholder: 'Ingrese el número aquí' },
    ]),
  },

  {
    texto: 'pegaPorDelante',
    descripcion: 'Añade un dígito a un número por delante.',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Número a pegar', placeholder: 'Ingrese el número aquí' },
    ]),
  },

  {
    texto: 'trozoDeNumero',
    descripcion: 'Toma como parámetros las posiciones inicial y final de un número y devuelve el trozo correspondiente.',
    inputs: generarInputs([
      { label: 'Número', placeholder: 'Ingrese un número aquí' },
      { label: 'Posición inicial', placeholder: 'Ingrese la posición inicial aquí' },
      { label: 'Posición final', placeholder: 'Ingrese la posición final aquí' },
    ]),
  },

  {
    texto: 'juntaNumeros',
    descripcion: 'Pega dos números para formar uno.',
    inputs: generarInputs([
      { label: 'Primer número', placeholder: 'Ingrese el primer número aquí' },
      { label: 'Segundo número', placeholder: 'Ingrese el segundo número aquí' },
    ]),
  },
];
