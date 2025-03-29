let clickCount = 0; // Asegúrate de definir clickCount en un ámbito adecuado

// Función para generar un número aleatorio en una base dada
function generarNumeroAleatorio(min, max, base = 10) {
  const decimalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return decimalNumber.toString(base).toUpperCase();
}

// Función para generar un número no válido
function generarNumeroNoValido(base) {
  const invalidCharacters = {
    Binario: '2',
    Decimal: 'A',
    Octal: '8',
    Hexadecimal: 'G',
  };

  // Genera un número válido en el rango dado y añade un carácter no válido
  return generarNumeroAleatorio(0, 999, obtenerBase(base)) + (invalidCharacters[base] || '');
}

// Función para obtener la base correspondiente
function obtenerBase(baseSelect) {
  const bases = {
    Binario: 2,
    Decimal: 10,
    Octal: 8,
    Hexadecimal: 16,
  };
  return bases[baseSelect] || 10; // Valor por defecto
}

// Función para manejar la lógica de clics y generar los datos
function generarDatos() {
  const num1 = document.getElementById('num1');
  const baseSelect = document.getElementById('seleccion1').value; // Captura el valor del select

  // Incrementar el contador de clics
  clickCount++;

  const min = 1;
  const max = 999;

  // Definir la función de generación de números según el número de clics y la base seleccionada
  const generateNumber =
    clickCount % 2 === 1 ? () => generarNumeroAleatorio(min, max, obtenerBase(baseSelect)) : () => generarNumeroNoValido(baseSelect);

  // Generar y asignar el número
  num1.value = generateNumber();
  enviarFormulario();
}
