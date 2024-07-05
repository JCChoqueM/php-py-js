function imprimirPosicionDeDigito(input1, input2) {
  const nDigito = digitos(input1);
  const centrar = "style='text-align: center;'";
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  const azul = "style='color: blue;'";
  const negro = "style='color: black;'";
  let mensajeError = "";
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

  switch (estado) {
    case "00":
      mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = "El campo 2 está vacío";
      break;
    case "11":
      input1 = parseInt(input1);
      input2 = parseInt(input2);
      if (input2 > 9 || input2 < 0) {
        mensajeError += `<span ${rojo}>Numero ingresado ${input1}.<br> Solo se permiten numeros positivos de 1 digito:<br> ${input2} no es valido para la busqueda</span>.`;
      } else {
        const IzqDer = posicionDeDigitoIzquierdaDerecha(input1, input2);
        const posicionIzqDer = isNaN(IzqDer) ? "-1" : IzqDer;
        const DerIzq = posicionDeDigitoDerechaIzquierda(input1, input2);
        const posicionDerIzq = isNaN(DerIzq) ? "-1" : DerIzq;
        mensajeError = `<br><div ${centrar}><br>`;

        mensajeError += `<span ${azul}>`;
        mensajeError += `Izquierda a Derecha<br>`;
        mensajeError += `El numero '${input2}' esta en la posicion: '${IzqDer}'.<br>`;
        mensajeError += crearTabla(Math.abs(input1), 0, posicionIzqDer);
        mensajeError += `</span>`;

        mensajeError += ` <span ${rojo}>`;
        mensajeError += ` Derecha a izquierda<br>`;
        mensajeError += `El numero '${input2}' esta en la posicion: '${DerIzq}'.<br>`;
        mensajeError += crearTablaReves(Math.abs(input1), 0, posicionDerIzq);
        mensajeError += `</span>`;
        mensajeError += ` </div>`;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
