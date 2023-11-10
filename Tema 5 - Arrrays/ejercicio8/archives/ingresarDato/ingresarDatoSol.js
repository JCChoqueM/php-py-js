/**
 * Función asincrónica para realizar operaciones en una matriz de números y mostrar información sobre la cantidad de números negativos, primos y no primos en la matriz, así como mostrar la matriz ordenada.
 * @async
 */
async function ingresarJS() {
  // Inicialización de variables
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
   * Función para verificar si un número es primo.
   * @param {number} numero - El número que se verificará.
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

  // Contar números negativos
  numeros.forEach((elemento) => {
    if (elemento < 0) {
      negativo += 1;
    }
  });

  // Separar números primos y no primos
  numeros.forEach((elemento) => {
    if (esPrimo(elemento)) {
      auxPri.push(elemento);
    } else {
      auxNoPri.push(elemento);
    }
  });

  // Concatenar las listas y ordenarlas
  aux = auxPri.concat(auxNoPri);
  auxPri.sort((a, b) => a - b);
  auxNoPri.sort((a, b) => a - b);
  auxOrde = auxPri.concat(auxNoPri);

  // Crear el mensaje HTML con la información
  mensaje = "<table border='1' >";
  const filas = [
    ["Índice", Object.keys(numeros)],
    ["Matriz", numeros],
    ["Aux", aux],
    ["Ordenado", auxOrde],
  ];

  filas.forEach((fila) => {
    const titulo = fila[0];
    const datos = fila[1];

    mensaje += "<tr>";
    mensaje += `<th>${titulo}</th>`;

    if (titulo !== "Índice") {
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
      datos.forEach((indice) => {
        mensaje += `<td>${indice}</td>`;
      });
    }

    mensaje += "</tr>";
  });

  mensaje += "</table>";

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

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML += mensaje;
}
