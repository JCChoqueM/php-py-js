/* SECTION inicio Numeros random */
function generarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generarNumeroAleatorio() {
  const num1 = document.getElementById("num1");

  num1.value = generarNumero(100, -2);
}

/* !SECTION fin Numeros random */
