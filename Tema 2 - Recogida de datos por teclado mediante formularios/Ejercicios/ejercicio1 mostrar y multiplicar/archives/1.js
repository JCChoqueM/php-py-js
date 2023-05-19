function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const resultado = num1 * num2;
  console.log(resultado);
  // Mostrar el resultado en la página
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<br><br>Multiplicacion con JS:<br><br> ${num1} * ${num2} = ${resultado}`;
}
