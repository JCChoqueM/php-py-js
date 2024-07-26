function cargarInput() {
  // Obtener el valor seleccionado del select
  var select = document.getElementById("accion");
  var opcionSeleccionada = select.options[select.selectedIndex].value;

  // Cargar el contenido de inputs.html utilizando fetch
  fetch("inputs.html")
    .then((response) => response.text())
    .then((data) => {
      // Crear un elemento HTML temporal para manipular el contenido
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Obtener el elemento específico por su ID según la opción seleccionada
      var inputContainer = tempDiv.querySelector(
        "#" + opcionSeleccionada + "Input"
      );

      // Clonar el contenido del input container para evitar problemas de referencia
      var inputContent = inputContainer.cloneNode(true);

      // Limpiar el contenedor de inputs antes de agregar el nuevo contenido
      var funcionesInputContainer = document.getElementById("funcionesInput");
      funcionesInputContainer.innerHTML = "";

      // Insertar el contenido clonado en el contenedor deseado
      funcionesInputContainer.appendChild(inputContent);
    })
    .catch((error) => console.error("Error:", error));
}

// Llamar a la función cargarInput al cargar la página para mostrar el primer input
function inicializar() {
  document.getElementById("accion").value = "juntaNumeros";
  cargarInput();
  cargarTooltip();
  cambiarColor();
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
