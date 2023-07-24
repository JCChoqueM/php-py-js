function forJS() {
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
    /* SECTION inicio:codigo */
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(num2>=0&&num2<10){
      mensaje = "El presente ejericicio no tiene una solucion con el ciclo for";
    }else{
      mensaje="El digito a buscar debe estar comprendido entre 0 y 9"
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>FOR JS: <br>${mensaje} </p>`;
}
