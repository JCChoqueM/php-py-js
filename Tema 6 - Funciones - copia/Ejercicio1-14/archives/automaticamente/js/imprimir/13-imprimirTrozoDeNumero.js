function imprimirTrozoDeNumero(valor, valor2, valor3) {
  let centrar = "style='text-align: center;'";

  let mensajeError = "";
  
  valor = parseInt(valor);
  valor2 = parseInt(valor2);
  valor3 = parseInt(valor3);
  const estado =
    (isNaN(valor) ? "0" : "1") +
    (isNaN(valor2) ? "0" : "1") +
    (isNaN(valor3) ? "0" : "1");
  let digitosTotales = digitos(valor) - 1;
  let estado2 =
    (valor2 < 0 ? "N" : valor2 > digitosTotales ? "F" : "I") +
    (valor3 < 0 ? "N" : valor3 > digitosTotales ? "F" : "I");

  switch (estado) {
    case "000":
      mensajeError = "Por favor, ingrese números en todos los campos.";
      break;
    case "100":
      mensajeError = "Llene los campos 2 y 3.";
      break;
    case "010":
      mensajeError = "Llene los campos 1 y 3.";
      break;
    case "001":
      mensajeError = "Llene los campos 1 y 2.";
      break;
    case "011":
      mensajeError = "Llene el campo 1.";
      break;
    case "101":
      mensajeError = "Llene el campo 2.";
      break;
    case "110":
      mensajeError = "Llene el campo 3.";
      break;
    case "111":
      mensajeError += `<span ${centrar}>`;
      mensajeError += crearTablaTrozo(Math.abs(valor), 0);
      switch (estado2) {
        case "NN":
          mensajeError += `Inicial (${valor2}) y Final (${valor3}) no pueden ser negativos`;
          break;
        case "NI":
          mensajeError += `Inicial (${valor2}) no puede ser negativo`;
          break;
        case "IN":
          mensajeError += `Final (${valor3}) no puede ser negativo`;
          break;
        case "FI":
          mensajeError += `Inicial (${valor2}) no puede ser mayor que (${digitosTotales})`;
          break;
        case "IF":
          mensajeError += `Final (${valor3}) no puede ser mayor que (${digitosTotales})`;
          break;
        case "FF":
          mensajeError += `Inicial (${valor2}) y Final (${valor3}) no puede ser mayor que (${digitosTotales})`;
          break;
        case "FN":
          mensajeError += `Inicial (${valor2}) no puede ser mayor que (${digitosTotales}) y Final (${valor3}) no puede ser negativo.`;
          break;
        case "NF":
          mensajeError += `Inicial (${valor2}) no puede ser negativo y Final (${valor3}) no puede ser mayor que (${digitosTotales}).`;
          break;
        case "II":
          if (valor2 >= 0 && valor2 <= digitosTotales) {
            if (valor3 >= valor2 && valor3 <= digitosTotales) {
              mensajeError = `<span ${centrar}>`;
              mensajeError += crearTablaTrozo(
                Math.abs(valor),
                0,
                valor2,
                valor3
              );
              mensajeError += trozoDeNumero(valor, valor2, valor3);
              mensajeError += "</span>";
            } else {
              mensajeError += `Inicial (${valor2}) no puede ser mayor que Final (${valor3})`;
            }
          } else {
            mensajeError += `Inicial (${valor2}) no está en el rango permitido.`;
          }
          break;
        default:
          mensajeError = "Revisame algo pasó.";
      }
      mensajeError += "</span>";
      break;
  }

  return mensajeError;
}
