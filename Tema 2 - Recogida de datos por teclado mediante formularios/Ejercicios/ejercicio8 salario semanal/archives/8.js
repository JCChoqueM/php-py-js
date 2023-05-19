function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);

  var solucion = `Horas trabajadas = ${num1} Hrs.
  <br><br>Salario = ${num1} * 12Bs.
<br><br>Salario total = ${num1*12} Bs.`;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
