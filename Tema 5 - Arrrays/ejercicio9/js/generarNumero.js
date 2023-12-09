/* SECTION inicio Numeros random */
function generarNumero (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function generarNumeroAleatorio () {
  const num1 = document.getElementById('num1')

  num1.value = generarNumero(100, -2)
}
function generar_inicial_final () {
  const num1 = document.getElementById('initial')
  const num2 = document.getElementById('final')

  num1.value = generarNumero(-2, 10)
  num2.value = generarNumero(-2, 10)
}


/* !SECTION fin Numeros random */
