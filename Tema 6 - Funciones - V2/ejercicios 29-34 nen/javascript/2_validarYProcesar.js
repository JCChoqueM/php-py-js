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
    const minimo = Number(datos.num3);
    const maximo = Number(datos.num4);

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
        if (funcionSeleccion.name === 'funcion_diagonal') {
          const filas = Number(datos.num5);
          const columnas = Number(datos.num6);
          const numFilas = Number(datos.num1); // Total de filas (datos.num1)
          const numColumnas = Number(datos.num2); // Total de columnas (datos.num2)

          // Verificar que filas y columnas estén dentro del rango de la matriz
          let errores = [];
          
          if (filas < 0 || filas >= numFilas) {
            errores.push(`La fila ${filas} está fuera del rango. Debe estar entre 0 y ${numFilas - 1}.`);
          }
          if (columnas < 0 || columnas >= numColumnas) {
            errores.push(`La columna ${columnas} está fuera del rango. Debe estar entre 0 y ${numColumnas - 1}.`);
          }

          // Si hay errores en las filas o columnas, mostrarlos
          if (errores.length > 0) {
            mensaje = errores.join(' ');
            break;
          }
        }

        // Si todo está bien, procesamos los datos
        mostrar_imprimir(resultadoJS, resultadoPHP, datos, funcionSeleccion);
        return;
    }
  }

  // Mostrar el mensaje de error
  mostrarResultado(resultadoJS, mensaje);
  mostrarResultado(resultadoPHP, mensaje);
}
