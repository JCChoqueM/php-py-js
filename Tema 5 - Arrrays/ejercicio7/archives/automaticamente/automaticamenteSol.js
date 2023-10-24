function automaticoJS() {
  let mensaje = "";

  let colorCambio1 = "background-color: yellow; color:black";
  let colorCambio2 = "background-color: orange; color:black";
  let aux = [];
  let auxpar = [];
  let auximpar = [];
  let ordenado = [];
  console.log(aux);
  numerosAuto.forEach((elemento) => {
    if (Math.abs(elemento) % 2 == 0) {
      aux.push(elemento);
      auxpar.push(elemento);
    }
  });
  numerosAuto.forEach((elemento) => {
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

  mensaje = "<table border='1' >";
  //SECTION - fila indice
  mensaje += "<tr>";
  mensaje += "<th >Índice</th>";

  numerosAuto.forEach((_, indice) => {
    mensaje += `<th> ${indice} </th>`;
  });
  mensaje += "</tr>";
  //!SECTION fin fila indice

  //SECTION - inicio fila matriz
  mensaje += "<tr>";
  mensaje += "<td >Matriz</td>";

  numerosAuto.forEach((elemento) => {
    if (elemento % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'> ${elemento}  </td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'> ${elemento} </td>`;
    }
  });

  mensaje += "</tr>";
  //!SECTION fin fila matriz
  //SECTION - inicio fila aux
  mensaje += "<tr>";
  mensaje += "<td >Aux</td>";

  aux.forEach((elemento) => {
    if (elemento % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'> ${elemento}  </td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'> ${elemento} </td>`;
    }
  });

  mensaje += "</tr>";
  //!SECTION fin fila aux

  //SECTION - inicio fila ordenado
  mensaje += "<tr>";
  mensaje += "<td >ordenado</td>";

  ordenado.forEach((elemento) => {
    if (elemento % 2 == 0) {
      mensaje += `<td style='${colorCambio1}'> ${elemento}  </td>`;
    } else {
      mensaje += `<td style='${colorCambio2}'> ${elemento} </td>`;
    }
  });

  mensaje += "</tr>";
  //!SECTION fin fila ordenado

  mensaje += "</table>";
  mensaje += `
  El array tiene:<br>
  ${auxpar.length}${
    auxpar.length != 1 ? " numeros pares y" : " numero par y"
  }<br>
  ${auximpar.length}${
    auximpar.length != 1 ? " numeros impares" : " numero impar"
  }`;
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
