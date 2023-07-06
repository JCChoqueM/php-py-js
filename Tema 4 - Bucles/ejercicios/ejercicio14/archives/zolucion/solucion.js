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
    num1 = parseInt(num1);
    let cuadrado = 0;
    let cubo = 0;
    let contador = 0;
    while (contador < 5) {
      cuadrado = Math.pow(num1, 2);
      cubo = Math.pow(num1, 3);
      mensaje += `Nº${num1}. Cuadrado= ${cuadrado}. <br>Cubo= ${cubo}<br><br>`;
      console.log(typeof mensaje);
      contador += 1;
      num1 += 1;
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Solucion: <br> ${mensaje} `;
}
