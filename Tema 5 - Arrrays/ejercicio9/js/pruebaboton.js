// Supongamos que tienes un array llamado 'miArray'

// Función para comprobar la longitud del array y desactivar/activar el botón
function comprobarArray () {
  var miBoton_calcular = document.getElementById('calcular')
  var miBoton_ingresarDato = document.getElementById('ingresarNumero')
  var miBoton_vaciar = document.getElementById('vaciar')
  var miBoton_completar = document.getElementById('completarMatri')
  var valorInicial = document.getElementById('initial').value
  var valorFinal = document.getElementById('final').value

  // Desactiva el botón si el array tiene menos de 5 datos, de lo contrario, actívalo
  if (numeros.length < 5) {
    miBoton_completar.disabled = false
    miBoton_ingresarDato.disabled = false
  } else {
    miBoton_completar.disabled = true
    miBoton_ingresarDato.disabled = true
  }

  if (
    numeros.length < 5 ||
    valorInicial.trim() === '' ||
    valorFinal.trim() === ''
  ) {
    miBoton_calcular.disabled = true
  } else {
    miBoton_calcular.disabled = false
  }

  if (numeros.length === 0) {
    miBoton_vaciar.disabled = true
  } else {
    miBoton_vaciar.disabled = false
  }
}

document.addEventListener('DOMContentLoaded', function () {
  comprobarArray() // Llama a tu función aquí
})

// Ejemplo de cómo agregar datos al array y llamar a la función de comprobación
