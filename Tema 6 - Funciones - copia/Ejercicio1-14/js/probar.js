function contarDigitos2 (numero) {
  let contador = 0
  let dividendo = Math.abs(numero)
  if (dividendo >= 0 && dividendo < 10) {
    contador = 1
    return contador
  } else {
    while (dividendo > 0) {
      contador += 1
      dividendo = Math.floor(dividendo / 10)
    }
    return contador
  }
}
console.log(contarDigitos2(2121238))
