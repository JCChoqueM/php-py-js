function solucionJavaScript() {
  let mensaje = "";
  let numero = [];
  let contador = 0;
  const min = 0;
  const max = 100;
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }
  let maximo = numero[0];
  let minimo = numero[0];
  numero.forEach((elemento) => {
    if (elemento > maximo) {
      maximo = elemento;
    }
    if (elemento < minimo) {
      minimo = elemento;
    }
  });

  mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th></tr>`;
  numero.forEach((elemento, contador) => {
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
  resultadoDiv.innerHTML = `${mensaje}`;
}
