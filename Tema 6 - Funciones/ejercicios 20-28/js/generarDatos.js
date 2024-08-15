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

function generarNumeroAleatorio(min, max) {
  // Verificar si se proporcionaron los valores mínimo y máximo del rango
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Los valores mínimo y máximo del rango deben ser números.");
  }

  // Generar un número aleatorio dentro del rango especificado
  return Math.floor(min + Math.random() * (max - min + 1));
}

function generarTrozoDeNumero() {
  // Genera un tamaño aleatorio entre 1 y 10
  let tamaño = Math.floor(Math.random() * 10) + 1;

  // Genera un mínimo y máximo aleatorio
  let minimo = Math.floor(Math.random() * 100);
  let maximo = minimo + Math.floor(Math.random() * (100 - minimo));

  // Asegura que tamaño esté dentro del rango permitido
  if (tamaño < 1 || tamaño > 10) {
    tamaño = Math.floor(Math.random() * 10) + 1;
  }

  return { tamaño, minimo, maximo };
}

function extra2() {
  // Obtener el input con ID "extra" dentro del contenedor de inputs
  var input = document.querySelector("#funcionesInput #extra");

  // Asignar un número aleatorio si el input existe
  if (input) {
    input.value = generarNumeroAleatorio(1, 9);
  } else {
    console.error('Elemento con ID "extra" no encontrado.');
  }
  resolver();
}
