function generarArray(tamaño, min, max) {
  let numerosAuto = [];
  for (contador = 0; contador < tamaño; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAuto.push(numeroAleatorio);
  }

  return numerosAuto;
}
