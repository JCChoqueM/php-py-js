document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  formulario.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  procesarFormulario(event.currentTarget);
}

// ✅ Se puede llamar con onclick desde un botón
function enviarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  procesarFormulario(formulario);
}

// ✅ Procesa el formulario para evitar duplicación de código
function procesarFormulario(form) {
  const seleccion = obtenerSeleccion();
  if (!seleccion) return;

  const datos = obtenerDatosFormulario(form);
  const funcionSeleccionada = obtenerFuncionDinamica(seleccion);

  if (funcionSeleccionada) {
    validarYProcesar(datos, funcionSeleccionada);
  } else {
    console.warn(`⚠ No se encontró una función válida para "${seleccion}"`);
  }
}

// ✅ Obtiene el valor seleccionado del <select>
function obtenerSeleccion() {
  const selectElement = document.getElementById('miSelect');
  return selectElement ? selectElement.value : null;
}

// ✅ Convierte los datos del formulario en un objeto
function obtenerDatosFormulario(form) {
  return Object.fromEntries(new FormData(form).entries());
}

// ✅ Obtiene la función de manera dinámica y segura
function obtenerFuncionDinamica(seleccion) {
  const nombreFuncion = `funcion_${seleccion}`;
  return typeof window[nombreFuncion] === 'function' ? window[nombreFuncion] : null;
}