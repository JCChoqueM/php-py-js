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
    /* SECTION inicio codigo */
    num1 = parseInt(num1);
    let suma = 0;
    let contador = 0;
    let i = num1 + 1;
    if (num1 >= 0) {
      while (contador < 100) {
        suma = suma + i;
        i += 1;
        contador++;
      }
      mensaje =
        `La suma de los 100 numeros siguientes a ${num1} es:<br>` + suma;
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Solucion: <br>${mensaje}`;
}
