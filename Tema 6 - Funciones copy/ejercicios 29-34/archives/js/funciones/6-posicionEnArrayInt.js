function posicionEnArrayInt(input1, extra) {
  let posiciones = [];
  console.log(".......................")
  console.log(input1);
          console.log(extra);

extra= parseInt(extra)
console.log(["2",4,"hola","4"])
  // Verifica si input1 es un array
  if (Array.isArray(input1)) {
    input1.forEach((valor, indice) => {


      if (valor === extra) {
        posiciones.push(indice);
      }
    });
  } else {
    console.log("El primer parámetro no es un array.");
  }

  return posiciones;
}
