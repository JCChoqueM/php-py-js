/* SECTION inicio Numeros random */
function generarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generarNumeroAleatorio() {
  for(let i=0;i<12;i++){
    const num1 = document.getElementById(`${"num"+[i+1]}`);
    num1.value = generarNumero(25, -25);
  }
}

/* !SECTION fin Numeros random */
