// Función general para imprimir conversiones
function imprimirConversion(numero, base, destino, conversionFunction) {
  let mensajeError = "";

  // Verificar si el número es válido
  const estado = validarNumero(numero, base) ? "1" : "0";
  switch (estado) {
    case "0":
      if (numero === "") {
        mensajeError = "El campo está vacío";
      } else {
        mensajeError = `${numero} no es una base válida.`;
      }
      break;
    case "1":
      // Convertir el número usando la función proporcionada

      mensajeError = `El número: ${numero} ${base} 
      <br>Es igual a: ${conversionFunction(numero)} ${destino}`;
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  return mensajeError;
}

// Funciones específicas de conversión
function imprimirIguales(numero, base, destino) {
  return imprimirConversion(numero, base, destino, iguales);
}

function imprimirDecimalBinario(numero, base, destino) {
  return imprimirConversion(numero, base, destino, decimalBinario);
}

function imprimirDecimalHexadecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, decimalHexadecimal);
}

function imprimirDecimalOctal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, decimalOctal);
}

function imprimirBinarioDecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, binarioDecimal);
}

function imprimirBinarioHexadecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalHexadecimal(binarioDecimal(num))
  );
}

function imprimirBinarioOctal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalOctal(binarioDecimal(num))
  );
}

function imprimirHexadecimalDecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, hexadecimalDecimal);
}

function imprimirHexadecimalBinario(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalBinario(hexadecimalDecimal(num))
  );
}

function imprimirHexadecimalOctal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalOctal(hexadecimalDecimal(num))
  );
}

function imprimirOctalDecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, octalDecimal);
}

function imprimirOctalBinario(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalBinario(octalDecimal(num))
  );
}

function imprimirOctalHexadecimal(numero, base, destino) {
  return imprimirConversion(numero, base, destino, (num) =>
    decimalHexadecimal(octalDecimal(num))
  );
}
