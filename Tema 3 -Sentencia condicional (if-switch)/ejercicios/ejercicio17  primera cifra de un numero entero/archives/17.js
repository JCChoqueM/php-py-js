function sumarJS() {
  const num1 = document.getElementById("num1").value;
  /* SECTION inicio: verifica si el formulario esta vacio */
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) &&
    Number.isInteger(Number(num1))
  ) {
    /* SECTION inicio: codigo */
    a = Math.abs(num1);
    if (a >= 0 && a <= 99999) {
      if (a >= 0 && a <= 9) {
        mensaje = `Primer digito de ${num1} es :<br> ${a}`;
      } else if (a >= 10 && a <= 99) {
        mensaje = `Primer digito de ${num1} es :<br> ${Math.trunc(a / 10)}`;
      } else if (a >= 100 && a <= 999) {
        mensaje = `Primer digito de ${num1} es :<br> ${Math.trunc(a / 100)}`;
      } else if (a >= 1000 && a <= 9999) {
        mensaje = `Primer digito de ${num1} es :<br> ${Math.trunc(a / 1000)}`;
      } else if (a >= 10000 && a <= 99999) {
        mensaje = `Primer digito de ${num1} es :<br> ${Math.trunc(a / 10000)}`;
      }
    } else {
      mensaje = `Solo se aceptan numeros Enteros de hasta 5 cifras`;
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
