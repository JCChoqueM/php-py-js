const textos = [
  {
    texto: 'esCapicua',
    descripcion: 'Devuelve verdadero si el número que se pasa como parámetro es capicúa y falso en caso contrario.',
    inputs: [
      {
        label: 'Ingrese un número para verificar si es capicúa:',
        id: 'num1',
        name: 'num1',
        placeholder: 'Ingrese un número aquí:',
      },
    ],
  },

  {
    texto: 'esPrimo',
    descripcion: 'Ingrese un número para verificar si es primo:',
    inputs: [
      {
        label: 'Ingrese un número para verificar si es primo:',
        placeholder: 'Ingrese un número aquí:',
        id: 'num1',
        name: 'num1',
      },
    ],
  },

  {
    texto: 'siguientePrimo',
    descripcion: 'Devuelve el menor primo que es mayor al número que se pasa como parámetro.',
    inputs: [
      {
        label: 'Ingrese un número para encontrar el siguiente primo:',
        placeholder: 'Ingrese un número aquí:',
        id: 'num1',
        name: 'num1',
      },
    ],
  },

  {
    texto: 'potencia',
    descripcion: 'Dada una base y un exponente devuelve la potencia.',
    inputs: [
      {
        label: 'Ingrese la base de la potencia:',
        placeholder: 'Ingrese la base aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese el exponente:',
        placeholder: 'Ingrese el exponente aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },
  {
    texto: 'digitos',
    descripcion: 'Cuenta el número de dígitos de un número entero.',
    inputs: [
      {
        label: 'Ingrese un número para contar sus dígitos:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
    ],
  },

  {
    texto: 'voltea',
    descripcion: 'Le da la vuelta a un número.',
    inputs: [
      {
        label: 'Ingrese un número para voltearlo:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
    ],
  },

  {
    texto: 'digitoN',
    descripcion: 'Devuelve el dígito que está en la posición n de un número entero. Se empieza contando por el 0 y de izquierda a derecha.',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese la posición del dígito que desea obtener:',
        placeholder: 'Ingrese la posición aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'posicionDeDigito',
    descripcion: 'Da la posición de la primera ocurrencia de un dígito dentro de un número entero. Si no se encuentra, devuelve -1.',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese el dígito que desea buscar:',
        placeholder: 'Ingrese el dígito aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'quitaPorDetras',
    descripcion: 'Le quita a un número n dígitos por detrás (por la derecha).',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese la cantidad de dígitos que desea quitar por detrás:',
        placeholder: 'Ingrese la cantidad aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'quitaPorDelante',
    descripcion: 'Le quita a un número n dígitos por delante (por la izquierda).',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese la cantidad de dígitos que desea quitar por delante:',
        placeholder: 'Ingrese la cantidad aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'pegaPorDetras',
    descripcion: 'Añade un dígito a un número por detrás.',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese el número que desea pegar por detrás:',
        placeholder: 'Ingrese el número aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'pegaPorDelante',
    descripcion: 'Añade un dígito a un número por delante.',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese el número que desea pegar por delante:',
        placeholder: 'Ingrese el número aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },

  {
    texto: 'trozoDeNumero',
    descripcion: 'Toma como parámetros las posiciones inicial y final de un número y devuelve el trozo correspondiente.',
    inputs: [
      {
        label: 'Ingrese un número:',
        placeholder: 'Ingrese un número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese la posición inicial del segmento que desea obtener:',
        placeholder: 'Ingrese la posición aquí',
        id: 'num2',
        name: 'num2',
      },
      {
        label: 'Ingrese la posición final del segmento que desea obtener:',
        placeholder: 'Ingrese la posición aquí',
        id: 'num3',
        name: 'num3',
      },
    ],
  },

  {
    texto: 'juntaNumeros',
    descripcion: 'Pega dos números para formar uno.',
    inputs: [
      {
        label: 'Ingrese el primer número:',
        placeholder: 'Ingrese el primer número aquí',
        id: 'num1',
        name: 'num1',
      },
      {
        label: 'Ingrese el segundo número:',
        placeholder: 'Ingrese el segundo número aquí',
        id: 'num2',
        name: 'num2',
      },
    ],
  },
];
