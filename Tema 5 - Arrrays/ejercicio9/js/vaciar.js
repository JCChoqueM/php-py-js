function vaciar_array () {
  numeros = []
  comprobarArray()
  var resultadosDiv = document.getElementById('resultadoJavaScript')
  var resultadosDiv2 = document.getElementById('resultadoPHP')
  var resultadosDiv3 = document.getElementById('resultadoPython')

  resultadosDiv.innerHTML = 'Por favor, ingrese los nuevos valores JS'
  resultadosDiv2.innerHTML = 'Por favor, ingrese los nuevos valores PHP'
  resultadosDiv3.innerHTML = 'Por favor, ingrese los nuevos valores Python'
  const num1 = document.getElementById('initial')
  const num2 = document.getElementById('final')
  num1.value = ''
  num2.value = ''
}
