function generarNumeroAleatorio(min, max) {
  // Verificar si se proporcionaron los valores mínimo y máximo del rango
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Los valores mínimo y máximo del rango deben ser números.");
  }

  // Generar un número aleatorio dentro del rango especificado
  return Math.floor(min + Math.random() * (max - min + 1));
}
