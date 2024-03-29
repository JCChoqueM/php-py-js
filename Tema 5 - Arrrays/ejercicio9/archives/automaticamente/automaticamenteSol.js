/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS() {
  // Variables para el mensaje y estadísticas
  let mensaje = "";
  let colorCambio1 = "background-color: #2EFE64; color:black";
  let colorCambio2 = "background-color: #FE2E2E; color:black";
  let colorNegativo = "background-color: #00000000; color:black";
  let color;
  let aux;
  // Copiar el array original
  var numerosAuto2 = numerosAuto.slice(0);
  var arrayOriginal = numerosAuto2.slice(0);

  // Validar las posiciones introducidas
  var posicionesIntroducidas =
    "Inicial=" + ini_finAuto[0] + " Final=" + ini_finAuto[1];
  mensaje = "";

  if (!(ini_finAuto[0] >= 0 && ini_finAuto[0] < numerosAuto2.length - 1)) {
    mensaje = `<br>${posicionesIntroducidas}<br><br>Inicial debe estar comprendido entre 0 y   ${
      numerosAuto2.length - 2
    }`;
  } else if (
    !(
      ini_finAuto[1] > ini_finAuto[0] &&
      ini_finAuto[1] <= numerosAuto2.length - 1
    )
  ) {
    mensaje = `<br>${posicionesIntroducidas} <br><br>Final debe ser mayor que ${
      ini_finAuto[0]
    }  y menor que   ${numerosAuto2.length - 1}`;
  } else {
    let contador;
    aux = numerosAuto2[numerosAuto2.length - 1];

    for (
      contador = numerosAuto2.length - 1;
      contador > ini_finAuto[1];
      contador--
    ) {
      numerosAuto2[contador] = numerosAuto2[contador - 1];
    }

    numerosAuto2[ini_finAuto[1]] = numerosAuto2[ini_finAuto[0]];

    for (contador = ini_finAuto[0]; contador > 0; contador--) {
      numerosAuto2[contador] = numerosAuto2[contador - 1];
    }

    numerosAuto2[0] = aux;

    // Construir la tabla HTML con los resultados
    mensaje = posicionesIntroducidas;
    mensaje += "<table border='1' >";
    const filas = [
      ["Índice", Object.keys(arrayOriginal)],
      ["Matriz", arrayOriginal],
      ["Ordenado", numerosAuto2],
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
          if (clave == ini_finAuto[0]) {
            color = colorCambio1;
          } else if (clave == ini_finAuto[1]) {
            color = colorCambio2;
          } else {
            color = colorNegativo;
          }
          mensaje += `<td style='${color}'>${elemento}</td>`;
        });
      } else if (titulo === "Ordenado") {
        datos.forEach((elemento, clave) => {
          if (clave == ini_finAuto[1] % datos.length) {
            color = colorCambio1;
          } else if (clave == (ini_finAuto[1] + 1) % datos.length) {
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
  console.table(numerosAuto2);

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `numeros ingresados: ${arrayOriginal.join(
    ", "
  )}<br> ${mensaje} `;
}
