var numerosAuto = [];
function generarArray() {
  const min = 0;
  const max = 15;

  for (contador = 0; contador < 11; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAuto.push(numeroAleatorio);
  }
  var resultadosDiv = document.getElementById("autoAleatorio");

  resultadosDiv.innerHTML =
    "Números ingresados Automáticamente: <br>" + numerosAuto.join(", ") + "";
}


document.addEventListener("DOMContentLoaded", function () {
  generarArray(), buscar(), reemplazar();
  console.log(numerosAuto);
});

function limpiaryReemplazar() {
  let cleanPHP = document.getElementById("resultadoPHP");
  let cleanPython = document.getElementById("resultadoPython");
  let cleanresultadoJavaScript = document.getElementById("resultadoJavaScript");

  cleanPHP.innerHTML = "";
  cleanPython.innerHTML = "";
  cleanresultadoJavaScript.innerHTML = "";
  numerosAuto = [];
  generarArray(); 
  console.log(numerosAuto);
}
