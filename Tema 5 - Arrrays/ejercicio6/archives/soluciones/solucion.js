function solucionJavaScript() {
  let mensaje = "";
  let numero = [];
  let valor="";
  let contador = 0;
  const min = 0;
  const max = 100;
  for (contador = 0; contador < 6; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numero.push(numeroAleatorio);
  }
   mensaje += `<table border='1' width='110%'><tr><th>Inidice</th><th>Numero</th><th>Color</th></tr>`;
   numero.forEach((elemento, contador) => {
     if (Math.abs(elemento % 2 == 0)) {
       colorCambio = "background-color: yellow; color:black";
       valor = " es par";
     } else {
       colorCambio = "background-color: orange; color:black";
       valor = " es impar";
     }
     mensaje += `<tr><td style='${colorCambio}'>${contador}</td> <td style='${colorCambio}'>${elemento}</td><td style='${colorCambio}'>${
       elemento + valor
     }</td></tr>`;
   });

  mensaje += "</table>";
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = `${mensaje}`;
}
