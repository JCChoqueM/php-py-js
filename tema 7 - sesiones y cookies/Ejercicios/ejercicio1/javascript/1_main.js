document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;
  formulario.addEventListener('submit', manejarInput);
});

function manejarInput(event) {
  event.preventDefault(); // Evitar el envío del formulario
  procesarFormulario(event.currentTarget);
}

// ✅ Procesa el formulario para evitar duplicación de código
function procesarFormulario(form) {
  const datos = obtenerDatosFormulario(form);


  const funcionSeleccionada = procesarEjercicio1; /*STUB - funcion que se usara  en 4_funciones*/

  if (funcionSeleccionada) {
    validarYProcesar(datos, funcionSeleccionada);
  } else {
    console.warn(`⚠ No se encontró una función válida para "${seleccion}"`);
  }
   form.reset(); // Limpiar el formulario después de procesar
}
// ✅ Convierte los datos del formulario en un objeto
function obtenerDatosFormulario(form) {
  return Object.fromEntries(new FormData(form).entries());
}
