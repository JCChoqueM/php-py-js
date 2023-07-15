function calcularJS() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  let mensaje = "";

  /* SECTION inicio: verifica si el formulario esta vacio */
  // num1 = num1.replace(/^0+/, "");
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) /* &&
    Number.isInteger(Number(num1)) */
  ) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let mayor;
    let menor;
    if (num1 != num2) {
      if (num1 > num2) {
        mayor = num1;
        menor = num2;
      } else {
        mayor = num2;
        menor = num1;
      }
      do {
        mensaje += `(${menor})  `;
        menor = menor + 7;
      } while (menor <= mayor);
    } else {
      mensaje = `Debe introducir 2 numeros diferentes`;
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>Solucion: <br> ${mensaje} </p>`;
}
