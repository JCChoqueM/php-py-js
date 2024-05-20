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

//SECTION - Inicio 10.- quitaPorDelante
function validarInputQuitaPorDelante (input) {
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
// !SECTION 10.- quitaPorDelante

//SECTION - Inicio 11.- pegaPorDetras
function validarInputPegaPorDetras (input) {
  const valor = parseInt(document.getElementById('num1').value)
  const valor2 = parseInt(input.value)
  let mensajeError = ''

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > 9) {
    mensajeError = `solo se permite pegar numeros de 1 digito`
  } else if (valor2 < 0) {
    mensajeError = `<span>el numero NO puede ser negativo:   ${valor}<span style='color: red;'>${valor2}</span>.  </span> `
  }

  validarInputYMostrarError(mensajeError)
}
// !SECTION 11.- pegaPorDetras

//SECTION - Inicio 12.- pegaPorDelante
function validarInputPegaPorDelante (input) {
  const valor2 = parseInt(input.value)
  let mensajeError = ''
  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > 9 || valor2 < -9) {
    mensajeError = `solo se permite pegar numeros de 1 digito`
  }

  validarInputYMostrarError(mensajeError)
}
// !SECTION 12.- pegaPorDelante

//SECTION - Inicio 13.- trozoDeNumero
function validarInputTrozoDeNumero () {
  console.log(typeof document.getElementById('num1').value)
  const valor = parseInt(document.getElementById('num1').value)
  const valor2 = parseInt(document.getElementById('num2').value)
  const valor3 = parseInt(document.getElementById('num3').value)
  let digitos = contarDigitos(valor) - 1
  let mensajeError = ''
  console.log(typeof valor)
  console.log(!isNaN(valor2))
  console.log(!isNaN(valor3))
  // Verificar si el valor tiene la longitud adecuada
  if (isNaN(valor) && isNaN(valor2) && isNaN(valor3)) {
    mensajeError = 'Por favor, ingrese números en todos los campos.'
  } else if (!isNaN(valor) && isNaN(valor2) && isNaN(valor3)) {
    mensajeError = 'Llene los campos 2 y 3.'
  } else if (isNaN(valor) && !isNaN(valor2) && isNaN(valor3)) {
    mensajeError = 'Llene los campos 1 y 3.'
  } else if (isNaN(valor) && isNaN(valor2) && !isNaN(valor3)) {
    mensajeError = 'Llene los campos 1 y 2.'
  } else if (isNaN(valor) && !isNaN(valor2) && !isNaN(valor3)) {
    mensajeError = 'Llene el campo 1.'
  } else if (!isNaN(valor) && isNaN(valor2) && !isNaN(valor3)) {
    mensajeError = 'Llene el campo 2.'
  } else if (!isNaN(valor) && !isNaN(valor2) && isNaN(valor3)) {
    mensajeError = 'Llene el campo 3.'
  } else {
    if (
      valor2 >= 0 &&
      valor2 <= digitos &&
      valor3 >= valor2 &&
      valor3 <= digitos
    ) {
      mensajeError = 'Puede continuar.'
    } else if (valor2 >= 0 && valor2 <= digitos && valor3 > digitos) {
      mensajeError = 'El campo 3 no está en el rango.'
    } else if (valor2 > digitos && valor3 >= 0 && valor3 <= digitos) {
      mensajeError = 'El campo 2 no está en el rango.'
    }
  }
  validarInputYMostrarError(mensajeError)
}

// !SECTION 13.- trozoDeNumero

//SECTION - Inicio 14.- juntaNumeros

// !SECTION 14.- juntaNumeros

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
function validarNum1QuitaPorDelante () {
  validarInputQuitaPorDelante(document.getElementById('num2'))
}

function validarNum1PegaPorDetras () {
  validarInputPegaPorDetras(document.getElementById('num2'))
}

function validarNum1PegaPorDelante () {
  validarInputPegaPorDelante(document.getElementById('num2'))
}
function validarTrozoDeNumero1 () {
  validarInputTrozoDeNumero()
}
function validarTrozoDeNumero2 () {
  validarInputTrozoDeNumero()
}
function validarTrozoDeNumero3 () {
  validarInputTrozoDeNumero()
}

//!SECTION fin Funciones para llamar a las validaciones específicas desde los eventos
