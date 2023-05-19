function sumarJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  var contador = 320;
  while (contador >= 160) {
    mensaje += `Los numeros son ${contador} <br>`;
    contador -= 20;
  }
  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
