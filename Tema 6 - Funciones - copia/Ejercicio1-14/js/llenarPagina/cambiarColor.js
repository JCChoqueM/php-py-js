function cambiarColor () {
  var select = document.getElementById('accion')
  var boton = document.getElementById('miBoton')
  var opcionSeleccionada = select.value

  switch (opcionSeleccionada) {
    case 'esCapicua':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-esCapicua')
      break
    case 'esPrimo':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-esPrimo')
      break
    case 'siguientePrimo':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-siguientePrimo')
      break
    case 'potencia':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-potencia')
      break
    case 'digitos':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-digitos')
      break
    case 'voltea':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-voltea')
      break
    case 'digitoN':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-digitoN')
      break
    case 'posicionDeDigito':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-posicionDeDigito')
      break
    case 'quitaPorDetras':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-quitaPorDetras')
      break
    case 'quitaPorDelante':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-quitaPorDelante')
      break
    case 'pegaPorDetras':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-pegaPorDetras')
      break
    case 'pegaPorDelante':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-pegaPorDelante')
      break
    case 'trozoDeNumero':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-trozoDeNumero')
      break
    case 'juntaNumeros':
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-juntaNumeros')
      break
    default: // Color por defecto
      boton.style.backgroundColor = '#555'
      break
  }
}
