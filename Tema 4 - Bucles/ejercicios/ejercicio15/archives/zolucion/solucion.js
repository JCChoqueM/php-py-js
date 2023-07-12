function calcularJS() {
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
    let contador = 1;
    let potencia = 1;
    if (num2 >= 0) {
      while (contador <= num2) {
        potencia *= num1;
        mensaje += `${num1}<sup>${contador}</sup> = ${potencia}<br>`;
        contador += 1;
      }
    } else {
      mensaje = "El exponente debe ser positivo";
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>Solucion: <br>${mensaje} </p>`;
}
