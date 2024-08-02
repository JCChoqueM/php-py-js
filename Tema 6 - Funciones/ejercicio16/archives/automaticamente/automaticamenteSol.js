function automaticamenteJS(datos) {
  mensajeError = "";
  if (datos[0] > 0 && datos[0] <= 99999) {
    mensajeError += imprimirTabla(capicua(parseInt(datos[0])));
  } else {
    mensajeError = "Solo se permiten numeros entre 1 y 99999";
  }

  return mensajeError;
}

function capicua(limite) {
  const mensaje = [];

  // Generar capicúas de 1 a 5 dígitos
  // 1 dígito
  for (let i = 1; i <= 9; i++) {
    if (i <= limite) {
      mensaje.push(i);
    }
  }

  // 2 dígitos
  for (let i = 1; i <= 9; i++) {
    const capicua = parseInt(`${i}${i}`);
    if (capicua <= limite) {
      mensaje.push(capicua);
    }
  }

  // 3 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const capicua = parseInt(`${i}${j}${i}`);
      if (capicua <= limite) {
        mensaje.push(capicua);
      }
    }
  }

  // 4 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const capicua = parseInt(`${i}${j}${j}${i}`);
      if (capicua <= limite) {
        mensaje.push(capicua);
      }
    }
  }

  // 5 dígitos
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      for (let k = 0; k <= 9; k++) {
        const capicua = parseInt(`${i}${j}${k}${j}${i}`);
        if (capicua <= limite) {
          mensaje.push(capicua);
        }
      }
    }
  }

  return mensaje;
}

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



