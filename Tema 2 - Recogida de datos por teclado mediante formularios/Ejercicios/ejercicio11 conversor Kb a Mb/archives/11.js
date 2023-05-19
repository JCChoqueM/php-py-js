function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const Mb = num1/1024;
  var solucion = `Kb = ${num1}
            <br><br>Mb= ${num1} / 1024
            <br><br>${num1} kb = ${Mb} Mb`;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
