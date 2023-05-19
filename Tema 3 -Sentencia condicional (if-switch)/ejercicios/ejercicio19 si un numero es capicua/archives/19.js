function sumarJS() {
  var num1 = document.getElementById("num1").value;
  /* SECTION inicio: verifica si el formulario esta vacio */
  // num1 = num1.replace(/^0+/, "");
  if (
    num1 !== undefined &&
    num1.trim() !== "" &&
    Number.isFinite(Number(num1)) &&
    Number.isInteger(Number(num1))
  ) {
    /* SECTION inicio: codigo */
    if (num1 >= 0 && num1 <= 99999) {
      if (num1 >= 0 && num1 <= 9) {
        capicua = true;
      } else if (num1 >= 10 && num1 <= 99) {
        capicua = Math.trunc(num1 / 10) == num1 % 10;
      } else if (num1 >= 100 && num1 <= 999) {
        capicua = Math.trunc(num1 / 100) == num1 % 10;
      } else if (num1 >= 1000 && num1 <= 9999) {
        capicua =
          Math.trunc(num1 / 1000) == num1 % 10 &&
          Math.trunc(num1 / 100) % 10 == Math.trunc(num1 / 10) % 10;
      } else if (num1 >= 10000 && num1 <= 99999) {
        capicua =
          Math.trunc(num1 / 10000) == num1 % 10 &&
          Math.trunc(num1 / 1000) % 10 == Math.trunc(num1 / 10) % 10;
      }

      //^ inicio mensaje si es capicua
      /*   if (capicua) {
        mensaje = `El numero ${num1} es Capicua`;
      } else {
        mensaje = `El numero ${num1} NO es capicua`;
      } */
      mensaje = capicua
        ? `El numero ${num1} es Capicua`
        : `El numero ${num1} NO es capicua`;
      //^ fin mensaje si es capicua
    } else {
      mensaje = `El numero debe ser entero y positivo`;
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
