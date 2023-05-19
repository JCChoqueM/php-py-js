function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const Kb = num1*1024;
  var solucion = `Mb = ${num1} 
                    <br><br>Kb= ${num1} * 1024
                    <br><br>${num1} Mb = ${Kb} Kb`;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
