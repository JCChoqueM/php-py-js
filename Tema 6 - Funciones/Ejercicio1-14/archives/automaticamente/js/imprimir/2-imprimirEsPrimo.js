function imprimirEsPrimo(input1) {
  let rojo = "style='color: red;'";
  let verde = "style='color: darkgreen;'";
  let mensajeError = "";
  input1 = parseInt(input1); // Asegurarse de que input1 es un entero
  let estado = isNaN(input1) ? "0" : "1";

  switch (estado) {
    case "0":
      mensajeError =
        "El campo está vacío o no es un número. Por favor, ingrese número(s).";
      break;
    case "1":
      let absInput1 = Math.abs(input1);
      let esPrimoInput1 = esPrimo(input1);
      let esPrimoAbsInput1 = esPrimo(absInput1);
      let color = esPrimoAbsInput1 ? verde : rojo;
      mensajeError = "<span>";
      if (input1 > 1) {
        mensajeError +=
          `El número <span ${color}>${input1}</span>` +
          (esPrimoInput1 ? " es oprimo" : " NO oes primo");
      } else {
        mensajeError += `En matemáticas, un número primo es un número natural mayor que <span ${verde}>1</span>, el número <span ${rojo}>${input1}</span> no es primo.`;
        if (input1 != 0 && input1 != 1) {
          mensajeError += `<br><br><span ${color}>Ignorando el signo:</span><br>`;
          mensajeError +=
            `El número <span ${color}>${absInput1}</span>` +
            (esPrimoAbsInput1 ? " es primo" : " NO es primo");
        }
      }
      mensajeError += "</span>";
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
