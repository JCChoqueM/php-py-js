function sumarJS() {
  var num1 = document.getElementById("num1").value;
  /* SECTION inicio: verifica si el formulario esta vacio */
  num1 = num1.replace(/^0+/, "");
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) &&
    Number.isInteger(Number(num1))
  ) {
    /* SECTION inicio: codigo */
    a = Math.abs(num1);
    let dig;
    if (a >= 0 && a <= 99999) {
      if (a >= 0 && a <= 9) {
        dig = 1;
      } else if (a >= 10 && a <= 99) {
        dig = 2;
      } else if (a >= 100 && a <= 999) {
        dig = 3;
      } else if (a >= 1000 && a <= 9999) {
        dig = 4;
      } else if (a >= 10000 && a <= 99999) {
        dig = 5;
      }
      mensaje = `El numero ${num1} tiene: 
      <br> ${dig} ${dig == 1 ? "digito" : "digitos"}`;
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
