function automaticoJS() {
  let mensaje = "";

  console.log(num1);
    if (num1 == num2) {
      colorCambio = "background-color: orange; color:black";
    } else {
      colorCambio = "background-color: yellow; color:black";
    }
    let buscar = numerosAuto.includes(num1);
    if (buscar) {
      if (num1 != num2) {
        mensaje = `<span style='${colorCambio}'>Se a reemplazado ${num1}  por ${num2}</span>`;
      } else if (num1 == num2) {
        mensaje = `<span style='${colorCambio}'>No se a realizado cambios:</span>`;
      }
    }
    mensaje += `<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Cambio</th></tr>`;

    
    if (buscar) {
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
        mensaje += `<tr><td>${contador}</td><td style='background-color: pink; color:black'>${descripcion}</td></tr>`;
      });
    }
 
  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
