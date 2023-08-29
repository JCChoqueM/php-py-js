function calcularJS() {
  let mensaje = "";
  let numero = [];
  let cuadrado = [];
  let cubo = [];
  let contador = 0;
  const min = 0;
  const max = 100;
  for (contador = 0; contador < 20; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }
  numero.forEach((elemento) => {
    cuadrado.push (Math.pow(elemento, 2)) ;
    cubo.push(Math.pow(elemento, 3));
  });

  mensaje += `<table border='1'><tr><th>Nº</th><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>`;
  for (contador = 0; contador < 20; contador++) {
    mensaje += `<tr>
  <td> ${contador+1} </td>
  <td>${numero[contador]}</td>
  <td>${cuadrado[contador]}</td>
  <td>${cubo[contador]}</td>
  </tr>`;
  }
  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<br>${mensaje}`;
}
