function crearTabla(number, startIndex) {
  const numberString = number.toString();
  const headerText = startIndex === 0 ? "Posicion" : "Dígito";
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila de encabezado para los índices
  tableHtml += "<tr>";
  tableHtml += `<th style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;">${headerText}</th>`;
  for (let i = 0; i < numberString.length; i++) {
    tableHtml += `<td style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;">${
      i + startIndex
    }</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila de encabezado para los dígitos
  tableHtml += "<tr>";
  tableHtml += `<th style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;"></th>`;
  for (let digit of numberString) {
    tableHtml += `<td style="border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;">${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}


function crearTablaReves(number, startIndex) {
  const numberString = number.toString();
  const headerText = startIndex === 0 ? "Posicion" : "Dígito";
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila de encabezado para los índices
  tableHtml += "<tr>";
  tableHtml += `<th style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;">${headerText}</th>`;
  for (let i = numberString.length - 1; i >= 0; i--) {
    tableHtml += `<td style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;">${
      i + startIndex
    }</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila de encabezado para los dígitos
  tableHtml += "<tr>";
  tableHtml += `<th style="border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;"></th>`;
  for (let digit of numberString) {
    tableHtml += `<td style="border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;">${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}
