function volteaArrayInt(input1) {
  let resultado = [];
  let count = input1.length;

  for (let i = count - 1; i >= 0; i--) {
    resultado.push(input1[i]);
  }

  return resultado;
}
