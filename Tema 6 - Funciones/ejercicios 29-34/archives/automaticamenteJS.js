function automaticamenteJS(datos) {
  mensajeError = "";
  let select = datos.seleccion;
  let input1 = datos.arrayGenerado;
  let extra = datos.extra;
  switch (true) {
    case select == "generaArrayInt":
      mensajeError = imprimirGenerarArrayInt(input1);
      break;
    case select == "minimoArrayInt":
      mensajeError = imprimirMinimoArrayInt(input1);
      break;
    case select == "maximoArrayInt":
      mensajeError = imprimirMaximoArrayInt(input1);
      break;
    case select == "mediaArrayInt":
      mensajeError = imprimirMediaArrayInt(input1);
      break;
    case select == "estaEnArrayInt":
      mensajeError = imprimirEstaEnArrayInt(input1,extra);
      break;
    case select == "posicionEnArrayInt":
      mensajeError = imprimirPosicionEnArrayInt(input1,extra);
      break;
    case select == "volteaArrayInt":
      mensajeError = imprimirVolteaArrayInt(input1);
      break;
    case select == "rotaDerechaArrayInt":
      mensajeError = imprimirRotaDerechaArrayInt(input1, extra);
      break;
    case select == "rotaIzquierdaArrayInt":
      mensajeError = imprimirRotaIzquierdaArrayInt(input1, extra);
      break;

    default:
      mensajeError = "Algo fallo " + datos.extra;
  }
  return mensajeError;
}
