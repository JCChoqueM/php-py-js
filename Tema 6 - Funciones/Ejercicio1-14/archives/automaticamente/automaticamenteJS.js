function automaticamenteJS(datos) {
  mensajeError = "";
  let select = datos[0];
  let input1 = datos[1];
  switch (true) {
    case select == "esCapicua":
      mensajeError = imprimirEscapicua(input1);
      break;
    case select == "esPrimo":
      mensajeError = imprimirEsPrimo(input1);
      break;
    case select == "siguientePrimo":
      mensajeError = imprimirSiguientePrimo(input1);
      break;
    case select == "potencia":
      mensajeError = imprimirPotencia(input1, datos[2]);
      break;
    default:
      mensajeError = "soy error";
  }
  return mensajeError;
}
