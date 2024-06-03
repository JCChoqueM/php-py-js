// Función para seleccionar la opción en el <select>
function selectOption(option) {
  document.getElementById("accion").value = option;
  cargarTooltip();
  cargarInput();
  cambiarColor();
  deshabilitarBoton();
  limpiarResultados();
}

// Función para actualizar el tooltip según la opción seleccionada
function updateTooltip() {
  var option = document.getElementById("accion").value;
  showDescription(option);
}
