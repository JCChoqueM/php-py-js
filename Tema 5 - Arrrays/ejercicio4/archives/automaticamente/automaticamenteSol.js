function automaticoJS() {
  let mensaje = "";
  mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Rotado</th></tr>`;
  voltear = numerosAuto.slice();
  aux = voltear.pop();
  voltear.unshift(aux);
  numerosAuto.forEach((elemento, contador) => {
    let descripcion = elemento;
    rotar = voltear[contador];
    mensaje += `<tr><td>${contador}</td><td>${descripcion}</td><td>${rotar}</td></tr>`;
  });

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
