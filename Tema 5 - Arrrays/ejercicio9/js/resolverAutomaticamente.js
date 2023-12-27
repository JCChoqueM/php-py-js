var numerosAuto = []
var ini_finAuto = []

function generarArray () {
  const min = -8
  const max = 100

  for (contador = 0; contador < 7; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    numerosAuto.push(numeroAleatorio)
  }
  var resultadosDiv = document.getElementById('resultadoJavaScript')
  var resultadosDiv2 = document.getElementById('resultadoPHP')
  var resultadosDiv3 = document.getElementById('resultadoPython')
  resultadosDiv.innerHTML =
    'Números ingresados Automát: ' + numerosAuto.join(', ') + ''
  resultadosDiv2.innerHTML =
    'Números ingresados Automát: ' + numerosAuto.join(', ') + ''
  resultadosDiv3.innerHTML =
    'Números ingresados Automát: ' + numerosAuto.join(', ') + ''
}
function ingresarIndices () {
  var inputInicial = document.getElementById('initial')
  var inputFinal = document.getElementById('final')
  var ini_iniAuto = parseInt(inputInicial.value)
  var fin_finAuto = parseInt(inputFinal.value)

  if (!isNaN(ini_iniAuto)) {
    ini_finAuto.push(ini_iniAuto)
    ini_finAuto.push(fin_finAuto)
  }
}
function generar_inicial_final2 () {
  const num1 = document.getElementById('initial')
  const num2 = document.getElementById('final')
  num1.value = generarNumero(-1, 6)
  num2.value = generarNumero(-1, 7)
}

/* SECTION inicio sumar todo */
function resolverAutomaticamente () {
  generarArray()
  generar_inicial_final2()
  ingresarIndices()

  if (numerosAuto.length === 7) {
    automaticoPHP()
    automaticoPY()
    automaticoJS()
  }
  ini_finAuto = []

}
async function automaticoPHP () {
  try {
    const url =
      'archives/automaticamente/automaticamente.php' +
      '?numeros1=' +
      JSON.stringify(numerosAuto) +
      '&numeros2=' +
      JSON.stringify(ini_finAuto)

    const response = await fetch(url)

    if (response.ok) {
      const suma = await response.text()
      var resultadosDiv = document.getElementById('resultadoPHP')
      resultadosDiv.innerHTML = ` numeros ingresados: ${numerosAuto.join(
        ', '
      )}<br> ${suma} `
      numerosAuto = []

    } else {
      console.error('Error en la solicitud:', response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

async function automaticoPY () {
  try {
    const url = 'archives/automaticamente/automaticamentePY.php'
    const data = {
      numeros1: numerosAuto,
      numeros2: ini_finAuto
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
      resultadosDiv.innerHTML = ` numeros ingresados: ${numerosAuto.join(
        ', '
      )}<br> ${suma} `
    } else {
      console.error('Error en la solicitud:', response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

/* !SECTION fin sumar todo */
