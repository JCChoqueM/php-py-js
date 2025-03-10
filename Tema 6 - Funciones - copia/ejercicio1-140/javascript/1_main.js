/* SECTION tomarDatos */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.formulario').addEventListener('input', function (event) {
    const seleccion = document.getElementById('miSelect').value;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());
    const acciones = {
      ['funcion_' + seleccion]: window['funcion_' + seleccion],
    };

    const funcionSeleccion = acciones['funcion_' + seleccion];

    if (funcionSeleccion) {
      validarYProcesar(datos, funcionSeleccion);
    } else {
      console.warn(`No se encontró una función válida para "${seleccion}"`);
    }
  });
});

/* !SECTION fin - tomarDatos */
