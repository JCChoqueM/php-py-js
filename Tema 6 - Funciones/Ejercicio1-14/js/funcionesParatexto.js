// Función para mostrar la descripción del tooltip
function showDescription(id) {
  var tooltip = document.getElementById(id + "Tooltip");
  tooltip.style.visibility = "visible";
}

// Función para ocultar la descripción del tooltip
function hideDescription(id) {
  var tooltip = document.getElementById(id + "Tooltip");
  tooltip.style.visibility = "hidden";
}
