var numeros = [];

function generarArray() {
  const min = 0;
  const max = 100;
  for (contador = 0; contador < 3; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.push(numeroAleatorio);
  }
  var resultadosDiv = document.getElementById("resultadoJavaScript");
  var resultadosDiv2 = document.getElementById("resultadoPHP");
  var resultadosDiv3 = document.getElementById("resultadoPython");
  resultadosDiv.innerHTML = "Números ingresados: " + numeros.join(", ") + "";
  resultadosDiv2.innerHTML = "Números ingresados: " + numeros.join(", ") + "";
  resultadosDiv3.innerHTML = "Números ingresados: " + numeros.join(", ") + "";

  if (numeros.length === 3) {
    ingresarPHP();
    ingresarPY();
    ingresarJS();
  }
}
