/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS() {
  // Variables para el mensaje y estadísticas
  const fruta = document.getElementById("fruta").value;
  let mensaje = "";
  if (asociativo.hasOwnProperty(fruta)) {
    // Construir la tabla HTML con la información de la fruta
    mensaje =
      "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>";
    mensaje += "<tr>";
    mensaje +=
      "<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>" +
      fruta +
      "</th>";
    mensaje += "</tr>";
    mensaje += "<tr>";
    mensaje += "<td style='padding: 10px;'>";
    mensaje += `<img src='images/${fruta
      .toLowerCase()
      .replace(
        / /g,
        "_"
      )}.png' alt='${fruta}' style='width: 150px; height: 150px;'><br>`;

    mensaje += "</td>";
    mensaje += "</tr>";
    mensaje += "<tr>";
    mensaje += "<td style='padding: 10px;'>";
    mensaje += `<strong style='font-size: 1.2em;'>${fruta} en inglés es: <br>${asociativo[fruta]}</strong>`;
    mensaje += "</td>";
    mensaje += "</tr>";
    mensaje += "</table>";

    // Mostrar el mensaje
  } else {
    mensaje = `No bromees ${fruta} no es una fruta`;
  }
  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje}`;
}
