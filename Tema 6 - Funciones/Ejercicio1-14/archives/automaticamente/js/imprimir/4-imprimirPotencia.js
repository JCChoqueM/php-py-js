function imprimirPotencia(base, exponente) {
  let centrar = "text-align: center;";
  let rojo = "color: red;";
  let verde = "color: darkgreen;";
  let letra = "font-size: 20px; font-weight: bold;";

  let mensajeError = "";
  base = parseInt(base);
  exponente = parseInt(exponente);
  let estado = (isNaN(base) ? "0" : "1") + (isNaN(exponente) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "El campo base está vacío.";
      break;
    case "10":
      mensajeError = "El campo exponente está vacío.";
      break;
    case "11":
      base = parseInt(base);
      exponente = parseInt(exponente);
      if (exponente === 0) {
        if (base === 0) {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> tiene 2 valores posibles: 1 o indefinido</span>`;
        } else {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> resultado es: 1</span>`;
        }
      } else if (exponente < 0) {
        if (base === 0) {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> resultado es:<br><br>
                        <math xmlns='http://www.w3.org/1998/Math/MathML'>
                            <mfrac style='${letra}'>
                                <mi>1</mi>
                                <mi><span>
                                        (${base})<sup>${Math.abs(
            exponente
          )}</sup>
                                    </span></mi>
                            </mfrac>
                        </math> =
                        <math xmlns='http://www.w3.org/1998/Math/MathML'>
                            <mfrac style='${letra}'>
                                <mi>1</mi>
                                <mi><span>${base}</span></mi>
                            </mfrac>
                        </math> = Indefinido
                        </span>`;
        } else {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> resultado es:<br><br>
                        <math xmlns='http://www.w3.org/1998/Math/MathML'>
                            <mfrac style='${letra}'>
                                <mi>1</mi>
                                <mi><span>
                                        (${base})<sup>${Math.abs(
            exponente
          )}</sup>
                                    </span></mi>
                            </mfrac>
                        </math> =
                        <math xmlns='http://www.w3.org/1998/Math/MathML'>
                            <mfrac style='${letra}'>
                                <mi>1</mi>
                                <mi><span>${Math.pow(
                                  base,
                                  Math.abs(exponente)
                                )}</span></mi>
                            </mfrac>
                        </math>
                        </span>`;
        }
      } else {
        if (exponente === 1) {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> El resultado es ${base}</span>`;
        } else if (exponente > 1) {
          mensajeError = `<span style='${centrar}'>(${base})<sup>${exponente}</sup> resultado es: ${potencia(
            base,
            exponente
          )}</span>`;
        }
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}
