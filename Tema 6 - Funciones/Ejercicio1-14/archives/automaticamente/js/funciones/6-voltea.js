function voltea(num1) {
  const digitosOriginal = digitos(num1);
  let voltea = 0;
  let dividendo = Math.abs(num1); // Consideramos el valor absoluto para voltear correctamente
  const array = [];

  // Voltear el número
  while (dividendo > 0) {
    voltea = voltea * 10 + (dividendo % 10);
    dividendo = Math.floor(dividendo / 10);
  }

  const digitosVoltea = digitos(voltea);

  // Si el número original y el número volteado tienen la misma cantidad de dígitos
  if (digitosOriginal === digitosVoltea) {
    array[0] = num1 < 0 ? -voltea : voltea; // Asegurarse de mantener el signo negativo
    array[1] = num1 < 0 ? -voltea : voltea;
  } else {
    const ceros = digitosOriginal - digitosVoltea;
    let volteadoStr = voltea.toString();

    // Añadir ceros al principio del número volteado
    for (let i = 0; i < ceros; i++) {
      volteadoStr = "0" + volteadoStr;
    }

    array[0] = num1 < 0 ? "-" + volteadoStr : volteadoStr;
    array[1] = num1 < 0 ? -voltea : voltea;
  }

  return array;
}
