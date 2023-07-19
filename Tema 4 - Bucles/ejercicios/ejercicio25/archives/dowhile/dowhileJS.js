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
    /* SECTION inicio codigo */
    num1 = parseInt(num1);
    var original = num1;
    num1 = Math.abs(num1);
    let signo;
    let digito;
    if (original < 0) {
      signo = true;
    } else {
      signo = false;
    }
    if (num1 != 0) {
      mensaje += `El numero volteado de <br>${original} es:<br>`;
      do {
        digito = num1 % 10;
        num1 = parseInt(num1 / 10);
        if (signo) {
          mensaje += `- `;
          signo = false;
        }
        mensaje += `${digito} `;
      } while (num1 > 0);
    } else {
      mensaje = `0`;
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Do-WHILE JS: <br>${mensaje}`;
}
