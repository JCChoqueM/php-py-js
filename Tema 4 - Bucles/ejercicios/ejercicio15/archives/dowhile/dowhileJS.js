function dowhileJS() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  let mensaje = "";

  /* SECTION inicio: verifica si el formulario esta vacio */
  // num1 = num1.replace(/^0+/, "");
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) &&
    Number.isInteger(Number(num1))
  ) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let contador = 0;
    let potencia = 1;
    if (num1 == 0 && num2 == 0) {
      mensaje = `En este caso 0^0 puede tener 2 valores 0 y 1 dependiendo como se lo quiere tratar`;
    } else if (num1 == 0 && num2 < 0) {
      mensaje = `El resultado es indefinido `;
    } else if (num2 == 0) {
      if (num1 != 0) {
        potencia = 1;
        mensaje = `${potencia}`;
      } else {
        mensaje = `Dependiendo de como se trabaje el resultado sera 0 o 1`;
      }
    } else {
      if (num2 > 0) {
        do {
          potencia *= num1;
          contador += 1;
        } while (contador < num2);
      } else if (num2 < 0) {
        do {
          potencia *= num1;
          contador += 1;
        } while (contador < -num2);
        potencia = 1 / potencia;
      }
      mensaje = `${potencia}`;
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Do-WHILE JS: <br>${mensaje} `;
}
