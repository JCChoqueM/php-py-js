function filtrarCamposVacios(datos) {
  return Object.entries(datos)
    .filter(([_, valor]) => valor.trim() === '')
    .map(([campo]) => campo);
}
function validarYProcesar(datos, funcionSeleccion) {
  const resultadoJS = document.querySelector('#resultadoJS');
  const resultadoPHP = document.querySelector('#resultadoPHP');
  const camposVacios = filtrarCamposVacios(datos);
  const totalCampos = Object.keys(datos).length;

  // Si no hay campos vacíos, procesamos los datos
  if (camposVacios.length === 0) {
    mostrar_imprimir(resultadoJS, resultadoPHP, datos, funcionSeleccion);
    return;
  }

  // Creamos el mensaje según la cantidad de campos vacíos
  let mensaje = '';

  switch (camposVacios.length) {
    case 1:
      mensaje = `El campo "${camposVacios[0]}" está vacío.`;
      break;
    case totalCampos:
      mensaje = 'Todos los campos deben ser llenados.';
      break;
    default:
      mensaje = `Faltan los siguientes campos: ${camposVacios.join(', ')}`;
      break;
  }

  // Mostrar el mensaje de error
  mostrarResultado(resultadoJS, mensaje);
  mostrarResultado(resultadoPHP, mensaje);
}
