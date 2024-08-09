function imprimirSiguientePrimo(input1) {
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  let mensajeError = "";
  input1 = parseInt(input1);
  const estado = isNaN(input1) ? "0" : "1";

  switch (estado) {
    case "0":
      mensajeError =
        "El campo está vacío o no es un número. Por favor, ingrese número(s).";
      break;
    case "1":
      input1 = parseInt(input1); // Asegurarse de que input1 es un entero
      const color = input1 >= 0 ? verde : rojo;
      mensajeError = "<span>";
      if (input1 > 1) {
        mensajeError += `El número ingresado es: <span ${verde}>${input1}</span>.<br>
        El siguiente número primo es: <span ${verde}>${siguientePrimo(
          input1
        )}</span>`;
      } else {
        mensajeError += `El número ingresado es: <span ${color}>${input1}</span>.<br>
        Por definición, el siguiente número primo es: <span ${verde}>2</span>.`;
      }
      mensajeError += "</span>";
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  return mensajeError;
}
