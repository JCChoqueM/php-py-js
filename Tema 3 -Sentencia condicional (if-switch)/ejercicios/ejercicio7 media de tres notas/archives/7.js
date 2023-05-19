function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);
  if (Number.isFinite(num1) && Number.isFinite(num2) && Number.isFinite(num3)) {
    if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
      promedio = `El promedio de las tres notas es: ${((num1 + num2 + num3) / 3).toFixed(2)}`;
    } else {
      promedio = " Uno varios datos no son validos";
    }

  } else {
    promedio = `Ingrese un número válido `;
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${(promedio)}`;
}

