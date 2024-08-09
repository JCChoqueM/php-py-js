function esCapicua(numero) {
  let numeroOriginal = numero;
  numero = Math.abs(numero);
  let volteado = 0;
  let digito = null;
  let mensajeError = "";
  while (numero > 0) {
    digito = numero % 10;
    volteado = volteado * 10 + digito;
    numero = Math.floor(numero / 10);
  }

  // Comparar el número original con el número volteado
  if (Math.abs(numeroOriginal) === volteado) {
    mensajeError = `El número <span style='color: green'>${Math.abs(
      numeroOriginal
    )}</span> es capicúa`;
  } else {
    mensajeError = `El número <span style='color: red'>${Math.abs(
      numeroOriginal
    )}</span> NO es capicúa`;
  }
  return mensajeError;
}

// Ejemplo de uso
