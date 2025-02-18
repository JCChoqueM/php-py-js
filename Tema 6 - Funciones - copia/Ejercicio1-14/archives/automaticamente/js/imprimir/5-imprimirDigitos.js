function imprimirDigitos(input1) {
  const rojo = "color: red;";
  const verde = "color: darkgreen;";
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
      if (input1 >= 0) {
        mensajeError += `El número: <span style="${color}">${input1}</span>.<br> tiene: <span style="${color}">${digitos(
          input1
        )} dígitos</span>`;
      } else {
        mensajeError += `El número: <span style="${color}">${input1}</span>.<br> tiene: <span style="${color}">${digitos(
          Math.abs(input1)
        )} dígitos</span>`;
      }
      mensajeError += "</span>";
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  return mensajeError;
}
