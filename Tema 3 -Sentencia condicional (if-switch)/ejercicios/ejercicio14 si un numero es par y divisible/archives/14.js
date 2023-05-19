function sumarJS() {
  const a = parseInt(document.getElementById("num1").value);
  if (Number.isFinite(a)) {
    /* SECTION inicio codigo tras verificacion de formulario */
    mensaje = `El numero ${a}: 
    <br>${a % 2 == 0 ? "Es par" : "No es par"}
    <br>${a % 5 == 0 ? "y es divisible entre 5" : "y no es divisible entre 5"}`;
    /* !SECTION fin codigo tras verificacion de formulario */
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
