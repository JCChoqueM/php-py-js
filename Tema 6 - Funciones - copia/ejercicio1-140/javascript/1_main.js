/* SECTION tomarDatos */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.formulario').addEventListener('input', function (event) {
    const seleccion = document.getElementById('miSelect').value;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());
    const acciones = {
      ['funcion_' + seleccion]: window['funcion_' + seleccion],
      ['mostrar_' + seleccion]: window['mostrar_' + seleccion],
    };

    const funcionSeleccion = acciones['funcion_' + seleccion];

    const funcionMostrar = acciones['mostrar_' + seleccion];

    if (funcionSeleccion || funcionMostrar) {
      validarYProcesar(datos, funcionSeleccion, funcionMostrar);
    } else {
      console.warn(`No se encontró una función válida para "${seleccion}"`);
    }
  });
});

/* !SECTION fin - tomarDatos */
