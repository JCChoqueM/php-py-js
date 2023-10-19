async function ingresarJS() {
  let mensaje = "";
  let repetir = "";
  let imagen = "";
  mensaje += `<table border='1'><tr><th>Inidice</th><th>Mes</th><th>Temperatura</th></tr>`;
  numeros.forEach((elemento, contador) => {
    let descripcion = elemento;
    let mes = nombres[contador];
    repetir = "";
    if (elemento != 0) {
      if (elemento > 0) {
        imagen = '<img src="././images/sol.png">';
      } else {
        imagen = '<img src="././images/frio.png">';
      }
    }
    for (let i = 0; i < Math.abs(elemento); i++) {
      repetir += imagen;
    }
    mensaje += `<tr><td>${contador}</td><td>${mes}</td><td>${repetir}<br>${elemento}ºC</td></tr>`;
  });

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
