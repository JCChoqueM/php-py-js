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
    num1 = parseFloat(num1);
    num2 = parseInt(num2);
    let contador;
    let potencia = 1;
    if (num1 == 0 && num2 == 0) {
      mensaje = "0<sup>0</sup>=0 y 0<sup>0</sup>=1 ";
    } else if (num2 == 0) {
      mensaje = num1 + "<sup>0</sup>=1";
    } else {
      if (num2 > 0) {
        for (contador = 1; contador <= num2; contador++) {
          potencia *= num1;
          mensaje += `${num1}<sup>${contador}</sup> = ${potencia}<br>`;
        }
      } else {
        mensaje = "El exponente debe ser positivo";
      }
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>FOR JS: <br>${mensaje} </p>`;
}
