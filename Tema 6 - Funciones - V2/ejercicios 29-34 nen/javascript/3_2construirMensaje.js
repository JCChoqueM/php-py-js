/* section 1.-esCapicua */
function construirMensaje_generaArrayBiInt(datos, resultado) {
  let mensajeError = '';
  if (Array.isArray(resultado)) {
    mensajeError = 'El array Generado es22:';
    mensajeError += crearTabla(resultado);
    console.log(resultado);
  } else {
    console.error("El índice 'arrayGenerado' no es un array.");
  }
  return mensajeError;
}
/* !section fin - 1.-esCapicua */

/* section 2.-minimoArrayInt */
function construirMensaje_filaDeArrayBiInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  mensajeError = `la fila ${datos.num5} del array :`;
  mensajeError += crearTabla(arrayGenerado);
  mensajeError += 'es:';
  mensajeError += imprimirFilaEnTabla(resultado);

  return mensajeError;
}
/* !section fin - 2.-minimoArrayInt */
function construirMensaje_columnaDeArrayBiInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  mensajeError = `la fila ${datos.num5} del array :`;
  mensajeError += crearTabla(arrayGenerado);
  mensajeError += 'es:';
  mensajeError += imprimirColumnaEnTabla(resultado);

  return mensajeError;
}

function construirMensaje_coordenadasEnArrayBiInt(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  // Si no se encuentran coordenadas, mostrar mensaje alternativo
  if (resultado.length === 0) {
    mensajeError = `El número ${datos.num5} no se encontró en ninguna coordenada de la matriz {-1,-1} ${crearTabla(arrayGenerado)}.`;
    return mensajeError;
  }

  // Colores intercalados
  const colores = ['#1E90FF', '#FF4500', 'brown'];

  // Formatear las coordenadas con colores alternados
  const coordsFormateadas = resultado
    .map((coord, i) => {
      const color = colores[i % colores.length]; // Alterna colores
      return `<span style="color: ${color}; font-weight: bold;">[${coord[0]},${coord[1]}]</span>`;
    })
    .join(' ');

  mensajeError = `El número ${datos.num5} está en las coordenadas: ${coordsFormateadas} :`;
  mensajeError += crearTablaResaltado(arrayGenerado, resultado);

  return mensajeError;
}
function construirMensaje_esPuntoDeSilla(datos, resultado, arrayGenerado) {
  let mensajeError = '';

  // Si no se encuentran coordenadas, mostrar mensaje alternativo
  if (resultado.length === 0) {
    mensajeError = `El Array no tiene puntos de silla ${crearTabla(arrayGenerado)}.`;
    return mensajeError;
  }

  // Colores intercalados
  const colores = ['#1E90FF', '#FF4500', 'brown'];

  // Formatear las coordenadas con colores alternados
  const coordsFormateadas = resultado
    .map((coord, i) => {
      const color = colores[i % colores.length]; // Alterna colores
      return `<span style="color: ${color}; font-weight: bold;">[${coord[0]},${coord[1]}]</span>`;
    })
    .join(' ');

  mensajeError = `El punto de silla está en las coordenadas: ${coordsFormateadas} :`;
  mensajeError += crearTablaResaltado(arrayGenerado, resultado);

  return mensajeError;
}

function construirMensaje_diagonal(datos, resultado, arrayGenerado) {
  let mensajeError = '';
  let coordenadas = [datos.num5, datos.num6];
  mensajeError = `la diagonal ${coordenadas} es:`;
  console.log(coordenadas)
  mensajeError += crearTablaDiagonal(arrayGenerado, resultado,coordenadas);

  return mensajeError;
}
