/**
 * Función asincrónica para realizar operaciones en una matriz de números y mostrar información sobre la cantidad de números negativos, primos y no primos en la matriz, así como mostrar la matriz ordenada.
 * @async
 */
async function ingresarJS() {
  // Inicialización de variables
  let mensaje = "";

  let colorCambio1 = "background-color: #2EFE64; color:black";
  let colorCambio2 = "background-color: #FE2E2E; color:black";
  let colorNegativo = "background-color: #00000000; color:black";
  let color;
  let aux;
  // Copiar el array original
  var arrayOriginal = numeros.slice(0);

  // Validar las posiciones introducidas
  var posicionesIntroducidas = "Inicial=" + ini_fin[0] + " Final=" + ini_fin[1];
  mensaje = "";

  if (!(ini_fin[0] >= 0 && ini_fin[0] < numeros.length - 1)) {
    mensaje = `<br>${posicionesIntroducidas}<br><br>Inicial debe estar comprendido entre 0 y   ${
      numeros.length - 2
    }`;
  } else if (!(ini_fin[1] > ini_fin[0] && ini_fin[1] <= numeros.length - 1)) {
    mensaje = `<br>${posicionesIntroducidas}<br><br>Final debe ser mayor que ${
      ini_fin[0]
    }  y menor que   ${numeros.length - 1}`;
  } else {
    let contador;
    aux = numeros[numeros.length - 1];

    for (contador = numeros.length - 1; contador > ini_fin[1]; contador--) {
      numeros[contador] = numeros[contador - 1];
    }

    numeros[ini_fin[1]] = numeros[ini_fin[0]];

    for (contador = ini_fin[0]; contador > 0; contador--) {
      numeros[contador] = numeros[contador - 1];
    }

    numeros[0] = aux;

    // Construir la tabla HTML con los resultados
    mensaje = posicionesIntroducidas;
    mensaje += "<table border='1' >";
    const filas = [
      ["Índice", Object.keys(arrayOriginal)],
      ["Matriz", arrayOriginal],
      ["Ordenado", numeros],
    ];

    filas.forEach((fila) => {
      const titulo = fila[0];
      const datos = fila[1];

      mensaje += "<tr>";
      mensaje += `<th>${titulo}</th>`;
      if (titulo === "Índice") {
        // Mostrar índices en la primera fila
        datos.forEach((indice) => {
          mensaje += `<td>${indice}</td>`;
        });
      } else if (titulo === "Matriz") {
        datos.forEach((elemento, clave) => {
          if (clave == ini_fin[0]) {
            color = colorCambio1;
          } else if (clave == ini_fin[1]) {
            color = colorCambio2;
          } else {
            color = colorNegativo;
          }
          mensaje += `<td style='${color}'>${elemento}</td>`;
        });
      } else if (titulo === "Ordenado") {
        datos.forEach((elemento, clave) => {
          if (clave == ini_fin[1] % datos.length) {
            color = colorCambio1;
          } else if (clave == (ini_fin[1] + 1) % datos.length) {
            color = colorCambio2;
          } else {
            color = colorNegativo;
          }
          mensaje += `<td style='${color}'>${elemento}</td>`;
        });
      }

      mensaje += "</tr>";
    });
    mensaje += "</table>";
  }
  console.table(numeros);

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `numeros ingresados: ${numeros.join(
    ", "
  )}<br> ${mensaje} `;
}
