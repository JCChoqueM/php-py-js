function forJS() {
  let n;
  let mensaje = "";
  let contador = 0;
  for (n = 2; n <= 100; n++) {
    for (let i = 1; i <= n; i += 1) {
      if (n % i == 0) {
        contador += 1;
      }
    }
    if (contador <= 2) {
      mensaje += `(${n})  `;
    }
    i = 1;
    contador = 0;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `FOR JS: <br>${mensaje} `;
}
