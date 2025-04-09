function crearTabla(matriz) {
  if (!Array.isArray(matriz) || matriz.length === 0) return '';

  let html = "<table border='1' cellpadding='5'><tr><th></th>";

  // Encabezados de columnas (color verde lechuga)
  for (let j = 0; j < matriz[0].length; j++) {
    const columnaColor = ' style="background-color: #98FB98;"';
    html += `<th ${columnaColor}>c${j}</th>`;
  }
  html += '</tr>';

  // Filas con índice (f0, f1) en naranja
  matriz.forEach((fila, i) => {
    const filaColor = ' style="background-color: orange;"';
    html += `<tr><th${filaColor}>f${i}</th>`;
    fila.forEach((valor) => {
      html += `<td>${valor}</td>`;
    });
    html += '</tr>';
  });

  html += '</table>';
  return html;
}

function imprimirFilaEnTabla(filaArray) {
  if (!Array.isArray(filaArray)) return '';

  let html = "<table border='1' cellpadding='5'><tr><th></th>";

  // Encabezados de columnas
  for (let j = 0; j < filaArray.length; j++) {
    html += `<th style="background-color: #98FB98;">c${j}</th>`;
  }

  html += "</tr><tr><th style='background-color: orange;'>Fila</th>";

  // Valores de la fila
  filaArray.forEach((valor) => {
    html += `<td>${valor}</td>`;
  });

  html += '</tr></table>';

  return html;
}

function imprimirColumnaEnTabla(columnaArray) {
  if (!Array.isArray(columnaArray)) return '';

  let html = "<table border='1' cellpadding='5'>";
  html += "<tr><th style='background-color: #98FB98;'>Columna</th></tr>";

  columnaArray.forEach((valor, i) => {
    html += `<tr><td>${valor}</td></tr>`;
  });

  html += '</table>';
  return html;
}

function crearTablaResaltado(matriz, coordenadasResaltadas = []) {
  if (!Array.isArray(matriz) || matriz.length === 0) return '';

  const coordsMap = new Map(); // Usamos Map para saber el orden de las coordenadas
  coordenadasResaltadas.forEach(([f, c], index) => {
    coordsMap.set(`${f},${c}`, index);
  });

  // Colores intercalados para los resaltados
  const colores = ['#1E90FF', '#FF4500', 'brown']; // Dorado y Celeste

  let html = "<table border='1' cellpadding='5'><tr><th></th>";

  // Encabezados de columnas (verde lechuga)
  for (let j = 0; j < matriz[0].length; j++) {
    const columnaColor = ' style="background-color: #98FB98;"';
    html += `<th ${columnaColor}>c${j}</th>`;
  }
  html += '</tr>';

  // Filas con índice (naranja) y celdas resaltadas con colores intercalados
  matriz.forEach((fila, i) => {
    const filaColor = ' style="background-color: orange;"';
    html += `<tr><th${filaColor}>f${i}</th>`;

    fila.forEach((valor, j) => {
      const key = `${i},${j}`;

      let estilo = '';
      if (coordsMap.has(key)) {
        const color = colores[coordsMap.get(key) % colores.length];
        estilo = ` style="background-color: ${color}; font-weight: bold;"`;
      }

      html += `<td${estilo}>${valor}</td>`;
    });

    html += '</tr>';
  });

  html += '</table>';
  return html;
}


function crearTablaDiagonal(matriz, diagonales, principal) {
  if (!Array.isArray(matriz) || matriz.length === 0) return '';

  const coordsMap = new Map(); // Usamos Map para saber las coordenadas de las diagonales

  // Resaltado de las coordenadas de la diagonal
  diagonales.forEach(({ coordenada }) => {
    coordsMap.set(`${coordenada[0]},${coordenada[1]}`, true);
  });

  // Pintar la coordenada principal de color rojo
  const principalKey = `${principal[0]},${principal[1]}`;

  let html = "<table border='1' cellpadding='5'><tr><th></th>";

  // Encabezados de columnas
  for (let j = 0; j < matriz[0].length; j++) {
    html += `<th>c${j}</th>`;
  }
  html += '</tr>';

  // Filas
  matriz.forEach((fila, i) => {
    html += `<tr><th>f${i}</th>`; // Etiqueta de fila (f0, f1, f2,...)

    fila.forEach((valor, j) => {
      const key = `${i},${j}`;
      let estilo = '';

      // Si la coordenada está en las diagonales resaltadas
      if (coordsMap.has(key)) {
        estilo = ` style="background-color: yellow;"`; // Color para las diagonales
      }

      // Si es la coordenada principal, pintarla de rojo
      if (key === principalKey) {
        estilo = ` style="background-color: red; font-weight: bold;"`; // Color rojo para la coordenada principal
      }

      html += `<td${estilo}>${valor}</td>`; // Celda con el valor de la matriz
    });

    html += '</tr>';
  });

  html += '</table>';
  return html;
}




