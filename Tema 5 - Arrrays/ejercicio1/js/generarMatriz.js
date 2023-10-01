var numerosAuto = [];

function generarArray() {
  const min = 0;
  const max = 100;

  for (contador = 0; contador < 7; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAuto.push(numeroAleatorio);
  }
  var resultadosDiv = document.getElementById("resultadoJavaScript");
  var resultadosDiv2 = document.getElementById("resultadoPHP");
  var resultadosDiv3 = document.getElementById("resultadoPython");
  resultadosDiv.innerHTML = "";
  resultadosDiv2.innerHTML = "";
  resultadosDiv3.innerHTML = "";
}
