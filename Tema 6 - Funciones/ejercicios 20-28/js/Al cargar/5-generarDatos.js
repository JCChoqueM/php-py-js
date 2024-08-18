function generarDatos() {
  const select = document.getElementById("accion");
  const opcionSeleccionada = select.value;
  const numInput = document.getElementById("tamaño");
  const numInput2 = document.getElementById("minimo");
  const numInput3 = document.getElementById("maximo");
  const extraInput = document.getElementById("extra");

  // Generar datos aleatorios
  let datos = generarTrozoDeNumero();

  switch (opcionSeleccionada) {
    case "generaArrayInt":
    case "minimoArrayInt":
    case "maximoArrayInt":
    case "mediaArrayInt":
      numInput.value = datos.tamaño;
      numInput2.value = datos.minimo;
      numInput3.value = datos.maximo;
      resolver();
      break;
    case "estaEnArrayInt":
    case "posicionEnArrayInt":
    case "rotaDerechaArrayInt":
    case "rotaIzquierdaArrayInt":
      numInput.value = datos.tamaño;
      numInput2.value = datos.minimo;
      numInput3.value = datos.maximo;

      // Añadir un número aleatorio entre 1 y 9 al input con ID "extra"
      if (extraInput) {
        extraInput.value = generarNumeroAleatorio(1, 9);
      }

      resolver();
      break;
    default:
      // Color por defecto
      numInput.value = 666;
      break;
  }
}




