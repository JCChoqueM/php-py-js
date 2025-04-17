// Configuración visual de colores
const configVisual = {
  datos: { color: 'black' },
  contador: { color: 'red' },
  impares: { color: 'purple' },
  media: { color: 'purple' },
  pares: { color: 'blue' },
  mayorPar: { color: 'blue' },
  mayorParValor: 'blue',
};

// Resalta un texto con color y estilo
function resaltar(texto, color, negrita = true) {
  return `<span style="color:${color}; ${negrita ? 'font-weight:bold;' : ''}">${texto}</span>`;
}

// Genera una línea HTML con título + contenido
function seccion(titulo, color, contenido) {
  return `<br><span style="color:${color}; font-weight:bold;">${titulo}:</span> ${contenido}`;
}

// Construye el mensaje principal usando estilos y datos
function construirMensaje(resultado, visual = configVisual) {
  const { datos, contador, numerosImpares, mediaImpares, numerosPares, mayorPar } = resultado;

  const datosColoreados = datos.map((n) => (n % 2 === 0 ? resaltar(n, visual.pares.color) : resaltar(n, visual.impares.color))).join(', ');

  let mensaje = seccion('Números ingresados', visual.datos.color, datosColoreados);

  if (contador !== undefined) {
    const impares = numerosImpares.length
      ? numerosImpares.map((n) => resaltar(n, visual.impares.color, false)).join(', ')
      : 'No hay impares';

    const media = numerosImpares.length ? resaltar(mediaImpares.toFixed(2), visual.media.color, false) : 'No hay impares para calcular';

    const pares = numerosPares.length ? numerosPares.map((n) => resaltar(n, visual.pares.color, false)).join(', ') : 'No hay pares';

    const mayor = mayorPar === 0 ? 'No hay pares para calcular' : resaltar(mayorPar, visual.mayorParValor);

    mensaje += seccion('Cantidad de números introducidos', visual.contador.color, resaltar(contador, visual.contador.color, false));
    mensaje += seccion('Números impares', visual.impares.color, impares);
    mensaje += seccion('Media de los impares', visual.media.color, media);
    mensaje += seccion('Números pares', visual.pares.color, pares);
    mensaje += seccion('Mayor de los pares', visual.mayorPar.color, mayor);
  }

  return mensaje;
}
