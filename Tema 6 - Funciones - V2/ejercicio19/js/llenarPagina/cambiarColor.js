function cambiarColor () {
  var select = document.getElementById('accion')
  var boton = document.getElementById('miBoton')
  var opcionSeleccionada = select.value

  switch (opcionSeleccionada) {
    case 'Binario':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-esCapicua')
      break
    case 'Octal':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-esPrimo')
      break
    case 'Decimal':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-siguientePrimo')
      break
    case 'Hexadecimal':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-potencia')
      break
  }
}
