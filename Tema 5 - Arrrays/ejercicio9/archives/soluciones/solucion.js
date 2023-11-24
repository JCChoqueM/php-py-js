function solucionJavaScript() {
  // Inicialización de variables
  let mensaje = "";
  let numero = [];
  const min = -9;
  const max = 100;

  // Generar 6 números aleatorios y almacenarlos en el array 'numero'
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }

  let negativo = 0; // Contador de números negativos
  let colorCambio1 = "background-color: #2EFE64; color:black"; // Estilo para números primos
  let colorCambio2 = "background-color: #FE2E2E; color:black"; // Estilo para números no primos
  let colorNegativo = "background-color: pink; color:black"; // Estilo para números negativos
  let auxPri = []; // Array para almacenar números primos
  let auxNoPri = []; // Array para almacenar números no primos
  let aux = []; // Array auxiliar para combinación de primos y no primos
  let auxOrde = []; // Array para almacenar números ordenados

  // Función para determinar si un número es primo
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

  // Contar números negativos en el array 'numero'
  numero.forEach((elemento) => {
    if (elemento < 0) {
      negativo += 1;
    }
  });

  // Separar números primos y no primos en arrays auxiliares
  numero.forEach((elemento) => {
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

  // Crear una cadena con los números ingresados separados por comas
  let ingresado = numero.join(",");

  // Construir el mensaje HTML
  mensaje += `Números ingresados JS: ${ingresado}.`;
  mensaje += "<table border='1' >";

  // Definir los datos y títulos para cada fila de la tabla
  filas = [
    ["Índice", Object.keys(numero)],
    ["Matriz", numero],
    ["Aux", aux],
    ["Ordenado", auxOrde],
  ];

  // Iterar sobre cada fila y columna para construir la tabla
  filas.forEach((fila) => {
    titulo = fila[0];
    datos = fila[1];

    mensaje += "<tr>";
    mensaje += `<th>${titulo}</th>`;

    if (titulo !== "Índice") {
      // Aplicar estilos y mostrar datos para cada celda
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
  mensaje += `${auxPri.length} ${
    auxPri.length != 1 ? " números primos,<br>" : " número primo,<br>"
  }`;
  mensaje += `${auxNoPri.length} ${
    auxNoPri.length != 1 ? " números no primos,<br>" : " número no primo,<br>"
  }`;
  mensaje += `${negativo} ${
    negativo != 1 ? " números negativos." : " número negativo."
  }`;

  // Mostrar el resultado en el elemento con id "resultadoJavaScript"
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = mensaje;
}
