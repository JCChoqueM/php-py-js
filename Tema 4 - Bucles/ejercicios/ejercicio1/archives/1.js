function sumarJS() {
  /* SECTION inicio: codigo */
  let mensaje = "";
  for (i = 0; i <= 100; i=i+5) {
      mensaje += `Los múltiplos de 5 son: ${i}<br>`; 
  }

  /* !SECTION fin: codigo*/
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje} `;
}
