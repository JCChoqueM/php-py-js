function crearTabla(number) {
  const numberString = number.toString();
  let tableHtml =
    '<table style="border-collapse: collapse; margin: 20px auto;">';

  // Crear la fila para los índices
  tableHtml += "<tr>";
  for (let i = 0; i < numberString.length; i++) {
    tableHtml += `<td style="border: 1px solid black; padding: 10px; text-align: center; background-color: lightblue;">${i}</td>`;
  }
  tableHtml += "</tr>";

  // Crear la fila para los dígitos
  tableHtml += "<tr>";
  for (let digit of numberString) {
    tableHtml += `<td style="border: 1px solid black; padding: 10px; text-align: center; background-color: lightgreen;">${digit}</td>`;
  }
  tableHtml += "</tr>";

  tableHtml += "</table>";
  return tableHtml;
}
