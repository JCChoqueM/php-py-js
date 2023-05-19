function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);

  if (num1 > 0 && num1 <= 40) {
    salario = num1 * 12;
    mensaje = `Horas trabajadas = ${num1} Hrs.
              <br><br>Salario = ${num1} * 12Bs.
              <br><br>Salario total = ${num1} *12 = ${salario} Bs.`;
  } else if (num1 > 40) {
    hrsExtra = num1 - 40;
    salExtra = hrsExtra * 16;
    mensaje = `Horas trabajadas = ${num1} Hrs.
              <br><br>Horas Extra = ${hrsExtra}
              <br><br>Salario Extra = ${hrsExtra} * 16Bs. = ${salExtra}Bs.
              <br><br>Salario total = 480 + ${salExtra} = ${480 + salExtra} Bs.`;
  } else if (num1 === 0) {
    mensaje = "No trabajo esta semana";
  }
  else {
    mensaje = "Ingrese un numero valido de horas trabajadas";
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
