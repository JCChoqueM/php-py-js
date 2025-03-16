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
function funcion_posicionDeDigito(numero, digito) {
  // Convertimos el número en una cadena absoluta (sin signo negativo)
  let strNum = Math.abs(numero).toString();

  // Encontramos la primera ocurrencia del dígito
  let posIzq = strNum.indexOf(digito.toString());

  // Encontramos la última ocurrencia del dígito
  let posDer = strNum.lastIndexOf(digito.toString());

  // Ajustamos la posición de derecha a izquierda
  let posDerInvertido = posDer !== -1 ? strNum.length - 1 - posDer : -1;

  return [posIzq !== -1 ? posIzq : -1, posDerInvertido];
}

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */
function funcion_quitaPorDetras(numero, digito) {
  numero = Math.abs(numero);
  nuevoNumero = Math.trunc(numero / funcion_potencia(10, digito));
  console.log(nuevoNumero);
  return nuevoNumero;
}
/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */
function funcion_quitaPorDelante(numero, digito) {
  numero = Math.abs(numero);
  calculo = funcion_digitos(numero) - digito;
  nuevoNumero = numero % funcion_potencia(10, calculo);
  console.log(nuevoNumero);
  return nuevoNumero;
}
/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */
function funcion_pegaPorDetras(numero, numero2) {
  const exponente = funcion_digitos(numero2);
  const pegado = Math.abs(numero) * funcion_potencia(10, exponente) + Math.abs(numero2);
  console.log(pegado)
  return numero < 0 ? -pegado : pegado;
}
/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */
function funcion_pegaPorDelante(numero, numero2) {
  const aux = funcion_digitos(numero);
  const pegado = Math.abs(numero2) * funcion_potencia(10, aux) + Math.abs(numero);
  console.log(pegado)
  return numero2 < 0 ? -pegado : pegado;
}
/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */
function funcion_trozoDeNumero(numero, inicial, final) {
  numero = Math.abs(parseInt(numero));
  inicial = parseInt(inicial);
  final = parseInt(final);

  let digitoNumero = funcion_digitos(numero);
  if (inicial < 0 || final < 0 || inicial > digitoNumero - 1 || final > digitoNumero - 1 || inicial > final) {
    return "Error: Los valores inicial y final deben estar dentro del rango permitido.";
  }

  let exponenteDetras = digitoNumero - (final + 1);
  let quitaDetras = Math.trunc(numero / funcion_potencia(10, exponenteDetras));
  let digitoNumeroNuevo = funcion_digitos(quitaDetras);
  let exponenteDelante = digitoNumeroNuevo - inicial;
  let quitaDelante = quitaDetras % funcion_potencia(10, exponenteDelante);
  let digitoFinal = funcion_digitos(quitaDelante);

  if (digitoFinal < exponenteDelante) {
    let cerosExtra = "0".repeat(exponenteDelante - digitoFinal);
    return `El trozo de número es:<br> Literal: ${cerosExtra}${quitaDelante} <br>Numeral: ${quitaDelante}`;
  } else {
    return `El trozo de número es: ${quitaDelante}`;
  }
}


/* !section fin - 13.-trozoDeNumero */

/* section2 14.-juntaNumeros */
function funcion_juntaNumeros(num1, num2) {
  return "solo existo";
}
/* !section2 fin - 14.-juntaNumeros */
