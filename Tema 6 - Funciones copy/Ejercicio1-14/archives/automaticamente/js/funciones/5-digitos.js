function digitos(num1) {
  num1 = Math.abs(num1);
  let digitos = 0;
  dividendo = num1;
  do {
    dividendo = Math.trunc(dividendo / 10);
    digitos = digitos + 1;
  } while (dividendo > 0);
  return digitos;
}
