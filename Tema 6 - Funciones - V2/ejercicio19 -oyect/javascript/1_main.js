document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  setSelectValue('seleccion2', 'Binario');
  if (!formulario) return;
  formulario.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  procesarFormulario(event.currentTarget);
}

// ✅ Procesa el formulario para evitar duplicación de código
function procesarFormulario(form) {
  const seleccion = obtenerSeleccion();
  const datos = obtenerDatosFormulario(form);

  const funcionSeleccionada = obtenerFuncionDinamica(seleccion); /*STUB - funcion que se usara  en 4_funciones*/

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
function obtenerSeleccion() {
  const seleccion1 = document.getElementById('seleccion1');
  const seleccion2 = document.getElementById('seleccion2');
  const seleccionObtenida = seleccion1.value + seleccion2.value;
  return seleccion1 && seleccion2 ? seleccionObtenida : null;
}
function obtenerFuncionDinamica(seleccion) {
  const nombreFuncion = `${seleccion}`;
  return typeof window[nombreFuncion] === 'function' ? window[nombreFuncion] : null;
}
/* SECTION funcion para enviar los datos al usara el boton aleatorio  */
function enviarFormulario() {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  procesarFormulario(formulario);
}
/* !SECTION fin - funcion para enviar los datos al usara el boton aleatorio  */

function setSelectValue(selectId, defaultValue) {
  const selectElement = document.getElementById(selectId);
  if (selectElement) {
    selectElement.value = defaultValue;
  }
}
