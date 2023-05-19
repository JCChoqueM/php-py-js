function sumarJS() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const c = parseFloat(document.getElementById("num3").value);
  if (Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c)) {
    /* SECTION inicio codigo tras verificacion de formulario */
    let mayor;
    let medio;
    let menor;
    if (a >= b && a >= c) {
      mayor = a;
      menor = b < c ? b : c;
    } else if (b >= a && b >= c) {
      mayor = b;
      menor = a < c ? a : c;
    } else if (c >= a && c >= b) {
      mayor = c;
      menor = a < b ? a : b;
    }
    medio = a + b + c - mayor - menor;
    mensaje = `<br>Menor a mayor es:<br>${menor}, ${medio}, ${mayor}
        <br><br>Mayor a menor es:<br>${mayor}, ${medio}, ${menor}`
    /* !SECTION fin codigo tras verificacion de formulario */
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}

