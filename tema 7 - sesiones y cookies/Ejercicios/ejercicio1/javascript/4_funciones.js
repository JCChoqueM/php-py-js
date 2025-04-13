function numerosPrimos(limite) {
  limite = Math.abs(Number(limite));
  const numeros = new Array(limite + 1).fill(true);
  numeros[0] = numeros[1] = false; // 0 y 1 no son primos

  for (let n = 2; n <= Math.sqrt(limite); n++) {
    if (numeros[n]) {
      for (let i = n * n; i <= limite; i += n) {
        numeros[i] = false;
      }
    }
  }
  const retorno = numeros.map((esPrimo, i) => (esPrimo ? i : -1)).filter((i) => i !== -1);
  return retorno;
}
