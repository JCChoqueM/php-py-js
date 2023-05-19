function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  let suma = num1 + num2;
  let resta = num1 - num2;
  let multiplicacion = num1 * num2;
  let division = num1 / num2;

  var solucion = `Suma: <br>${num1} + ${num2} = ${suma}
                  <br><br>Resta:<br> ${num1} - ${num2} = ${resta}
                  <br><br>Multiplicacion: <br>${num1} * ${num2} = ${multiplicacion}
                  <br><br>Division: <br>${num1} / ${num2} = ${division.toFixed(
    2
  )} `;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion}`;
}
