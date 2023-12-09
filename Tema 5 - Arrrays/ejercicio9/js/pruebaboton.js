// Supongamos que tienes un array llamado 'miArray'
var miArray = []

// Función para comprobar la longitud del array y desactivar/activar el botón
function comprobarArray () {
    var miBoton_calcular = document.getElementById('calcular')
    var miBoton_ingresarDato = document.getElementById('ingresarNumero')
    var miBoton_vaciar = document.getElementById('vaciar')

  // Desactiva el botón si el array tiene menos de 5 datos, de lo contrario, actívalo
  if (numeros.length < 5) {
    miBoton_calcular.disabled = true
    miBoton_ingresarDato.disabled = false
  
  } else {
    miBoton_calcular.disabled = false
    miBoton_ingresarDato.disabled = true

  }
  if (numeros.length === 0) {

    miBoton_vaciar.disabled = true
  } else {

    miBoton_vaciar.disabled = false
  }

}

// Ejemplo de cómo agregar datos al array y llamar a la función de comprobación
miArray.push(1, 2, 3)
console.log(miArray)
comprobarArray()
