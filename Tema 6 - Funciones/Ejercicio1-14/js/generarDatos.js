let esPrimerClick = true

function generarDatos () {
  const select = document.getElementById('accion')
  const opcionSeleccionada = select.value
  const numInput = document.getElementById('num1')
  const numInput2 = document.getElementById('num2')
  console.log(esPrimerClick)
  switch (opcionSeleccionada) {
    case 'esCapicua':
      numInput.value = generarCapicua()
      break
    case 'esPrimo':
      numInput.value = generarPrimo()
      break
    case 'siguientePrimo':
      numInput.value = generarSiguientePrimo()
      break
    case 'potencia':
      let numero = generarPotencia()
      numInput.value = numero[0]
      numInput2.value = numero[1]
      break
    case 'digitos':
      numInput.value = generarDigito()
      break
    case 'voltea':
      break
    case 'digitoN':
      break
    case 'posicionDeDigito':
      break
    case 'quitaPorDetras':
      break
    case 'quitaPorDelante':
      break
    case 'pegaPorDetras':
      break
    case 'pegaPorDelante':
      break
    case 'trozoDeNumero':
      break
    case 'juntaNumeros':
      break
    default: // Color por defecto
      numInput.value = 666
      break
  }
}

function generarNumeroAleatorio (min, max) {
  // Verificar si se proporcionaron los valores mínimo y máximo del rango
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Los valores mínimo y máximo del rango deben ser números.')
  }

  // Generar un número aleatorio dentro del rango especificado
  return Math.floor(min + Math.random() * (max - min + 1))
}

//SECTION - Inicio 1.- esCapicua
// Función para generar un número capicúa aleatorio de 5 cifras
function generarCapicua () {
  let numeroGenerado

  if (esPrimerClick) {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100000)
    } while (!esCapicua(numeroGenerado))
  } else {
    numeroGenerado = generarNumeroAleatorio(0, 100000)
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick

  return numeroGenerado
}

// Función para verificar si un número es capicúa
function esCapicua (numero) {
  // Convertir el número en una cadena de texto
  const cadenaNumero = numero.toString()
  // Obtener la cadena invertida
  const cadenaInvertida = cadenaNumero.split('').reverse().join('')
  // Convertir la cadena invertida nuevamente en un número
  const numeroInvertido = parseInt(cadenaInvertida)

  // Comprobar si el número original es igual al invertido
  return numero === numeroInvertido
}
// !SECTION 1.- esCapicua

//SECTION - Inicio 2.- esPrimo
function generarPrimo () {
  let numeroGenerado

  if (esPrimerClick) {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100)
    } while (!esPrimo(numeroGenerado))
  } else {
    do {
      numeroGenerado = generarNumeroAleatorio(0, 100)
    } while (esPrimo(numeroGenerado))
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick

  return numeroGenerado
}

// Función para verificar si un número es capicúa
function esPrimo (numero) {
  // Un número menor o igual a 1 no es primo
  if (numero <= 1) {
    return false
  }
  // Iterar desde 2 hasta la raíz cuadrada del número
  // Si el número es divisible por algún otro número, no es primo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false
    }
  }
  // Si no se encontraron divisores, el número es primo
  return true
}
// !SECTION 2.- esPrimo
//SECTION - Inicio 3.- siguientePrimo
function generarSiguientePrimo () {
  let numeroGenerado

  if (esPrimerClick) {
    numeroGenerado = generarNumeroAleatorio(0, 100)
  } else {
    numeroGenerado = generarNumeroAleatorio(100, 200)
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick

  return numeroGenerado
}
// !SECTION 3.- siguientePrimo

//SECTION - Inicio 4.- potencia
function generarPotencia () {
  let numeroGenerado = []
  for (let i = 0; i < 2; i++) {
    numeroGenerado[i] = generarNumeroAleatorio(0, 15)
  }
  esPrimerClick = !esPrimerClick

  return numeroGenerado
}
// !SECTION 4.- potencia

//SECTION - Inicio 5.- digitos
function generarDigito () {
  let numeroGenerado

  if (esPrimerClick) {
    numeroGenerado = generarNumeroAleatorio(0, 999)
  } else {
    numeroGenerado = generarNumeroAleatorio(1000, 99999)
  }

  // Invertir esPrimerClick una vez
  esPrimerClick = !esPrimerClick

  return numeroGenerado
}

// !SECTION 5.- digitos

//SECTION - Inicio 6.- voltea

// !SECTION 6.- voltea

//SECTION - Inicio 7.- digitoN

// !SECTION 7.- digitoN

//SECTION - Inicio 8.- posicionDeDigito

// !SECTION 8.- posicionDeDigito

//SECTION - Inicio 9.- quitaPorDetras

// !SECTION 9.- quitaPorDetras

//SECTION - Inicio 10.- quitaPorDelante

// !SECTION 10.- quitaPorDelante

//SECTION - Inicio 11.- pegaPorDetras

// !SECTION 11.- pegaPorDetras

//SECTION - Inicio 12.- pegaPorDelante

// !SECTION 12.- pegaPorDelante

//SECTION - Inicio 13.- trozoDeNumero

// !SECTION 13.- trozoDeNumero

//SECTION - Inicio 14.- juntaNumeros

// !SECTION 14.- juntaNumeros
