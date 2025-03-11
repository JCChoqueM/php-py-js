/* section 1.-esCapicua */
function funcion_esCapicua(num1) {
  const numero = Math.abs(num1);
  const numStr = numero.toString();
  const numInvertido = numStr.split('').reverse().join('');
  return numStr === numInvertido;
}
/* !section fin - 1.-esCapicua */

/* section2 2.-esPrimo */
function funcion_esPrimo(params) {
  const numero = Math.abs(params);
  if (numero < 2) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}
/* !section2 fin - 2.-esPrimo */

/* section 3.-siguientePrimo */
function funcion_siguientePrimo(num) {
  num = Number(num);
  if (num < 2) return 2;
  let candidato = num + 1;
  console.log(typeof candidato);
  while (!funcion_esPrimo(candidato)) {
    candidato++;
  }
  return candidato;
}
/* !section fin - 3.-siguientePrimo */

/* section2 4.-potencia */
function funcion_potencia(num1, num2) {
  return Math.pow(num1, num2);
}
/* !section2 fin - 4.-potencia */

/* section 5.-digitos */
function funcion_digitos(num) {
  return Math.abs(num).toString().length;
}

/* !section fin - 5.-digitos */

/* section2 6.-voltea */
function funcion_voltea(num1) {
  const digitosOriginal = funcion_digitos(num1);

  let voltea = 0;
  let dividendo = Math.abs(num1);

  // Voltear el número
  while (dividendo > 0) {
    voltea = voltea * 10 + (dividendo % 10);
    dividendo = Math.floor(dividendo / 10);
  }

  // Convertir a string asegurando los ceros faltantes
  let volteadoStr = voltea.toString().padStart(digitosOriginal, '0');

  // Si el número original era negativo, mantener el signo
  if (num1 < 0) {
    volteadoStr = `-${volteadoStr}`;
    voltea = -voltea;
  }

  return [volteadoStr, voltea];
}
/* !section2 fin - 6.-voltea */

/* section 7.-digitoN*/
function funcion_digitoN(numero, posicion) {
  let digito_numero = funcion_digitos(numero);
  let exponente = digito_numero - posicion - 1;
  let primero = Math.trunc(numero / funcion_potencia(10, exponente));
  let segundo = primero % 10;
  return segundo;
}
/* !section fin - 7.-digitoN*/

/* section2 8.-posicionDeDigito */

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */

/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */

/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */

/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */

/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */

/* !section fin - 13.-trozoDeNumero */

/* section2 14.-juntaNumeros */

/* !section2 fin - 14.-juntaNumeros */
