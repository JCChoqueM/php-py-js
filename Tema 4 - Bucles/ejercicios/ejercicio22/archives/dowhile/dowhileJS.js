function dowhileJS() {
  let n;
  let mensaje = "";
  let i = 1;
  let contador = 0;
  for (n = 2; n <= 100; n++) {
    do {
      if (n % i == 0) {
        contador += 1;
      }
      i++;
    } while (i <= n);
    if (contador <= 2) {
      mensaje += `(${n})  `;
    }
    i = 1;
    contador = 0;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<p>Do-WHILE JS: <br>${mensaje} </p>`;
}
