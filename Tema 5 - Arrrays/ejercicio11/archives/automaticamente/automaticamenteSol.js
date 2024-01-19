/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS() {
  // Variables para el mensaje y estadísticas


    // Construir la tabla HTML con los resultados
  let mensaje = "<table border='1'><tr>";

  let contador = 0;
  cartasSacadas.forEach((carta, index) => {
    if (contador % 5 === 0 && contador > 0) {
      // Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
      mensaje += "</tr><tr>";
    }

    const puntos = puntosSacados[index];

    // Establecer un color de fondo condicional basado en los puntos
    const colorFondo = puntos > 0 ? "background-color: yellow;" : "";

    // Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
    mensaje += `<td style='${colorFondo}'>`;
    mensaje += "<table border='1'>";
    mensaje += "<tr>";
    mensaje += "<td>";
    // Celda para la imagen
    mensaje += `<img src='images/${carta.toLowerCase().replace(/ /g, "_")}.png' alt='${carta}' style='width: 70px; height: 95px;'><br>`;

    // Celda para el nombre de la carta
    mensaje += `${carta}<br>`;
    mensaje += "</td>";
    mensaje += "</tr>";

    mensaje += "<tr>";
    mensaje += "<td>";

    // Celda para los puntos
    mensaje += `${puntos} pts.`;
    mensaje += "</td>";
    mensaje += "</tr>";

    mensaje += "</table>";
    mensaje += "</td>";

    contador++;
  });

  // Cerrar la última fila
  mensaje += `</tr></table><br> La suma total es: ${sumaTotal}`;
  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje} `;
}
