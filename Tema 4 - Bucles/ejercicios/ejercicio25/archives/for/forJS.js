function forJS() {
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
    mensaje = "El ejercicio no tiene una solucion for";
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>FOR JS: <br>${mensaje} </p>`;
}
