function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  let area = (num1 * num2)/2;

  var solucion = `Area = (Base * Altura)/2
			<br><br>Base = ${num1}
		  <br><br>Altura =${num2} 
			<br><br>Area = (${num1} * ${num2})/2
			<br><br>Area = ${area.toFixed(2)} `;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
