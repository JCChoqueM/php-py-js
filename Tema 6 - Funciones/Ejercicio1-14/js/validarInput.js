// Función genérica para validar entrada y actualizar mensajes de error
function validarInputYMostrarError (mensajeError) {
  // Establecer el mensaje de error en el input
  const resultadoDiv1 = document.getElementById('resultadoJavaScript')
  const resultadoDiv2 = document.getElementById('resultadoPHP')
  const resultadoDiv3 = document.getElementById('resultadoPython')

  // Insertar el mensaje de error en cada elemento
  resultadoDiv1.innerHTML = mensajeError
  resultadoDiv2.innerHTML = mensajeError
  resultadoDiv3.innerHTML = mensajeError
}

// Validación específica para el caso de DigitoN
function validarInputDigitoN (input) {
  const valor = parseInt(document.getElementById('num1').value)
  const valor2 = parseInt(input.value)
  let mensajeError = ''

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > contarDigitos(valor) - 1) {
    mensajeError = `El numero ${valor2} ${valor} tiene posiciones de 0 a ${
      contarDigitos(valor) - 1
    } digitos.`
  } else if (valor2 < 0) {
    mensajeError = `La Posicion no puede ser negativa`
  }

  validarInputYMostrarError(mensajeError)
}

// Validación específica para el caso de PosicionDeDigito
function validarInputPosicionDeDigito (input) {
  const valor = parseInt(document.getElementById('num1').value)
  const valor2 = parseInt(input.value)
  let mensajeError = ''

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > 9) {
    mensajeError = `solo se permite ingresa numeros de 1 digito`
  } else if (valor2 < 0) {
    mensajeError = `el numero no puede ser negativo`
  }

  validarInputYMostrarError(mensajeError)
}

// Funciones para llamar a las validaciones específicas desde los eventos
function validarNum1DigitoN () {
  validarInputDigitoN(document.getElementById('num2'))
}

function validarNum1PosicionDeDigito () {
  validarInputPosicionDeDigito(document.getElementById('num2'))
}
