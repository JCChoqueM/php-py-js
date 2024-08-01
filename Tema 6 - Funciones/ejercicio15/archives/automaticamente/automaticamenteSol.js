function automaticamenteJS(datos) {
  mensajeError = "";
  if (datos[0] > 0 && datos[0] <= 1000) {
    mensajeError += imprimirTabla(cribaEratostenes(parseInt(datos[0])));
  } else {
    mensajeError = "Solo se permiten numeros entre 1 y 1000";
  }

  return mensajeError;
}

function cribaEratostenes(limite) {
  const numeros = new Array(limite + 1).fill(true);
  numeros[0] = numeros[1] = false; // 0 y 1 no son primos

  for (let n = 2; n <= Math.sqrt(limite); n++) {
    if (numeros[n]) {
      for (let i = n * n; i <= limite; i += n) {
        numeros[i] = false;
      }
    }
  }

  return numeros
    .map((esPrimo, i) => (esPrimo ? i : -1))
    .filter((i) => i !== -1);
}

function imprimirTabla(array, columnas = 10) {
  let html = `
    <style>
        table {
            width: 75%;
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
    </style>
    <table>
    `;

  array.forEach((valor, i) => {
    if (i % columnas === 0 && i !== 0) {
      html += "</tr><tr>";
    }
    html += `<td>${valor}</td>`;
  });

  html += "</tr></table>";
  return html;
}
