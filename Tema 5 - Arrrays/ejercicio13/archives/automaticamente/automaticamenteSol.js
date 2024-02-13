/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS(num1ero, minimo, xMinimo, yMinimo) {
  // Variables para el mensaje y estadísticas
  var mensaje = "<table border='1'>";

  // Añadir fila de índices de columna arriba de la tabla
  mensaje += "<tr>";
  mensaje += "<td></td>"; // Celda vacía para ajustar el índice de fila
  for (var y = 0; y < 9; y++) {
    mensaje += "<td style='background-color: yellow;'>" + y + "</td>";
  }
  mensaje += "</tr>";

  for (var x = 0; x < 6; x++) {
    mensaje += "<tr>";
    // Añadir índice de fila a la izquierda de la fila
    mensaje +=
      "<td style='background-color: orange;'>" + "&nbsp;&nbsp;" + x + "</td>";
    for (var y = 0; y < 9; y++) {
      // Determinar el color de fondo basado en la posición de la celda
      var colorFondo = (x + y) % 2 == 0 ? "" : "grey";
      if (num1ero[x][y] == minimo) {
        mensaje +=
          "<td style='background-color: #33E9FF; color: black;'>" +
          num1ero[x][y] +
          "</td>";
      } else if (
        Math.abs(Math.abs(x) - Math.abs(xMinimo)) ==
        Math.abs(Math.abs(y) - Math.abs(yMinimo))
      ) {
        mensaje +=
          "<td style='background-color: green;'>" + num1ero[x][y] + "</td>";
      } else {
        mensaje +=
          "<td style='background-color: " +
          colorFondo +
          ";'>" +
          num1ero[x][y] +
          "</td>";
      }
    }
    mensaje += "</tr>";
  }
  mensaje += "</table>";

  // Usar plantilla de cadena para mostrar el valor mínimo y su posición
  mensaje += `<br>El valor mínimo es ${minimo}<br> en la posición [${xMinimo}][${yMinimo}]`;
  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje}`;
}
