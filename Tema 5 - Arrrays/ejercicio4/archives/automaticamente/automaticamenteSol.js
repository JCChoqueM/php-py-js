function automaticoJS() {
  let mensaje = "";
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  console.log(num1);
  if (!isNaN(num1) && !isNaN(num2)) {
    colorCambio = "background-color: yellow; color:black";
    mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Cambio</th></tr>`;
    if (numerosAuto.includes(num1)) {
      numerosAuto.forEach((elemento, contador) => {
        let descripcion = elemento;
        if (elemento == num1) {
          elemento = num2;
          mensaje += `<tr><td style='${colorCambio}'>${contador}</td> <td style='${colorCambio}'>${descripcion}</td><td style='${colorCambio}'>${elemento}</td></tr>`;
        } else {
          mensaje += `<tr><td>${contador}</td><td>${descripcion}</td><td>${elemento}</td></tr>`;
        }
      });
    } else {
      mensaje = `No se encontro el numero ${num1} en los números:`;
      mensaje += "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>";
      numerosAuto.forEach((elemento, contador) => {
        descripcion = elemento;
        mensaje += `<tr><td>${contador}</td><td>${descripcion}</td></tr>`;
      });
    }
  } else {
    mensaje = `Debe ingresar datos en ambos formularios`;
  }
  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
voltear = numerosAuto.slice();
aux = voltear.pop();
voltear.unshift(aux);
numerosAuto.forEach((elemento, contador) => {
  let descripcion = elemento;
  rotar = voltear[contador];
  mensaje += `<tr><td>${contador}</td><td>${descripcion}</td><td>${rotar}</td></tr>`;
});
