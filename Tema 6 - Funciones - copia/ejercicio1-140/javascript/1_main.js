/* SECTION tomarDatos */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.formulario').addEventListener('input', function (event) {
    const seleccion = document.getElementById('miSelect').value;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());
    const acciones = {
      ['imprimir_' + seleccion]: window['imprimir_' + seleccion],
      ['mostrar_' + seleccion]: window['mostrar_' + seleccion],
    };

    const funcionImprimir = acciones['imprimir_' + seleccion];
    const funcionMostrar = acciones['mostrar_' + seleccion];

    if (funcionImprimir || funcionMostrar) {
      validarYProcesar(datos, funcionImprimir, funcionMostrar);
    } else {
      console.warn(`No se encontró una función válida para "${seleccion}"`);
    }
  });
});

/* !SECTION fin - tomarDatos */
