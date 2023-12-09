var numerosAuto = []

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

/* SECTION inicio sumar todo */
function resolverAutomaticamente () {
  generarArray()
  if (numerosAuto.length === 7) {
    automaticoPHP()
    automaticoPY()
    automaticoJS()
  }
}
async function automaticoPHP () {
  try {
    const response = await fetch(
      'archives/automaticamente/automaticamente.php?numerosAuto=' +
        JSON.stringify(numerosAuto)
    )
    if (response.ok) {
      const suma = await response.text()
      var resultadosDiv = document.getElementById('resultadoPHP')
      resultadosDiv.innerHTML += `${suma}  `
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
    const response = await fetch(
      'archives/automaticamente/automaticamentePY.php', // Cambiar la ruta al archivo PHP que ejecutará el script Python
      {
        method: 'POST',
        body: JSON.stringify(numerosAuto) // Enviamos el array de números en el cuerpo de la solicitud
      }
    )
    if (response.ok) {
      const suma = await response.text()
      var resultadosDiv = document.getElementById('resultadoPython')
      resultadosDiv.innerHTML += `${suma}`
      numerosAuto = []
    } else {
      console.error('Error en la solicitud:', response.status)
    }
  } catch (error) {
    console.error('Error en la solicitud:', error)
  }
}

/* !SECTION fin sumar todo */
