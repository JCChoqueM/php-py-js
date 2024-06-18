/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
/* function automaticoJS(numero) {
  let bidimensional = numero;
  function imprimirTabla(numero, ejeX, ejeY) {
    let mensaje = "<table border='1'>";
    // Añadir fila de índices de columna arriba de la tabla
    mensaje += "<tr>";
    mensaje += "<td></td>"; // Celda vacía para ajustar el índice de fila
    for (let y = 0; y < 12; y++) {
      mensaje += `<td style='background-color: yellow;'>${y}</td>`;
    }
    mensaje += "</tr>";
    for (let x = 0; x < 12; x++) {
      mensaje += "<tr>";
      // Añadir índice de fila a la izquierda de la fila
      mensaje += `<td style='background-color: orange;'>&nbsp;&nbsp;${x}</td>`;
      for (let y = 0; y < 12; y++) {
        // Determinar el color de fondo basado en la posición de la celda
        const colorFondo = getColorFondo(x, y, ejeX, ejeY);
        mensaje += `<td style='background-color: ${colorFondo};'>${numero[x][y]}</td>`;
      }
      mensaje += "</tr>";
    }
    mensaje += "</table>";
    return mensaje;
  }

  function rotarTabla(numero) {
    function copiarArrayBidimensional(arrayOriginal) {
      const filas = arrayOriginal.length;
      const columnas = arrayOriginal[0].length; // Se asume que todas las filas tienen la misma longitud

      // Inicializar el nuevo array bidimensional
      const nuevoArray = [];
      for (let i = 0; i < filas; i++) {
        nuevoArray[i] = Array(columnas).fill(null);
      }

      return nuevoArray;
    }

    const copia = copiarArrayBidimensional(numero);

    //SECTION - Inicio-Rotar fila superior a la Derecha
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 11 - i; j++) {
        copia[i][j + 1] = numero[i][j];
      }
    }
    //!SECTION - Fin-Rotar fila superior a la Derecha

    //SECTION - Inicio-Rotar Ultima columna hacia abajo
    for (let i = 0; i < 6; i++) {
      for (let j = i; j < 11 - i; j++) {
        copia[j + 1][11 - i] = numero[j][11 - i];
      }
    }
    //!SECTION - Fin-Rotar Ultima columna hacia abajo

    //SECTION - Inicio-Rotar fila inferior a la Izquierda
    for (let i = 0; i < 6; i++) {
      for (let j = i; j < 11 - i; j++) {
        copia[11 - i][j] = numero[11 - i][j + 1];
      }
    }
    //!SECTION - Fin-Rotar fila inferior a la Izquierda

    //SECTION - Inicio-Rotar primera columna hacia Arriba
    for (let i = 0; i < 6; i++) {
      for (let j = i; j < 11 - i; j++) {
        copia[j][i] = numero[j + 1][i];
      }
    }
    //!SECTION -Fin-Rotar primera columna hacia Arriba
    return copia;
  }

  function getColorFondo(x, y, ejeX, ejeY) {
    switch (true) {
      case x === 0 || x === 11 || y === 0 || y === 11:
        return x === ejeX + 0 && y === ejeY + 0 ? "#1EA50E" : "#49FF33";
      case x === 1 || x === 10 || y === 1 || y === 10:
        return x === ejeX + 1 && y === ejeY + 1 ? "#5C39D2" : "#7F5FEE";
      case x === 2 || x === 9 || y === 2 || y === 9:
        return x === ejeX + 2 && y === ejeY + 2 ? "#F16C09" : "#DC7F3A";
      case x === 3 || x === 8 || y === 3 || y === 8:
        return x === ejeX + 3 && y === ejeY + 3 ? "#A41B0C" : "#AA3629";
      case x === 4 || x === 7 || y === 4 || y === 7:
        return x === ejeX + 4 && y === ejeY + 4 ? "#CB315C" : "#C94D70";
      case x === 5 || x === 6 || y === 5 || y === 6:
        return x === ejeX + 5 && y === ejeY + 5 ? "#FFC300" : "#DBE337";
      default:
        return "";
    }
  }

  // Definir tu array bidimensional aquí
  let mensaje1 = imprimirTabla(bidimensional, 0, 0);
  let rotado = rotarTabla(bidimensional);
  let mensaje2 = imprimirTabla(rotado, 0, 1);

  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje1} <br> ${mensaje2}`;
} */
