function sumarJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  i = 0;
  do {
    mensaje += `Soy: ${i} <br>`;
    i += 5;
  } while (i <= 100);

  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
