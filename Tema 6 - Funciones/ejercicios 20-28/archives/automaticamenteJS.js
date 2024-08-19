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
    case select == "digitos":
      mensajeError = imprimirDigitos(input1);
      break;
    case select == "voltea":
      mensajeError = imprimirVoltea(input1);
      break;
    case select == "digitoN":
      mensajeError = imprimirDigitoN(input1, datos[2]);
      break;
    case select == "posicionDeDigito":
      mensajeError = imprimirPosicionDeDigito(input1, datos[2]);
      break;
    case select == "quitaPorDetras":
      mensajeError = imprimirQuitaPorDetras(input1, datos[2]);
      break;
    case select == "quitaPorDelante":
      mensajeError = imprimirQuitaPorDelante(input1, datos[2]);
      break;
    case select == "pegaPorDetras":
      mensajeError = imprimirPegaPorDetras(input1, datos[2]);
      break;
    case select == "pegaPorDelante":
      mensajeError = imprimirPegaPorDelante(input1, datos[2]);
      break;
    case select == "trozoDeNumero":
      mensajeError = imprimirTrozoDeNumero(input1, datos[2], datos[3]);
      break;
    case select == "juntaNumeros":
      mensajeError = imprimirJuntaNumeros(input1, datos[2]);
      break;
    default:
      mensajeError = "Revisa algun Dato";
  }
  return mensajeError;
}
