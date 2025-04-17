function imprimirTabla(array, columnas = 10) {
  let html = `
    <style>
        table {
            width: 75%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        th, td {
            border: 1px solid #333;
            padding: 5px;
            text-align: center;
            font-size: 18px;
        }
        th {
            background-color: #f2f2f2;
        }
        td {
            background-color: #e6e6e6;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:nth-child(odd) {
            background-color: #ffffff;
        }
    </style>
    <table>
      <tr>`;

  array.forEach((valor, i) => {
    if (i > 0 && i % columnas === 0) {
      html += `</tr><tr>`;
    }
    html += `<td>${valor}</td>`;
  });

  html += `</tr></table>`;
  return html;
}
