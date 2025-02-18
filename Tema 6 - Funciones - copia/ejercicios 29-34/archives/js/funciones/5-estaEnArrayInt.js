function estaEnArrayInt(array, numero) {
numero=parseInt(numero)
console.log(typeof numero)
console.log(typeof array)
  // Verifica si 'array' es un array y si 'numero' está en el array
  if (array.includes(numero)) {
    return true;
  }
  return false;
}
