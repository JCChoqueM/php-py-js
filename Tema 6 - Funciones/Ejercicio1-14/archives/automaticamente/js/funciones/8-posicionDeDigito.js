function posicionDeDigitoIzquierdaDerecha(numero, digito) {
  // Voltear el número
  let volteado = voltea2(numero);

  // Encontrar la posición del dígito en el número volteado
  let posicionEnVolteado = posicionDeDigitoDerechaIzquierda(volteado, digito);

  // Si el número tiene la misma cantidad de dígitos después de voltear
  if (digitos(numero) === digitos(volteado)) {
    return posicionEnVolteado;
  }

  // Manejo especial para ceros al final del número original
  if (digito === 0) {
    if (posicionEnVolteado === "No encontrado (-1)") {
      return digitos(volteado);
    }
  }

  return posicionEnVolteado;
}

function posicionDeDigitoDerechaIzquierda(numero, digito) {
  let posicion = 0;
  let divisor = Math.abs(numero);
  let encontrado = false;

  // Caso especial para cuando el número es 0 y el dígito buscado es 0
  if (divisor === 0 && digito === 0) {
    return posicion;
  }

  // Buscar la posición del dígito
  while (divisor > 0) {
    if (divisor % 10 === digito) {
      encontrado = true;
      break;
    }
    posicion += 1;
    divisor = Math.floor(divisor / 10);
  }

  return encontrado ? posicion : "No encontrado (-1)";
}
