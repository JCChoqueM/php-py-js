function calcularJS() {
  var num1 = document.getElementById("num1").value;
  let mensaje = "";
  /* SECTION inicio: verifica si el formulario esta vacio */
  // num1 = num1.replace(/^0+/, "");
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) &&
    Number.isInteger(Number(num1))
  ) {
    /* SECTION inicio: codigo */
    let nuevoNumero = num1;
    let contador = 0;
    if (num1 < 0) {
      num1 = Math.abs(num1);
    }
    while (num1 > 0) {
      num1 = Math.trunc(num1 / 10);
      contador += 1;
    }
    if (contador == 0) {
      mensaje = `El numero ${nuevoNumero} tiene 1 Digito`;
    } else if (contador >= 2) {
      mensaje = ` EL numero ${nuevoNumero} tiene ${contador} Digitos`;
    } else {
      mensaje = `El numero ${nuevoNumero} tiene 1 Digito`;
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Solucion: <br> ${mensaje} `;
}
