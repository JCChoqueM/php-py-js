function extra2() {
  // Obtener el input con ID "extra" dentro del contenedor de inputs
  var input = document.querySelector("#funcionesInput #extra");

  // Asignar un número aleatorio si el input existe
  if (input) {
    input.value = generarNumeroAleatorio(1,9);
  } else {
    console.error('Elemento con ID "extra" no encontrado.');
  }
  resolver();
}
