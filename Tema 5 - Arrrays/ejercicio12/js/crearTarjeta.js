function generar() {
  // Obtener las claves del objeto
  const frutas = Object.keys(asociativo);

  // Seleccionar tres frutas al azar sin repetir
  const frutasSeleccionadas = [];
  const clavesUtilizadas = []; // Array para guardar las claves utilizadas
  while (frutasSeleccionadas.length < 3) {
    const frutaAleatoria = frutas[Math.floor(Math.random() * frutas.length)];
    if (!frutasSeleccionadas.includes(frutaAleatoria)) {
      frutasSeleccionadas.push(frutaAleatoria);
      // Guardar la clave utilizada
      clavesUtilizadas.push(frutaAleatoria);
    }
  }

  // Actualizar las tarjetas con las frutas seleccionadas
  for (let i = 0; i < 3; i++) {
    const tarjeta = document.getElementById(`tarjeta${i + 1}`);
    const titulo = tarjeta.querySelector(".titulo");
    const imagen = tarjeta.querySelector(".fruta");

    titulo.textContent = frutasSeleccionadas[i];
    imagen.src = `images/${frutasSeleccionadas[i]}.png`;
  }

  // Imprimir las claves utilizadas en la consola
  console.log("Claves utilizadas:", clavesUtilizadas);

  // Retornar el array con las claves utilizadas
  return clavesUtilizadas;
}

// Llamar a la función para generar tarjetas y obtener las claves utilizadas
const clavesGuardadas = generar();
console.log("Claves utilizadisimas:", clavesGuardadas);
