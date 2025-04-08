document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.formulario');
  if (!formulario) return;

  // Cargar valores previos en los inputs y el array al cargar la página
  actualizarInputs();

  formulario.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  guardarEnSessionStorage(event.target);

  // Solo generar o actualizar el array cuando los valores de num1, num2 o num3 cambian
  if (event.target.name === 'num1' || event.target.name === 'num2' || event.target.name === 'num3') {
    generarYActualizarArray();
  }

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

  // Guardar en sessionStorage los datos del formulario
  Object.keys(datos).forEach((key) => {
    sessionStorage.setItem(key, datos[key]);
  });

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

// ✅ Guarda en sessionStorage cada vez que un input cambia
function guardarEnSessionStorage(input) {
  sessionStorage.setItem(input.name, input.value);
}

// ✅ Cargar valores guardados en sessionStorage en los inputs al iniciar
function actualizarInputs() {
  // Cargar los valores guardados en sessionStorage para los inputs
  document.querySelectorAll('.formulario input').forEach((input) => {
    input.value = sessionStorage.getItem(input.name) || '';
  });

  // Solo generar el array cuando se cargan los valores (si num1, num2 y num3 existen)
  const num1 = sessionStorage.getItem('num1');
  const num2 = sessionStorage.getItem('num2');
  const num3 = sessionStorage.getItem('num3');
  const num4 = sessionStorage.getItem('num4');

  // Solo generar el array si num1, num2 y num3 ya tienen valores en sessionStorage y no estamos cambiando solo el select
  if (num1 && num2 && num3 && num4) {
    // Verificar si el array ya está generado para no generar uno nuevo innecesariamente
    const arrayGenerado = sessionStorage.getItem('arrayGenerado');
    if (!arrayGenerado) {
      generarYActualizarArray();
    }
  }
}

// ✅ Función para generar el array de números basado en los valores de num1, num2 y num3
function generarYActualizarArray() {
  const filas = parseInt(sessionStorage.getItem('num1')) || 0;
  const columnas = parseInt(sessionStorage.getItem('num2')) || 0;
  const minimo = parseInt(sessionStorage.getItem('num3')) || 0;
  const maximo = parseInt(sessionStorage.getItem('num4')) || 0;

  // Verificar que los valores sean válidos
  if (filas > 0 && columnas > 0 && minimo <= maximo) {
    const matrizGenerada = [];

    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        fila.push(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);
      }
      matrizGenerada.push(fila);
    }

    // Guardar la matriz en sessionStorage
    sessionStorage.setItem('matrizGenerada', JSON.stringify(matrizGenerada));
   /*  imprimirArrayEnDiv(matrizGenerada); */
  } else {
    sessionStorage.removeItem('matrizGenerada');
  }
}

// ✅ Obtener el array generado desde sessionStorage
function obtenerArrayGenerado() {
  return JSON.parse(sessionStorage.getItem('arrayGenerado')) || [];
}

function imprimirArrayEnDiv(array) {
  const resultadoDiv = document.getElementById('resultadoArray');
  if (!resultadoDiv) return;

  resultadoDiv.innerHTML = ''; // Limpiar el contenido actual

  // Llamar a tu función que genera el HTML de la tabla
  const tablaHTML = crearTabla(array);

  // Insertar la tabla en el div
  resultadoDiv.innerHTML = tablaHTML;
}
