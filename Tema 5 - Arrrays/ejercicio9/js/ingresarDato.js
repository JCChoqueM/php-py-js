var numeros = []
var ini_fin = []

function ingresarDato () {
  var inputNumero = document.getElementById('num1')
  var numero = parseInt(inputNumero.value)

  if (!isNaN(numero)) {
    numeros.push(numero)
    inputNumero.value = ''
    actualizarResultados()
    comprobarArray()
  }
}

function completarMatriz () {
  // Completar el array con valores adicionales hasta llegar a 5
  while (numeros.length < 5) {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1 // Ejemplo de número aleatorio del 1 al 10
    numeros.push(numeroAleatorio)
  }

  actualizarResultados()
  comprobarArray()
}

function calcular2 () {
  var inputInicial = document.getElementById('initial')
  var inputFinal = document.getElementById('final')
  var ini_ini = parseInt(inputInicial.value)
  var fin_fin = parseInt(inputFinal.value)

  if (!isNaN(ini_ini)) {
    ini_fin.push(ini_ini)
    ini_fin.push(fin_fin)

  }
  comprobarArray()
  comprobarIndices()
  ini_fin = []
}
function comprobarIndices () {
  if (numeros.length === 5) {
    ingresarPHP()
    ingresarPY()
    ingresarJS()
  }
}
function gMatriz () {
  numeros = []
  const min = -8
  const max = 100

  for (contador = 0; contador < 5; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    numeros.push(numeroAleatorio)
  }
  actualizarResultados()
  comprobarArray()
}
function actualizarResultados () {
  var resultadosDiv = document.getElementById('resultadoJavaScript')
  var resultadosDiv2 = document.getElementById('resultadoPHP')
  var resultadosDiv3 = document.getElementById('resultadoPython')

  resultadosDiv.innerHTML = 'Números ingresados: ' + numeros.join(', ')
  resultadosDiv2.innerHTML = 'Números ingresados: ' + numeros.join(', ')
  resultadosDiv3.innerHTML = 'Números ingresados: ' + numeros.join(', ')
}

async function ingresarPHP () {
  try {
    const url =
      'archives/ingresarDato/ingresarDato.php' +
      '?numeros1=' +
      JSON.stringify(numeros) +
      '&numeros2=' +
      JSON.stringify(ini_fin)

    const response = await fetch(url)

    if (response.ok) {
      const suma = await response.text()
      var resultadosDiv = document.getElementById('resultadoPHP')
      resultadosDiv.innerHTML = ` numeros ingresados: ${numeros.join(
        ', '
      )}<br> ${suma} `
    } else {
      console.error('Error en la solicitud:', response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

async function ingresarPY () {
  try {
    const url = 'archives/ingresarDato/ingresarDatoPY.php'
    const data = {
      numeros1: numeros,
      numeros2: ini_fin
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const suma = await response.text()
      var resultadosDiv = document.getElementById('resultadoPython')
      resultadosDiv.innerHTML = ` numeros ingresados: ${numeros.join(
        ', '
      )}<br> ${suma} `
    } else {
      console.error('Error en la solicitud:', response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

