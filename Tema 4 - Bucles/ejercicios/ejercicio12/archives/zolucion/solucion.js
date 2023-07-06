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
    if (num1 > 0) {
      contador = 0;
      suma = 0;
      anterior = 1;
      nuevo = 0;
      do {
        mensaje += `${suma}, `;
        suma = anterior + nuevo;
        anterior = nuevo;
        nuevo = suma;
        contador++;
      } while (contador < num1);
    } else {
      mensaje = "El número debe ser mayor a 0  ";
    }
    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /* !SECTION fin: verifica si el formulario esta vacio */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  const resultado = mensaje.slice(0, -2) + ".";
  resultadoDiv.innerHTML = `Solucion: <br> ` + resultado;
}
