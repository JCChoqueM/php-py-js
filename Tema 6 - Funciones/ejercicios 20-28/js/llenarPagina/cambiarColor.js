function cambiarColor() {
  var select = document.getElementById("accion");
  var boton = document.getElementById("miBoton");
  var opcionSeleccionada = select.value;

  switch (opcionSeleccionada) {
    case "generaArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-generaArrayInt");
      break;
    case "minimoArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-minimoArrayInt");
      break;
    case "maximoArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-maximoArrayInt");
      break;
    case "mediaArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-mediaArrayInt");
      break;
    case "estaEnArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-estaEnArrayInt");
      break;
    case "posicionEnArray":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-posicionEnArray");
      break;
    case "volteaArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-volteaArrayInt");
      break;
    case "rotaDerechaArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-rotaDerechaArrayInt");
      break;
    case "rotaIzquierdaArrayInt":
      boton.style.backgroundColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-rotaIzquierdaArrayInt");
      break;
    default: // Color por defecto
      boton.style.backgroundColor = "#555";
      break;
  }
}
