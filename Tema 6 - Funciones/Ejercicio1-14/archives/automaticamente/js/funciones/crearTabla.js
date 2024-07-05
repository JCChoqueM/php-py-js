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
