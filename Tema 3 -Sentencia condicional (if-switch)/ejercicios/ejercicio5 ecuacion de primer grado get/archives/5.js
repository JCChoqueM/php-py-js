function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    // Manejar el caso en que num1 o num2 no son números válidos
    mensaje = "Uno o ambos valores no son numéricos.";
  } else if (num1 != 0) {
    mensaje = `el valor de x es = ${(-num2 / num1).toFixed(2)}`;
  } else {
    mensaje = "a debe ser distinto de 0";
  }


  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${(mensaje)}`;
}

