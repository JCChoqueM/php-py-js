var numeros = [];

function ingresarDato() {
  var inputNumero = document.getElementById("num1");
  var numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    numeros.push(numero);
    inputNumero.value = "";

    var resultadosDiv = document.getElementById("resultadoJavascript");
    resultadosDiv.innerHTML =
      "Números ingresados: " + numeros.join(", ") + "";

    if (numeros.length === 3) {
      calcularSuma();
    }
  }
}

function calcularSuma() {
  var suma = numeros.reduce(function (a, b) {
    return a + b;
  }, 0);

  var resultadosDiv = document.getElementById("resultadoJavascript");
  resultadosDiv.innerHTML += "<br>Suma de los números: " + suma + "";

  numeros = [];
}
