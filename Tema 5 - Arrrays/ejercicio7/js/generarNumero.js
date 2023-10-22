/* SECTION inicio Numeros random */
function generarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeroAleatorioNum1() {
  var indiceAleatorio = Math.floor(Math.random() * numerosAuto.length);
  return numerosAuto[indiceAleatorio];
}

/* function buscar() {
  const num1 = document.getElementById("num1");
  num1.value = numeroAleatorioNum1();
} */
/* function reemplazar() {
  const num2 = document.getElementById("num2");
  num2.value = generarNumero(25,0);
} */

function LlenarAutomaticamente() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  num1.value = numeroAleatorioNum1();
  num2.value = generarNumero(25, 0);
}

/* !SECTION fin Numeros random */
