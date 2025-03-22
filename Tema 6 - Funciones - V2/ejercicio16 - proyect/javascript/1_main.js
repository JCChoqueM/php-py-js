document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;
  formulario.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  procesarFormulario(event.currentTarget);
}

// ✅ Procesa el formulario para evitar duplicación de código
function procesarFormulario(form) {
  const datos = obtenerDatosFormulario(form);

  const funcionSeleccionada = numerosCapicua; /*STUB - funcion que se usara  en 4_funciones*/

  if (funcionSeleccionada) {
    validarYProcesar(datos, funcionSeleccionada);
  } else {
    console.warn(`⚠ No se encontró una función válida para "${seleccion}"`);
  }
}

// ✅ Convierte los datos del formulario en un objeto
function obtenerDatosFormulario(form) {
  return Object.fromEntries(new FormData(form).entries());
}

/* SECTION funcion para enviar los datos al usara el boton aleatorio  */
function enviarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  procesarFormulario(formulario);
}
/* !SECTION fin - funcion para enviar los datos al usara el boton aleatorio  */
