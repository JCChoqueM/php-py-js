function validarNumero(numero, base) {
  let esValido = false; // Variable para determinar si el número es válido

  switch (base) {
    case "Binario":
      esValido = /^[01]+$/.test(numero); // Solo 0s y 1s
      break;
    case "Octal":
      esValido = /^[0-7]+$/.test(numero); // Solo dígitos del 0 al 7
      break;
    case "Decimal":
      esValido = /^[0-9]+$/.test(numero); // Solo dígitos del 0 al 9
      break;
    case "Hexadecimal":
      esValido = /^[0-9A-Fa-f]+$/.test(numero); // Dígitos del 0 al 9 y letras A-F (mayúsculas o minúsculas)
      break;
  }

  return esValido; // Retorna true si el número es válido, false en caso contrario
}
