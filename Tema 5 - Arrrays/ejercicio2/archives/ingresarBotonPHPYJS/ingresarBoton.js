function ingresarBotonJS() {
  var suma = numerosJS.reduce(function (a, b) {
    return a + b;
  }, 0);

  var resultadosDiv = document.getElementById("resultadoJavaScript");
  resultadosDiv.innerHTML += "<br>Suma de los números: " + suma + "";

  numerosJS = [];
}
