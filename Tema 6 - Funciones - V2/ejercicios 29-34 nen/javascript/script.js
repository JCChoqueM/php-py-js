// Obtener elementos del DOM
const select = document.getElementById('miSelect');
const boton = document.getElementById('miBoton');
const descripcionDiv = document.getElementById('descripcionDiv');
const contenedorInputs = document.getElementById('contenedorInputs');
const contenedor = document.getElementById('contenedor');
const tooltip = document.getElementById('tooltip');

// Definir la opción inicial seleccionada
const opcionInicial = 'esCapicua'; // Reemplázalo con la opción que desees

// Función para generar opciones del select
function generarOpcionesSelect() {
  textos.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = item.texto;
    option.textContent = `${index + 1}.-${item.texto}`;
    select.appendChild(option);
  });

  // Establecer la opción inicial si existe en textos
  if (textos.some((item) => item.texto === opcionInicial)) {
    select.value = opcionInicial;
  }
}

// Función para generar la lista de textos
function generarListaTextos() {
  textos.forEach((item, index) => {
    const span = document.createElement('SPAN');
    span.textContent = `${index + 1}.-${item.texto} `;
    span.className = 'texto-item';
    span.style.color = `var(--${item.texto})`;

    span.addEventListener('mouseover', () => mostrarTooltip(span, item.descripcion, item.texto));
    span.addEventListener('mouseout', ocultarTooltip);
    span.addEventListener('click', () => actualizarSeleccion(item.texto));

    contenedor.appendChild(span);
  });
}

// Función para mostrar el tooltip
function mostrarTooltip(elemento, descripcion, color) {
  tooltip.textContent = descripcion;
  tooltip.style.display = 'block';

  const rect = elemento.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top = `${rect.bottom + 5}px`;
  tooltip.style.backgroundColor = `var(--${color})`;
}

// Función para ocultar el tooltip
function ocultarTooltip() {
  tooltip.style.display = 'none';
}

// Función para actualizar la selección en el select
function actualizarSeleccion(valor) {
  select.value = valor;
  select.dispatchEvent(new Event('change'));
}

// Función para cambiar el color del botón
function cambiarColorBoton(valor) {
  boton.style.backgroundColor = `var(--${valor})` || '';
}

// Función para insertar la descripción
function insertarDescripcion(valor) {
  const item = textos.find((t) => t.texto === valor);
  descripcionDiv.textContent = item ? item.descripcion : 'Seleccione una función para ver su descripción.';
}

// Función para generar inputs dinámicos
function generarInputs(opcion) {
  contenedorInputs.innerHTML = '';

  const funcion = textos.find((t) => t.texto === opcion);
  if (!funcion) return;

  funcion.inputs.forEach((inputConfig) => {
    const label = document.createElement('label');
    label.setAttribute('for', inputConfig.id);
    label.textContent = inputConfig.label;
    label.classList.add('label__letra');

    const input = document.createElement('input');
    input.type = 'number';
    input.id = inputConfig.id;
    input.name = inputConfig.name;
    input.placeholder = inputConfig.placeholder;
    input.required = true;

    contenedorInputs.append(label, input);
  });
}

// Event listener del select
select.addEventListener('change', () => {
  cambiarColorBoton(select.value);
  insertarDescripcion(select.value);
  generarInputs(select.value);
  actualizarInputs();
  enviarFormulario();
});

// Inicialización
function iniciar() {
  generarOpcionesSelect();
  generarListaTextos();

  // Aplicar valores iniciales
  setSelectValue('miSelect', 'generaArrayBiInt');
  cambiarColorBoton(select.value);
  insertarDescripcion(select.value);
  generarInputs(select.value);
}

iniciar();

function setSelectValue(idSelect, valor) {
  const select = document.getElementById(idSelect);
  if (select) {
    select.value = valor;
  }
}
