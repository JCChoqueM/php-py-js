async function ingresarJS() {
  let arrayValido = true;
  let mensaje = "";
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      arrayValido = false;
      break; // Se agregó "let" para declarar la variable y se usó "for" en lugar de "forEach"
    }
  }
  if (arrayValido) {
    let colorCambio1 = "background-color: #2EFE64; color:black";
    let colorCambio2 = "background-color: #FE2E2E; color:black";
    let auxPri = [];
    let auxNoPri = [];
    let aux = [];
    let auxOrde = [];
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

    numeros.forEach((elemento) => {
      if (esPrimo(elemento)) {
        auxPri.push(elemento);
      } else {
        auxNoPri.push(elemento);
      }
    });
    aux = auxPri.concat(auxNoPri);
    auxPri.sort(function (a, b) {
      return a - b;
    });

    auxNoPri.sort(function (a, b) {
      return a - b;
    });
    auxOrde = auxPri.concat(auxNoPri);

    mensaje = "<table border='1' >";
    filas = [
      ["Índice", Object.keys(numeros)],
      ["Matriz", numeros],
      ["Aux", aux],
      ["Ordenado", auxOrde],
    ];

    filas.forEach((fila) => {
      titulo = fila[0];
      datos = fila[1];

      mensaje += "<tr>";
      mensaje += `<th>${titulo}</th>`;

      if (titulo !== "Índice") {
        datos.forEach((elemento) => {
          let color = esPrimo(elemento) ? colorCambio1 : colorCambio2;
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
      auxPri.length != 1 ? " numeros primos y <br>" : " numero primo y <br>"
    }`;
    mensaje += `${auxNoPri.length}  ${
      auxNoPri.length != 1 ? " numeros no primos" : " numero no primo"
    }`;
  } else {
    mensaje = "<br><br>El array tiene numeros  negativos";
  }

  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML += mensaje;
}
