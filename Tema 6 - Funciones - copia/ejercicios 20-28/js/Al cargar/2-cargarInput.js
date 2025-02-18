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

        // Llenar el input con ID "extra" con un número aleatorio
        extra2();
      })
      .catch((error) => console.error("Error:", error));
  } else {
    // Si la opción seleccionada no está en las opciones especiales, no hacer nada
    var funcionesInputContainer = document.getElementById("funcionesInput");
    funcionesInputContainer.innerHTML = "";
  }
}


