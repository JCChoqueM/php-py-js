function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  if (isNaN(num1)) {
    mensaje = "Ingrese un número válido";
  }
  else if (num1 > 0) {
    mensaje = `El tiempo de caida es ${(Math.sqrt((2 * num1) / 9.81)).toFixed(2)} m/s²`;
  } else if (num1 === 0) {
    mensaje = "El tiempo de caida es 0";
  } else if (num1 < 0) {
    mensaje = "La altura no puede ser negativa";
  } else {
    mensaje = "ingrese un valor";
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${(mensaje)}`;
}

