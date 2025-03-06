function filtrarCamposVacios(datos) {
  return Object.entries(datos)
    .filter(([_, valor]) => valor.trim() === '')
    .map(([campo]) => campo);
}
function validarYProcesar(datos, funcionProcesar, mostrarFuncion) {
  const resultadoJS = document.querySelector('#resultadoJS');
  const camposVacios = filtrarCamposVacios(datos);
  const totalCampos = Object.keys(datos).length;

  // Si no hay campos vacíos, procesamos los datos
  if (camposVacios.length === 0) {
    funcionProcesar(resultadoJS, datos, mostrarFuncion);
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
}
