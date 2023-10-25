function solucionJavaScript() {
  let mensaje = "";
  let colorCambio1 = "background-color: yellow; color:black";
  let colorCambio2 = "background-color: orange; color:black";
  let aux = [],
    auxpar = [],
    auximpar = [],
    ordenado = [],
    numero = [];
  //SECTION - inicio genera numeros aleatorios
  const min = 0;
  const max = 15;
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }
  //!SECTION - fin genera numeros aleatorios

  //SECTION - inicio  arrays
  numero.forEach((elemento) => {
    if (Math.abs(elemento) % 2 == 0) {
      aux.push(elemento);
      auxpar.push(elemento);
    }
  });
  numero.forEach((elemento) => {
    if (Math.abs(elemento) % 2 == 0) {
    } else {
      aux.push(elemento);
      auximpar.push(elemento);
    }
  });

  auxpar.sort(function (a, b) {
    return a - b;
  });

  auximpar.sort(function (a, b) {
    return a - b;
  });

  ordenado = auxpar.concat(auximpar);

  //!SECTION fin arrays

  //SECTION - inicio tabala
  mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Aux</th><th>Ordenado</th></tr>`;
  numero.forEach((elemento, contador) => {
    mensaje += `<tr><td>${contador}</td>`;
    if (elemento % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'>${elemento}</td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'>${elemento}</td>`;
    }
    if (aux[contador] % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'>${aux[contador]}</td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'>${aux[contador]}</td>`;
    }
    if (ordenado[contador] % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'>${ordenado[contador]}</td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'>${ordenado[contador]}</td>`;
    }
  });

  mensaje += `</tr>`;

  mensaje += "</table>";
  mensaje += `
  El array tiene:<br>
  ${auxpar.length}${
    auxpar.length != 1 ? " numeros pares y" : " numero par y"
  }<br>
  ${auximpar.length}${
    auximpar.length != 1 ? " numeros impares" : " numero impar"
  }`;
  //!SECTION - fin tabla
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
