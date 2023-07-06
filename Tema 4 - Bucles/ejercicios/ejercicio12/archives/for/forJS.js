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
    /* SECTION inicio: codigo */
    num1 = parseInt(num1);
    if (num1 > 0) {
      suma = 0;
      anterior = 1;
      nuevo = 0;
      for (contador = 0; contador < num1; contador++) {
        mensaje += `${suma}, `;
        suma = anterior + nuevo;
        anterior = nuevo;
        nuevo = suma;
      }
    } else {
      mensaje = "El número debe ser mayor que 0  ";
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  const resultado = mensaje.slice(0, -2) + ".";
  resultadoDiv.innerHTML = "FOR JS <br>" + resultado;
}
