function calcularJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  var contador = 320;
  do {
    mensaje += `Do: ${contador} <br>`;
    contador -= 20;
  } while (contador >= 160);
  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
