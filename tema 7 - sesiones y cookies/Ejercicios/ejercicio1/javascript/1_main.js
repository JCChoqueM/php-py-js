document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;
  formulario.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  event.preventDefault(); // Evitar el envío del formulario
  procesarFormulario(event.currentTarget);
}

// ✅ Procesa el formulario para evitar duplicación de código
function procesarFormulario(form) {
  const datos = obtenerDatosFormulario(form);

  validarYProcesar(datos, funcionSeleccionada);
}

// ✅ Convierte los datos del formulario en un objeto
function obtenerDatosFormulario(form) {
  return Object.fromEntries(new FormData(form).entries());
}

/* SECTION funcion para enviar los datos al usara el boton aleatorio  */
function enviarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;
  console.log(procesarFormulario(formulario));
  procesarFormulario(formulario);
}
/* !SECTION fin - funcion para enviar los datos al usara el boton aleatorio  */
