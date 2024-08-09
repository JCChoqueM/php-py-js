function trozoDeNumero(numero, inicial, final) {
  numero = parseInt(numero);
  inicial = parseInt(inicial);
  final = parseInt(final);
  let digitoNumero = digitos(numero);
  let exponenteDetras = digitoNumero - (final + 1);
  let quitaDetras = Math.trunc(numero / potencia(10, exponenteDetras));
  digitoNumero = digitos(quitaDetras);
  let exponenteDelante = digitoNumero - inicial;
  let quitaDelante = quitaDetras % potencia(10, exponenteDelante);
  digitoNumero = digitos(quitaDelante);

  if (digitoNumero < exponenteDelante) {
    let especial = "";
    for (
      let contador = digitoNumero;
      contador <= exponenteDelante - 1;
      contador++
    ) {
      especial += "0";
    }
    let mensajeEspecial = `El trozo de número es:<br> Literal: ${especial}${quitaDelante} <br>Numeral: ${quitaDelante}`;
    return mensajeEspecial;
  } else {
    return `El trozo de número es: ${quitaDelante}`;
  }
}
