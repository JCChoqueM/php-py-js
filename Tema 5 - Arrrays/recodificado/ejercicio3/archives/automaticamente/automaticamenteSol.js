function automaticoJS() {
  let mensaje = "";
  let maximo = Math.max(...numerosAuto);
  let minimo = Math.min(...numerosAuto);
  mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th></tr>`;

  numerosAuto.forEach((elemento, contador) => {
    let descripcion = elemento;
    if (elemento == minimo && elemento == maximo) {
      descripcion = `${elemento} es maximo y minimo`;
    } else if (elemento == minimo) {
      descripcion = `${elemento} minimo`;
    } else if (elemento == maximo) {
      descripcion = `${elemento} maximo`;
    }
    mensaje += `<tr><td>${contador}</td><td>${descripcion}</td></tr>`;
  });

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML += `${mensaje}`;
}
