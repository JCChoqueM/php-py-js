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
  contador = 0;
  numero.forEach((elemento) => {
    if (maximo == minimo) {
      mensaje += `<tr> <td> ${contador} </td><td>${elemento} es maximo y minimo</td> </tr>`;
    } else if (elemento == minimo) {
      mensaje += `<tr> <td> ${contador} </td><td>${elemento} minimo</td> </tr>`;
    } else if (elemento == maximo) {
      mensaje += `<tr> <td> ${contador} </td><td>${elemento} maximo</td> </tr>`;
    } else {
      mensaje += `<tr> <td> ${contador} </td><td>${elemento}</td> </tr>`;
    }
    contador += 1;
  });

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
