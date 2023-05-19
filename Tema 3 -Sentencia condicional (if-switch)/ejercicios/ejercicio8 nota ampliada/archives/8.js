function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  if (Number.isFinite(num1) && Number.isFinite(num2) && Number.isFinite(num3)) {
    if (
      num1 >= 0 &&
      num1 <= 100 &&
      num2 >= 0 &&
      num2 <= 100 &&
      num3 >= 0 &&
      num3 <= 100
    ) {
      promedio = ((num1 + num2 + num3) / 3).toFixed(2);
      if (promedio < 51) {
        mensaje = `Su nota es : ${promedio}<br>Nota: Insuficiente`;
      } else if (promedio >= 51 && promedio <= 59) {
        mensaje = `Su nota es : ${promedio}<br>Nota: Suficiente`;
      } else if (promedio >= 60 && promedio <= 74) {
        mensaje = `Su nota es : ${promedio}<br>Nota: Bien`;
      } else if (promedio >= 75 && promedio <= 90) {
        mensaje = `Su nota es : ${promedio}<br>Nota: Notable`;
      } else if (promedio > 90) {
        mensaje = `Su nota es : ${promedio}<br>Nota: Sobresaliente`;
      }
    } else {
      mensaje = " Uno varios datos no son validos";
    }
  } else {
    mensaje = `Ingrese un número válido `;
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
