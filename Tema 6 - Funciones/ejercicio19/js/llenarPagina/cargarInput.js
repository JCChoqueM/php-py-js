// Llamar a la función cargarInput al cargar la página para mostrar el primer input
function inicializar() {
  document.getElementById("accion").value = "Hexadecimal";
  document.getElementById("accion2").value = "Decimal";
  resolver();
}
window.onload = inicializar;

// Llamar a la función cargarInput cada vez que se cambie la selección en el select

document.getElementById("accion").addEventListener("change", function () {
  limpiarResultados();
  resolver();
});

document.getElementById("accion2").addEventListener("change", function () {
  limpiarResultados();
  resolver();
});
