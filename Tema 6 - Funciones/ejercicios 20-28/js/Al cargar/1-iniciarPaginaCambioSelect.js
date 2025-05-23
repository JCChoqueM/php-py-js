// Llamar a la función cargarInput al cargar la página para mostrar el primer input
function inicializar() {
  document.getElementById("accion").value = "rotaIzquierdaArrayInt";
  cargarInput();
  cargarTooltip();
  cambiarColor();
  

  mostrarDatos();
}
window.onload = inicializar;
// recmpletar

// Llamar a la función cargarInput cada vez que se cambie la selección en el select

document.getElementById("accion").onchange = function () {
  cargarInput(); // Llama a la función cargarInput()
  cambiarColor();
  cargarTooltip();
    mostrarDatos();
  resolver();
  // Llama a otras funciones aquí según sea necesario
};

// Función para hacer click  en  la lista de ejercicios y que se seleccione el   <select>
function selectOption(option) {
  document.getElementById("accion").value = option;
  cargarInput();
  cambiarColor();
  cargarTooltip();
    mostrarDatos();
  resolver();
}

// Función para actualizar el tooltip según la opción seleccionada
function updateTooltip() {
  var option = document.getElementById("accion").value;
  showDescription(option);
}
