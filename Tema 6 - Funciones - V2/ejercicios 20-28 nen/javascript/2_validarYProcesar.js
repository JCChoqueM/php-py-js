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
  let mensaje = '';

  // Si hay campos vacíos, mostrar mensaje y detener el proceso
  if (camposVacios.length > 0) {
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
  } else {
    // Convertir a número
    const minimo = Number(datos.num2);
    const maximo = Number(datos.num3);

    // Validar mínimo y máximo
    switch (true) {
      case isNaN(minimo) || isNaN(maximo):
        mensaje = 'Los valores de "Mínimo" y "Máximo" deben ser números.';
        break;
      case minimo > maximo:
        mensaje = 'El valor de "Mínimo" no puede ser mayor que "Máximo".';
        break;
      default:
        // Si todo está bien, procesamos los datos
        mostrar_imprimir(resultadoJS, resultadoPHP, datos, funcionSeleccion);
        return;
    }
  }

  // Mostrar el mensaje de error
  mostrarResultado(resultadoJS, mensaje);
  mostrarResultado(resultadoPHP, mensaje);
}
