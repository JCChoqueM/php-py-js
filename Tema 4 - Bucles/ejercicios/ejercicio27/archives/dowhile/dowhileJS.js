function dowhileJS() {
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
    num1 = parseInt(num1);
    let contador = 1;
    let contadormul = 0;
    let suma = 0;
    if (num1 >= 1) {
      mensaje += `En el rango de 1 a ${num1}.<br>`;
      mensaje += `Los multiplos de 3 son:<br> `;
      do {
        if (contador % 3 == 0) {
          mensaje += `(${contador})`;
          contadormul++;
          suma += contador;
        }
        contador++;
      } while (contador <= num1);
      if (contadormul == 0) {
        mensaje += ` no hay multiplos<br> La cantidad de multiplos es (0)`;
      } else {
        mensaje += `<br> la cantidad de multiplos es:<br> (${contadormul})`;
      }
      mensaje += `<br>la suma de los multiplos es:<br> (${suma})`;
    } else {
      mensaje = `El numero debe ser mayor o igual a 1`;
    }

    /* !SECTION fin: codigo*/
  } else {
    mensaje = `El formulario esta vacio o no es un Entero`;
    /*  !SECTION fin: verifica si el formulario esta vacio  */
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `Do-WHILE JS: <br>${mensaje}`;
}
