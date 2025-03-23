function imprimirTabla(array, columnas = 6) {
  let html = `<style>
                table {
                    width: 100%;
                    border-collapse: collapse;
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
              </style>`;
  html += "<table>";
  let contador = 0;
  html += "<tr>";

  array.forEach((valor) => {
    html += `<td>${valor}</td>`;
    contador++;

    if (contador % columnas === 0) {
      html += "</tr><tr>";
    }
  });

  html += "</tr>";
  html += "</table>";

  return html;
}