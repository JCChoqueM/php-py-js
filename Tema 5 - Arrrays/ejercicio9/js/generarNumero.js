/* SECTION inicio Numeros random */
function generarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generarNumeroAleatorio() {
  const num1 = document.getElementById("num1");

  num1.value = generarNumero(20, 51);
}
function generarInicialFinal() {
  let numInicial = generarNumero(0, 5);
  let numFinal = generarNumero(0, 5);

  document.getElementById("initial").value = numInicial;
  document.getElementById("final").value = numFinal;
}

/* !SECTION fin Numeros random */
