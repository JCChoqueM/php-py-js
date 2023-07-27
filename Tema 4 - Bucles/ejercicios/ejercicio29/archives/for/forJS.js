function forJS() {
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
    /* SECTION inicio:codigo */
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let contador = 1;
    if (num1 >= 0) {
      mensaje += `Los numeros enteros positivos menores que ${num1} que no son divisibles entre ${num2} son : <br>`;
      for (; contador < num1; contador++) {
        if (contador % num2 != 0) {
          mensaje += `(${contador})`;
        }
      }
    } else {
      mensaje = "El número debe ser mayor o igual que 0";
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `FOR JS: <br>${mensaje} `;
}
