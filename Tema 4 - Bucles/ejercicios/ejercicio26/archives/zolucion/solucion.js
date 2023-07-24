function calcularJS() {
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
    //verificamos que el digito sea entre 0 y 9
    if (num2 >= 0 && num2 < 10) {
      let volteado = 0;
      let posicion = 0;
      let original = num1;
      num1 = Math.abs(num1);
      let verificar = 0;
      while (num1 > 0) {
        volteado = volteado * 10 + (num1 % 10);
        num1 = parseInt(num1 / 10);
      }
      mensaje += `El digito ${num2} del numero ${original} se encuentra en las posiciones:`;
      while (volteado > 0) {
        if (volteado % 10 == num2) {
          posicion += 1;
          verificar += 1;
          mensaje += `(${posicion}) `;
        } else {
          posicion += 1;
        }
        volteado = parseInt(volteado / 10);
      }
      if (verificar == 0) {
        mensaje = `No se encontro el digito ${num2} en el numero ${original}`;
      }
    } else {
      mensaje = "El digitio debe ser de 0 a 9";
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Solucion: <br> ${mensaje}`;
}
