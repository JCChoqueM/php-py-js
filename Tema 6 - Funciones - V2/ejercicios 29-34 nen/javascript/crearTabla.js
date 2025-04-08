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
