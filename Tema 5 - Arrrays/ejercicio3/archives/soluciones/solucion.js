function solucionJavaScript() {
  let mensaje = "";
  let numero = [];
  let auxi = [];
  let contador = 0;
  const min = 0;
  const max = 100;
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }
  let longitud = numero.length;
  auxi[0] = numero[longitud - 1];
  for (contador = 0; contador < longitud - 1; contador++) {
    auxi[contador + 1] = numero[contador];
  }
  mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Rotado</th></tr>`;
  for (contador = 0; contador < longitud; contador++) {
    descripcion = numero[contador];
    rotar = auxi[contador];
    mensaje += `<tr><td>${contador}</td><td>${descripcion}</td><td>${rotar}</td></tr>`;
  }

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
