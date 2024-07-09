function imprimirQuitaPorDetras(input1, input2) {
  const nDigito = digitos(input1);
  const centrar = "style='text-align: center;'";
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  let mensajeError = "";
   input1 = parseInt(input1);
   input2 = parseInt(input2);
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

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
      input1 = parseInt(input1);
      input2 = parseInt(input2);
      const digitoS = input2 === 1 ? "dígito" : "dígitos";
      mensajeError = `<div ${centrar}>`;
      mensajeError += `El número ${input1} tiene <span ${verde}>${nDigito} ${digitoS}.</span> <br>`;
      mensajeError += crearTablaReves(Math.abs(input1), 1);
      if (input2 === 0) {
        mensajeError += `<span ${rojo}>Quitar ${input2} dígitos nos dará el mismo número ${input1}</span><br>`;
        mensajeError += crearTablaReves(Math.abs(input1), 1);
      } else if (input2 > nDigito) {
        mensajeError += `<span ${rojo}>No se puede quitar ${input2} dígitos por detrás</span>`;
      } else if (input2 < 0) {
        mensajeError += `<span ${rojo}>La cantidad de números a quitar no puede ser negativa</span>`;
      } else if (input2 === nDigito) {
        mensajeError += `<span ${rojo}>Quitar ${input2} dígitos resultará en 0</span>`;
      } else {
        mensajeError += `<span ${verde}>El número ${input1} menos ${input2} ${digitoS} es: ${quitaPorDetras(
          input1,
          input2
        )}.</span>`;
        mensajeError += crearTablaReves(quitaPorDetras(input1, input2), 1);
      }
      mensajeError += `</div>`;
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
