function forJS() {
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
    /* SECTION inicio codigo */
    num1 = parseInt(num1);
    let i = 1;
    let contador = 0;
    if (num1 > 1) {
      for (i; i <= num1; i++) {
        if (num1 % i == 0) {
          contador += 1;
        }
      }
      if (contador <= 2) {
        mensaje = `El numero ${num1}:<br> Es primo`;
      } else {
        mensaje = `El numero ${num1}:<br> NO es primo`;
      }
    } else if (num1 == 1) {
      mensaje = `El numero 1, no es ni primo ni compuesto`;
    } else {
      if (num1 <= 0) {
        mensaje = `El número debe ser mayor que 1`;
      }
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>FOR JS: <br>${mensaje} </p>`;
}
