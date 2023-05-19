function sumarJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  i = 0;
  while (i <= 100) {
    mensaje += `Multiplos son: ${i} <br>`;
    i = i + 5;
  }

  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
