function crearTabla(number, startIndex, highlightPosition = -1) {
  let numberString = number.toString();
  let headerText = startIndex === 0 ? "Posicion" : "Dígito";
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila de encabezado para los índices
  tableHtml += "<tr>";
  tableHtml += `<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>${headerText}</th>`;
  for (let i = 0; i < numberString.length; i++) {
    let index = i + startIndex;
    let cellStyle =
      i == highlightPosition
        ? "background-color: yellow;"
        : "background-color: lightblue;";
    tableHtml += `<td style='border: 1px solid black; padding: 5px; text-align: center; ${cellStyle} font-size: small; font-weight: bold;'>${index}</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila de encabezado para los dígitos
  tableHtml += "<tr>";
  tableHtml += `<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>`;
  for (let i = 0; i < numberString.length; i++) {
    let digit = numberString[i];
    let cellStyle =
      i == highlightPosition
        ? "background-color: yellow;"
        : "background-color: lightgreen;";
    tableHtml += `<td style='border: 1px solid black; padding: 15px; text-align: center; ${cellStyle} font-size: medium; font-weight: bold;'>${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}

function crearTablaReves(number, startIndex, highlightPosition = -1) {
  let numberString = number.toString();
  let headerText = startIndex === 0 ? "Posicion" : "Dígito";
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila de encabezado para los índices en reversa
  tableHtml += "<tr>";
  tableHtml += `<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>${headerText}</th>`;
  for (let i = numberString.length - 1; i >= 0; i--) {
    let index = i + startIndex;
    let cellStyle =
      index == highlightPosition
        ? "background-color: yellow;"
        : "background-color: lightblue;";
    tableHtml += `<td style='border: 1px solid black; padding: 5px; text-align: center; ${cellStyle} font-size: small; font-weight: bold;'>${index}</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila de encabezado para los dígitos
  tableHtml += "<tr>";
  tableHtml += `<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>`;
  for (let i = numberString.length - 1; i >= 0; i--) {
    let digit = numberString[numberString.length - 1 - i];
    let cellStyle =
      i == highlightPosition
        ? "background-color: yellow;"
        : "background-color: lightgreen;";
    tableHtml += `<td style='border: 1px solid black; padding: 15px; text-align: center; ${cellStyle} font-size: medium; font-weight: bold;'>${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}

function crearTablaTrozo(
  number,
  startIndex,
  highlightStart = -1,
  highlightEnd = -1
) {
  let numberString = number.toString();
  let headerText = startIndex === 0 ? "Posición" : "Dígito";
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila de encabezado para los índices
  tableHtml += "<tr>";
  tableHtml += `<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>${headerText}</th>`;
  for (let i = 0; i < numberString.length; i++) {
    let index = i + startIndex;
    let cellStyle =
      i >= highlightStart && i <= highlightEnd
        ? "background-color: yellow;"
        : "background-color: lightblue;";
    tableHtml += `<td style='border: 1px solid black; padding: 5px; text-align: center; ${cellStyle} font-size: small; font-weight: bold;'>${index}</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila de encabezado para los dígitos
  tableHtml += "<tr>";
  tableHtml +=
    "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
  for (let i = 0; i < numberString.length; i++) {
    let digit = numberString[i];
    let cellStyle =
      i >= highlightStart && i <= highlightEnd
        ? "background-color: yellow;"
        : "background-color: lightgreen;";
    tableHtml += `<td style='border: 1px solid black; padding: 15px; text-align: center; ${cellStyle} font-size: medium; font-weight: bold;'>${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}

function crearTablaPegado(pegado1, pegado2) {
  // Estructura de la tabla en HTML
  let tablaHtml =
    '<table style="border-collapse: collapse; width: 300px; margin: 5px auto;">';

  // Fila de encabezado
  tablaHtml += "<tr>";
  tablaHtml +=
    '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado1</th>';
  tablaHtml +=
    '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado2</th>';
  tablaHtml += "</tr>";

  // Filas con el contenido de pegado1 y pegado2
  tablaHtml += "<tr>";
  tablaHtml +=
    '<td style="border: 1px solid black; padding: 5px; text-align: center;">' +
    pegado1 +
    "</td>";
  tablaHtml +=
    '<td style="border: 1px solid black; padding: 5px; text-align: center;">' +
    pegado2 +
    "</td>";
  tablaHtml += "</tr>";

  // Cerrar la tabla
  tablaHtml += "</table>";

  return tablaHtml;
}
