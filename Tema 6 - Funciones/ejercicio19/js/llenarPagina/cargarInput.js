// Llamar a la función cargarInput al cargar la página para mostrar el primer input
function inicializar() {
  document.getElementById("accion").value = "Decimal";

}
window.onload = inicializar;

// Llamar a la función cargarInput cada vez que se cambie la selección en el select

document.getElementById("accion").onchange = function () {
  cargarInput(); // Llama a la función cargarInput()
  cambiarColor();
  cargarTooltip();

  limpiarResultados();
  // Llama a otra función, por ejemplo, otraFuncion()
  // Llama a otras funciones aquí según sea necesario
};
