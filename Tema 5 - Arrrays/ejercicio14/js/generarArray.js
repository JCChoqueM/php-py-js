function generarMatrizYDatos() {
  let lineal = [];
  let i = 0;

  do {
    let n = generarNumeroAleatorio(100, 999);
    if (!lineal.includes(n)) {
      lineal.push(n);
      i++;
    }
  } while (i < 54);

  let minimo = 999;
  i = 0;
  let xMinimo;
  let yMinimo;
  let numero = [];

  for (let x = 0; x < 6; x++) {
    numero[x] = [];
    for (let y = 0; y < 9; y++) {
      numero[x][y] = lineal[i];
      i++;
      if (numero[x][y] < minimo) {
        minimo = numero[x][y];
        xMinimo = x;
        yMinimo = y;
      }
    }
  }
console.log(lineal);
console.log(numero);
console.log(
  `El valor mínimo es ${minimo} en la posición [${xMinimo}][${yMinimo}].`
);
  return { num1ero: numero, minimo: minimo, xMinimo: xMinimo, yMinimo: yMinimo };
}
