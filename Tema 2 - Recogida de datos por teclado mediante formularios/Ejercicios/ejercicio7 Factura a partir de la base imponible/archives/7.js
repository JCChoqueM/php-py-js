function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);

  var solucion = `Base Imponible es = ${num1} Bs.
<br><br>Iva = ${(num1*0.1).toFixed(2)} Bs.
<br><br>Total a pagar = ${num1+(num1*0.1)} Bs.`;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
