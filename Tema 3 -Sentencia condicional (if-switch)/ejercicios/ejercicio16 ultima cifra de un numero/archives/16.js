function sumarJS() {
  const a = parseInt(document.getElementById("num1").value);
  if (Number.isFinite(a)) {
    /* SECTION inicio codigo tras verificacion de formulario */
    let ultimo;
    if (a < 0) {
      ultimo = Math.abs(a) % 10;
    } else {
      ultimo = a % 10;
    }
    mensaje = `El ultimo digito  de ${a}:
                <br> es ${ultimo}`;
    /* !SECTION fin codigo tras verificacion de formulario */
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
