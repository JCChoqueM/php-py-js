function sumarJS() {
  const num1 =parseInt(document.getElementById("num1").value);
  let solucion;
  if (num1 >= 0 && num1 < 24) {
    if (num1 >= 6 && num1 <= 12) {
      solucion = "Buenos Días";
    } else if (num1 >= 13 && num1 <= 20) {
      solucion = "Buenas Tardes";
    } else if (num1 >= 21 || num1 <= 5) {
      solucion = "Buenas Noches";
    }
  } else {
    solucion = "Hora no valida";
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion}`;
}
