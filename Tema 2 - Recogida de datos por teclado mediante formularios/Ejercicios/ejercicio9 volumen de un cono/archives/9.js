function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  let area = (Math.PI*Math.pow(num1,2)*num2)/3;

  var solucion = `Vol = (&#928*radio^2*altura)/3
			<br><br>radio = ${num1}
		  <br><br>altura =${num2} 
			<br><br>Vol = ${area.toFixed(2)} cm³ `;

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion} `;
}
