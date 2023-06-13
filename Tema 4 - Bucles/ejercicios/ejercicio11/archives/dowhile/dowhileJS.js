function dowhileJS() {
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
    if (num1 < 0) {
      num1 = Math.abs(num1);
    }
    let contador = 0;
    do {
      num1 = Math.floor(num1 / 10);
      contador += 1;
    } while (num1 > 0);
    mensaje = `El numero ${nuevoNumero} tiene ${contador} ${
      contador >= 2 ? "Digitos" : "Digito"
    }`;
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Do-WHILE JS <br>${mensaje} `;
}
