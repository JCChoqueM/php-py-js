function automaticoJS() {
  let mensaje = "";
  let cuadrado = [];
  let cubo = [];
  let contador = 0;

  numerosAuto.forEach((elemento) => {
    cuadrado.push(Math.pow(elemento, 2));
    cubo.push(Math.pow(elemento, 3));
  });

  mensaje += `<table border='1'><tr><th>Nº</th><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>`;
  for (contador = 0; contador < 7; contador++) {
    mensaje += `<tr>
  <td> ${contador + 1} </td>
  <td>${numerosAuto[contador]}</td>
  <td>${cuadrado[contador]}</td>
  <td>${cubo[contador]}</td>
  </tr>`;
  }
  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML += `<br>${mensaje}`;
}
