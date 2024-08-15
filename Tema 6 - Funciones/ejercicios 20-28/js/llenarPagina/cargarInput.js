function cargarInput() {
  // Obtener el valor seleccionado del select
  var select = document.getElementById("accion");
  var opcionSeleccionada = select.options[select.selectedIndex].value;

  // Definir las opciones especiales
  var opcionesEspeciales = [
    "estaEnArrayInt",
    "posicionEnArrayInt",
    "rotaDerechaArrayInt",
    "rotaIzquierdaArrayInt",
  ];

  // Si la opción seleccionada está en las opciones especiales
  if (opcionesEspeciales.includes(opcionSeleccionada)) {
    // Cargar el contenido de inputs.html utilizando fetch
    fetch("inputs.html")
      .then((response) => response.text())
      .then((data) => {
        // Crear un elemento HTML temporal para manipular el contenido
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;

        // Obtener el div específico por su ID según la opción seleccionada
        var inputContainer = tempDiv.querySelector(
          `#${opcionSeleccionada}Input`
        );

        // Limpiar el contenedor de inputs antes de agregar el nuevo contenido
        var funcionesInputContainer = document.getElementById("funcionesInput");
        funcionesInputContainer.innerHTML = "";

        // Extraer y agregar solo los elementos internos del contenedor
        if (inputContainer) {
          // Crear un contenedor temporal para manejar la clonación
          var tempContentDiv = document.createElement("div");
          tempContentDiv.appendChild(inputContainer.cloneNode(true));

          // Extraer los elementos internos (label, input, button)
          var label = tempContentDiv.querySelector("label");
          var input = tempContentDiv.querySelector("input");
          var button = tempContentDiv.querySelector("button");

          // Insertar los elementos internos en el contenedor principal
          if (label) funcionesInputContainer.appendChild(label);
          if (input) funcionesInputContainer.appendChild(input);
          if (button) funcionesInputContainer.appendChild(button);
        } else {
          console.error(
            `No se encontró el contenedor para ${opcionSeleccionada}`
          );
        }

        // Llenar el input con ID "extra" con un número aleatorio
  
      })
      .catch((error) => console.error("Error al cargar el contenido:", error));
  } else {
    // Si la opción seleccionada no está en las opciones especiales, no hacer nada
    var funcionesInputContainer = document.getElementById("funcionesInput");
    funcionesInputContainer.innerHTML = "";
  }
}

// Llamar a la función cargarInput al cargar la página para mostrar el primer input
function inicializar() {
  document.getElementById("accion").value = "estaEnArrayInt";
  cargarInput();
  cargarTooltip();
  cambiarColor();
limpiarResultados()
}
window.onload = inicializar;

// Llamar a la función cargarInput cada vez que se cambie la selección en el select

document.getElementById("accion").onchange = function () {
  cargarInput(); // Llama a la función cargarInput()
  cargarTooltip();
  cambiarColor();
  limpiarCajas()
  // Llama a otras funciones aquí según sea necesario
};
