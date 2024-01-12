function solucionJavaScript () {
  // Inicialización de variables
  let mensaje = ''
  let numero = []
  let inicioFinal = []
  const min = -9
  const max = 100
  const min2 = 0
  const max2 = 5

  // Generar 6 números aleatorios y almacenarlos en el array 'numero'
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    numero.push(numeroAleatorio)
  }
  for (contador = 0; contador < 2; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max2 - min2 + 1)) + min2
    inicioFinal.push(numeroAleatorio)
  }
  let colorCambio1 = 'background-color: #2EFE64; color:black'
  let colorCambio2 = 'background-color: #FE2E2E; color:black'
  let colorNegativo = 'background-color: #00000000; color:black'
  let color
  let aux
  // Copiar el array original
  var numeros2 = numero.slice(0)
  var arrayOriginal = numeros2.slice(0)

  // Validar las posiciones introducidas
  var posicionesIntroducidas =
    'Inicial=' + inicioFinal[0] + ' Final=' + inicioFinal[1]
  mensaje = ''

  if (!(inicioFinal[0] >= 0 && inicioFinal[0] < numeros2.length - 1)) {
    mensaje = `<br>${posicionesIntroducidas}<br><br>Inicial debe estar comprendido entre 0 y   ${
      numeros2.length - 2
    }`
  } else if (
    !(inicioFinal[1] > inicioFinal[0] && inicioFinal[1] <= numeros2.length - 1)
  ) {
    mensaje = `<br>${posicionesIntroducidas}<br><br>Final debe ser mayor que ${
      inicioFinal[0]
    }  y menor que   ${numeros2.length - 1}`
  } else {
    let contador
    aux = numeros2[numeros2.length - 1]

    for (
      contador = numeros2.length - 1;
      contador > inicioFinal[1];
      contador--
    ) {
      numeros2[contador] = numeros2[contador - 1]
    }

    numeros2[inicioFinal[1]] = numeros2[inicioFinal[0]]

    for (contador = inicioFinal[0]; contador > 0; contador--) {
      numeros2[contador] = numeros2[contador - 1]
    }

    numeros2[0] = aux

    // Construir la tabla HTML con los resultados
    mensaje = posicionesIntroducidas
    mensaje += "<table border='1' >"
    const filas = [
      ['Índice', Object.keys(arrayOriginal)],
      ['Matriz', arrayOriginal],
      ['Ordenado', numeros2]
    ]

    filas.forEach(fila => {
      const titulo = fila[0]
      const datos = fila[1]

      mensaje += '<tr>'
      mensaje += `<th>${titulo}</th>`
      if (titulo === 'Índice') {
        // Mostrar índices en la primera fila
        datos.forEach(indice => {
          mensaje += `<td>${indice}</td>`
        })
      } else if (titulo === 'Matriz') {
        datos.forEach((elemento, clave) => {
          if (clave == inicioFinal[0]) {
            color = colorCambio1
          } else if (clave == inicioFinal[1]) {
            color = colorCambio2
          } else {
            color = colorNegativo
          }
          mensaje += `<td style='${color}'>${elemento}</td>`
        })
      } else if (titulo === 'Ordenado') {
        datos.forEach((elemento, clave) => {
          if (clave == inicioFinal[1] % datos.length) {
            color = colorCambio1
          } else if (clave == (inicioFinal[1] + 1) % datos.length) {
            color = colorCambio2
          } else {
            color = colorNegativo
          }
          mensaje += `<td style='${color}'>${elemento}</td>`
        })
      }

      mensaje += '</tr>'
    })
    mensaje += '</table>'
  }
  console.table(numeros2)

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById('resultadoJavaScript')
  resultadoDiv.innerHTML = `numeros ingresados: ${arrayOriginal.join(
    ', '
  )}<br> ${mensaje} `
}
