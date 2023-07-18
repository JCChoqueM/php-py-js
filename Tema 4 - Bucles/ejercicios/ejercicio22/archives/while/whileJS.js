function whileJS() {
  let n;
  let mensaje = "";
  let i = 1;
  let contador = 0;
  for (n = 2; n <= 100; n++) {
    while (i <= n) {
      if (n % i == 0) {
        contador += 1;
      }
      i++;
    }
    if (contador <= 2) {
      mensaje += `(${n})  `;
    }
    i = 1;
    contador = 0;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>WHILE JS: <br>${mensaje} </p>`;
}
