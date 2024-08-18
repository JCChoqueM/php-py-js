function validacion(tamaño, minimo, maximo) {
  let mensajeError = "";

  tamaño = parseInt(tamaño);
  minimo = parseInt(minimo);
  maximo = parseInt(maximo);
  const estado =
    (isNaN(tamaño) ? "0" : "1") +
    (isNaN(minimo) ? "0" : "1") +
    (isNaN(maximo) ? "0" : "1");

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
      if (maximo < minimo) {
        mensajeError = "Maximo no puede ser menor que Minimo";
      } else {
        mensajeError = generarArray(tamaño, maximo, minimo);
      }
      break;
  }

  return mensajeError;
}


