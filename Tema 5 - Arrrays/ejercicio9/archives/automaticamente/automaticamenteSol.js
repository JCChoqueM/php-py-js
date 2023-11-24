/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS() {
  // Variables para el mensaje y estadísticas
  let mensaje = "";
  let negativo = 0;
  let colorCambio1 = "background-color: #2EFE64; color:black";
  let colorCambio2 = "background-color: #FE2E2E; color:black";
  let colorNegativo = "background-color: pink; color:black";
  let auxPri = [];
  let auxNoPri = [];
  let aux = [];
  let auxOrde = [];

  /**
   * Función que determina si un número es primo.
   * @param {number} numero - El número que se va a verificar.
   * @returns {boolean} - True si el número es primo, False en caso contrario.
   */
  function esPrimo(numero) {
    if (numero < 2) {
      return false;
    } else if (numero == 2 || numero == 3) {
      return true;
    } else if (numero % 2 == 0) {
      return false;
    } else {
      for (let i = 2; i * i <= numero; i++) {
        if (numero % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  // Procesar el array de números
  numerosAuto.forEach((elemento) => {
    // Contar números negativos
    if (elemento < 0) {
      negativo += 1;
    }
  });

  numerosAuto.forEach((elemento) => {
    // Separar números primos y no primos en arrays auxiliares
    if (esPrimo(elemento)) {
      auxPri.push(elemento);
    } else {
      auxNoPri.push(elemento);
    }
  });

  // Combinar arrays de primos y no primos
  aux = auxPri.concat(auxNoPri);

  // Ordenar arrays de primos y no primos
  auxPri.sort(function (a, b) {
    return a - b;
  });

  auxNoPri.sort(function (a, b) {
    return a - b;
  });

  // Combinar arrays ordenados de primos y no primos
  auxOrde = auxPri.concat(auxNoPri);

  // Construir la tabla HTML con los resultados
  mensaje = "<table border='1' >";
  filas = [
    ["Índice", Object.keys(numerosAuto)],
    ["Matriz", numerosAuto],
    ["Aux", aux],
    ["Ordenado", auxOrde],
  ];

  filas.forEach((fila) => {
    titulo = fila[0];
    datos = fila[1];

    mensaje += "<tr>";
    mensaje += `<th>${titulo}</th>`;

    if (titulo !== "Índice") {
      // Construir filas de la tabla con colores según ciertas condiciones
      datos.forEach((elemento) => {
        let color;
        if (elemento < 0) {
          color = colorNegativo;
        } else {
          color = esPrimo(elemento) ? colorCambio1 : colorCambio2;
        }
        mensaje += `<td style='${color}'>${elemento}</td>`;
      });
    } else {
      // Mostrar índices en la primera fila
      datos.forEach((indice) => {
        mensaje += `<td>${indice}</td>`;
      });
    }

    mensaje += "</tr>";
  });

  mensaje += "</table>";

  // Información adicional sobre el array
  mensaje += "El array tiene:<br>";
  mensaje += `${auxPri.length}  ${
    auxPri.length != 1 ? " numeros primos,  <br>" : " numero primo,  <br>"
  }`;
  mensaje += `${auxNoPri.length}  ${
    auxNoPri.length != 1 ? " numeros no primos,<br>" : " numero no primo,<br>"
  }`;
  mensaje += `${negativo}  ${
    negativo != 1 ? " numeros negativos." : " numero negativo."
  }`;

  // Mostrar el resultado en el elemento con id "resultadoJavaScript"
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML += mensaje;
}
