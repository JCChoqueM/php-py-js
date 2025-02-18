function automaticamenteJS(datos) {
  let numero = parseInt(datos[0], 10);
  const estado = isNaN(numero) ? "0" : "1";
  let mensaje = [];
  switch (estado) {
    case "0":
      mensaje.push(
        "El campo esta vacio o no es un numero. Por favor, ingrese numero(s)."
      );
      break;
    case "1":
      numero = Math.abs(numero); // Asegura que el número sea positivo
      if (verificarDecimal(numero)) {
        mensaje.push(
          `El numero Decimal ${numero} es igual a :<br>${transformar(
            numero
          )} en base Binaria.`
        );
      } else {
        mensaje.push(`El numero ${numero} no es Decimal.`);
      }
      break;
    default:
      mensaje.push("Error desconocido. Por favor, revise las entradas.");
  }

  return imprimirTabla(mensaje);
}
function transformar(divisor) {
  let suma = 0;
  let i = 0;
  while (divisor > 0) {
    if (divisor % 2 === 1) {
      suma += Math.pow(10, i);
    }
    divisor = Math.floor(divisor / 2);
    i++;
  }
  return suma;
}

/**
 * Verifica si un número es decimal.
 *
 * @param {number} divisor - Número como entero.
 * @returns {boolean} True si el número es decimal, False en caso contrario.
 */
function verificarDecimal(divisor) {
  while (divisor > 0) {
    if (divisor % 10 >= 0 && divisor % 10 <= 9) {
      divisor = Math.floor(divisor / 10);
    } else {
      return false;
    }
  }
  return true;
}

function imprimirTabla(array, columnas = 1) {
  let html = `
    <style>
      table {
          width: 100%;
          border-collapse: collapse;
      }
      th, td {
          border: 1px solid #333;
          padding: 20px;
          text-align: center;
          font-size: 18px;
          width: 350px; 
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

  let contador = 0;
  html += "<tr>"; // Inicia la primera fila

  array.forEach((valor) => {
    html += `<td>${valor}</td>`; // Imprime cada valor en una celda de tabla
    contador++;

    if (contador % columnas === 0) {
      html += "</tr><tr>"; // Inicia una nueva fila cada $columnas valores
    }
  });

  html += "</tr></table>"; // Cierra la última fila y la tabla
  return html;
}
