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

//SECTION - 7.-digitoN
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
//!SECTION fin 7.-digitoN

//SECTION - 8.- posicionDeDigito
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
//!SECTION fin 8.-posicionDeDigito

//SECTION -  9.- quitaPorDetras
function validarInputQuitaPorDetras (input) {
  const valor = parseInt(document.getElementById('num1').value)
  const valor2 = parseInt(input.value)
  let mensajeError = ''

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > contarDigitos(valor)) {
    mensajeError = `El numero ${valor} tiene ${contarDigitos(
      valor
    )} digitos. No se puede quitar mas de eso`
  } else if (valor2 < 0) {
    mensajeError = `la cantidad de numeros a quitar no puede ser negativo`
  }

  validarInputYMostrarError(mensajeError)
}

//!SECTION fin 9.- quitaPorDetras

//SECTION -  Funciones para llamar a las validaciones específicas desde los eventos
function validarNum1DigitoN () {
  validarInputDigitoN(document.getElementById('num2'))
}

function validarNum1PosicionDeDigito () {
  validarInputPosicionDeDigito(document.getElementById('num2'))
}

function validarNum1QuitaPorDetras () {
  validarInputQuitaPorDetras(document.getElementById('num2'))
}

//!SECTION fin Funciones para llamar a las validaciones específicas desde los eventos
