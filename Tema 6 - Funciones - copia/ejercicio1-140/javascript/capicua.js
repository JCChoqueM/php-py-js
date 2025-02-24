/* SECTION imprimir */
document.querySelector('.formulario').addEventListener('input', function (event) {
  const form = event.currentTarget; // Obtener referencia al formulario
  const formData = new FormData(form); // Capturar los valores del formulario
  // Convertir FormData en un objeto
  const datos = Object.fromEntries(formData.entries());

  let mensaje = acciones['imprimir_' + select.value](datos);

  const resultadoJS = document.querySelector('#resultadoJavaScript');
  resultadoJS.innerHTML = '';

  // Crear un nuevo párrafo con el valor ingresado
  const solucion = document.createElement('span');
  solucion.innerHTML = mensaje;
console.log(mensaje)
  // Agregar el nuevo párrafo al contenedor
  resultadoJS.appendChild(solucion);
});

/* !SECTION fin - imprimir */
