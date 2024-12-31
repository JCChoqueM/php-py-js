const selectElement = document.getElementById('miSelect');

// Generar opciones dinámicamente
textos.forEach((item, index) => {
  const optionElement = document.createElement('option');
  optionElement.value = item.texto; // Asigna el valor
  optionElement.textContent = `${index + 1}.-${item.texto}`; // Asigna el texto visible
  selectElement.appendChild(optionElement);
});

const contenedor = document.getElementById('contenedor');
const tooltip = document.getElementById('tooltip');

// Generar los textos dinámicamente
textos.forEach((item, index) => {
  const span = document.createElement('SPAN');
  span.textContent = `${index + 1}.-${item.texto} `;
  span.className = 'texto-item';
  span.style.color = `var(--${item.texto})`;

  // Mostrar tooltip
  span.addEventListener('mouseover', () => {
    tooltip.textContent = item.descripcion;
    tooltip.style.display = 'block';

    const rect = span.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom + 5}px`;

    tooltip.style.backgroundColor = `var(--${item.texto})`;
  });

  // Ocultar tooltip
  span.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
  span.addEventListener('click', () => {
    select.value = item.texto; // Actualizar el valor del select
    select.dispatchEvent(new Event('change'));
    // Actualizar el contenido del span descripción
  });

  contenedor.appendChild(span);
});

// Obtener el select y el botón
const select = document.getElementById('miSelect');
const boton = document.getElementById('miBoton');
const descripcionDiv = document.getElementById('descripcionDiv');
// Función para cambiar el color del botón

function cambiarColorBoton(valorSeleccionado) {
  boton.style.backgroundColor = `var(--${valorSeleccionado})` || '';
}

function insertarDescripcionDiv(valorSeleccionado) {
  const textoSeleccionado = textos.find((item) => item.texto === valorSeleccionado);
  if (textoSeleccionado) {
    descripcionDiv.textContent = textoSeleccionado.descripcion;
  } else {
    descripcionDiv.textContent = 'Seleccione una función para ver su descripción.';
  }
}
// Establecer el color del botón al cargar la página (según el valor seleccionado por defecto)

// Event listener para cambiar el color cuando se selecciona una opción
select.addEventListener('change', () => {
  cambiarColorBoton(select.value);
  insertarDescripcionDiv(select.value);
  generarInputs(select.value);
});

const contenedorInputs = document.getElementById('contenedorInputs');
const generarInputs = (opcionSeleccionada) => {
  // Limpiar contenido previo
  contenedorInputs.innerHTML = '';

  // Buscar el objeto correspondiente en "textos"
  const funcionSeleccionada = textos.find((funcion) => funcion.texto === opcionSeleccionada);

  if (!funcionSeleccionada) return;

  // Crear los inputs dinámicamente
  funcionSeleccionada.inputs.forEach((inputConfig) => {
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
    /*  input.oninput = resolver; */

    contenedorInputs.appendChild(label);
    contenedorInputs.appendChild(input);
  });
};



cambiarColorBoton(select.value);
insertarDescripcionDiv(select.value);
generarInputs(select.value);
