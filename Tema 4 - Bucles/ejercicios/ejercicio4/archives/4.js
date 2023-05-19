function sumarJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  for (let i = 320; i >= 160; i = i - 20) {
    mensaje += `soy el numero ${i} <br>`;
  }
  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
