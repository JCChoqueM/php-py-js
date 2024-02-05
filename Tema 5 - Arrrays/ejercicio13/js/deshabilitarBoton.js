// Obtener referencias a los elementos de entrada y al botón
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var miBoton = document.getElementById("miBoton");

// Función para verificar el estado de los campos de entrada y cambiar el estilo del botón
function verificarCampos() {
  if (
    input1.value.trim() !== "" &&
    input2.value.trim() !== "" &&
    input3.value.trim() !== ""
  ) {
    miBoton.disabled = false; // Habilitar el botón si todos los campos están llenos
    miBoton.classList.add("habilitado"); // Aplicar estilo de botón habilitado
  } else {
    miBoton.disabled = true; // Deshabilitar el botón si algún campo está vacío
    miBoton.classList.remove("habilitado"); // Eliminar estilo de botón habilitado
  }
}

// Agregar eventos de entrada para cada campo
input1.addEventListener("input", verificarCampos);
input2.addEventListener("input", verificarCampos);
input3.addEventListener("input", verificarCampos);

// Función para realizar la traducción

