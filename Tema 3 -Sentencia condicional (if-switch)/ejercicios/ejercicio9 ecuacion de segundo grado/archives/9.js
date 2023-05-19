function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  if (Number.isFinite(num1) && Number.isFinite(num2) && Number.isFinite(num3)) {
    if (num1 != 0) {
      d = num2 ** 2 - 4 * num1 * num3;
      if (d > 0) {
        solucion = (-num2 + Math.sqrt(d)) / (2 * num1);
        solucion2 = (-num2 - Math.sqrt(d)) / (2 * num1);
        mensaje = `Discriminante = ${d}<br>${d} es mayor que 0 <br><br>Existen 2 soluciones<br>x1=${solucion.toFixed(
          2
        )}<br>x2=${solucion2.toFixed(2)}`;
      } else if (d == 0) {
        solucion = -num2 / (2 * num1);
        mensaje = `Discriminante = ${d}<br>${d} es igual que 0 <br><br>Existen 1 solucion<br>x=${solucion.toFixed(
          2
        )}`;
      } else if (d < 0) {
        mensaje = `Discriminante = ${d}<br>${d} es menor que 0 <br><br>Las soluciones son complejas y no se pueden calcular`;
      }
    } else {
      mensaje = "a debe ser distinto de 0";
    }
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
