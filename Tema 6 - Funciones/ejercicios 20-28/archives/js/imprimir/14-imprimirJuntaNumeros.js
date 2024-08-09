function imprimirJuntaNumeros(input1, input2) {
  const centrar = "text-align: center;";
  const rojo = "color: red;";
  const azul = "color: blue;";

  let mensajeError = "";
  input1 = parseInt(input1, 10);
  input2 = parseInt(input2, 10);
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

  const estado2 =
    (input1 === 0 ? "C" : input1 > 0 ? "P" : "N") +
    (input2 === 0 ? "C" : input2 > 0 ? "P" : "N");

  switch (estado) {
    case "00":
      mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "El campo 1 está vacío.<br>";
      break;
    case "10":
      mensajeError = "El campo 2 está vacío.";
      break;
    case "11":
      let pegado1 = "";
      let pegado2 = "";
      mensajeError = `<span style="${centrar}">`;
      mensajeError += `El pegado de los numeros <span style="${rojo}">${input1}</span> y <span style="${azul}">${input2}</span> es:<br>`;
      switch (estado2) {
        case "CC":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: 0`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: 0`;
          break;
        case "CP":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: ${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: ${pegaPorDelante(input1, input2)}`;
          break;
        case "PC":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: ${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: ${pegaPorDelante(input1, input2)}`;
          break;
        case "CN":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Literal: ${color("-", 2)}${color(input1, 1)}${color(
            Math.abs(input2),
            2
          )}
          <br>Numeral: -${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: ${pegaPorDelante(input1, input2)}`;
          break;
        case "NC":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: ${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 1)}${color(input1, 1)}
          <br>Literal: ${color("-", 1)}${color(input2, 2)}${color(
            Math.abs(input1),
            1
          )}
          <br>Numeral: -${pegaPorDelante(input1, input2)}`;
          break;
        case "PP":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: ${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: ${pegaPorDelante(input1, input2)}`;
          break;
        case "PN":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: -${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: ${pegaPorDelante(input1, input2)}`;
          break;
        case "NN":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Literal: ${color("-", 2)}${color("-", 1)}${color(
            Math.abs(input1),
            1
          )}${color(Math.abs(input2), 2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Literal: ${color("-", 1)}${color("-", 2)}
          ${color(Math.abs(input2), 2)}${color(Math.abs(input1), 1)}`;
          break;
        case "NP":
          pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}
          <br>Numeral: ${pegaPorDetras(input1, input2)}`;
          pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}
          <br>Numeral: -${pegaPorDelante(input1, input2)}`;
          break;
        default:
          mensajeError = "revisame algo paso";
      }
      mensajeError += crearTablaPegado(pegado1, pegado2);
      mensajeError += "</span>";
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
function color(numero, mn) {
  const naranja = "color: red;";
  const morado = "color: blue;";
  const style = mn === 1 ? naranja : morado;
  return `<span style="${style}">${numero}</span>`;
}
