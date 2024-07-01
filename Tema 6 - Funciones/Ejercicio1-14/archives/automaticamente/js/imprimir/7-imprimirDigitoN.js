function imprimirDigitoN(input1, input2) {
  let centrar = "style='text-align: center;'";
  let rojo = "style='color: red;'";
  let verde = "style='color: darkgreen;'";
  let azul = "style='color: blue;'";
  let negro = "style='color: black;'";
  let mensajeError = "";
  input1 = parseInt(input1);
  input2 = parseInt(input2);
  let estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

  switch (estado) {
    case "00":
      mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = "El campo 2 está vacío.";
      break;
    case "11":
      let nDigito = digitos(input1);

      mensajeError = `<br><div ${centrar}>El numero ${input1} tiene <span ${verde}> ${
        nDigito == 1 ? "la posición." : "las siguientes posiciones."
      } </span> <br> ${crearTabla(Math.abs(input1), 0)} </div>`;

      switch (true) {
        case input2 > nDigito - 1 || input2 < 0:
          mensajeError += `<span ${rojo}>No se puede buscar la posición ${input2}</span>.`;
          break;
        default:
          mensajeError += `<span ${azul}>El número en la posición ${input2} es: <span ${negro}>${Math.abs(
            digitoN(input1, input2)
          )}</span></span>.`;
          break;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
