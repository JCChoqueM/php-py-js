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
    let original = num1;
    let factorial = 1;
    if (num1 >= 0) {
      if (num1 == 0) {
        mensaje = "La factorial de 0! es:<br> 1";
      } else {
        do {
          factorial *= num1;
          num1--;
        } while (num1 > 1);
        mensaje = `La factorial de ${original}! es: <br>${factorial}`;
      }
    } else {
      mensaje = `La factorial de un numero solo acepta numeros enteros positivos.`;
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Do-WHILE JS: <br>${mensaje}`;
}
