function imprimirPegaPorDelante(input1, input2) {
  const centrar = "text-align: center;";
  const rojo = "color: red;";
  const verde = "color: darkgreen;";
  const negro = "color: black;";
  const morado = "color: purple;";
  const naranja = "color: brown;";
  let mensajeError = "";

  input1 = parseInt(input1, 10);
  input2 = parseInt(input2, 10);
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

  const nDigito = digitos(input2);

  switch (estado) {
    case "00":
      mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "El campo 1 está vacío.<br>";
      mensajeError += `<span style='${rojo}'>`;
      if (nDigito > 1) {
        mensajeError += "El campo 2 no puede tener más de 1 dígito.";
      }
      mensajeError += "</span>";
      break;
    case "10":
      mensajeError = "El campo 2 está vacío.";
      break;
    case "11":
      if (nDigito === 1) {
        mensajeError += `<span style='${centrar}'>`;
        mensajeError += `<span style='${morado}'>${input1}</span> con <span style='${naranja}'>${input2}</span> pegado por delante:<br>`;
        mensajeError += `<span style='${verde}'>`;
        if (input1 < 0) {
          mensajeError = "<span>";
          mensajeError += `<span style='${rojo}'>El pegado de ${input2} delante de: ${input1} tiene distintas soluciones</span>`;
          if (input2 === 0) {
            mensajeError += "<span>";
            mensajeError += `<br>Numeral: <span style='${rojo}'>${input1}</span>`;
            mensajeError += `<br>Literal:  <span style='${rojo}'>-${input2}${Math.abs(
              input1
            )}</span>`;
            mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
            mensajeError += "</span>";
          } else if (input2 > 0) {
            mensajeError += "<span>";
            mensajeError += `<br>Numeral:  <span style='${rojo}'>-${input2}${Math.abs(
              input1
            )}</span>`;
            mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
            mensajeError += "</span>";
          } else if (input2 < 0) {
            mensajeError += "<span>";
            mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
            mensajeError += `<br>Literal:  <span style='${rojo}'>-${input2}${Math.abs(
              input1
            )}</span>`;
            mensajeError += "</span>";
          }
          mensajeError += "</span>";
        } else {
          if (input2 === 0) {
            mensajeError += `<span style='${negro}'>Numeral:</span> ${pegaPorDelante(
              input1,
              input2
            )}`;
            mensajeError += `<br><span style='${negro}'>Literal:</span> ${input2}${input1}`;
          } else {
            mensajeError += `caso: ${pegaPorDelante(input1, input2)}`;
          }
        }
        mensajeError += "</span>";
        mensajeError += "</span>";
      } else {
        mensajeError += `<span style='${rojo}'>`;
        if (nDigito > 1) {
          mensajeError += "El campo 2 no puede tener más de 1 dígito.<br>";
        }
        mensajeError += "</span>";
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
