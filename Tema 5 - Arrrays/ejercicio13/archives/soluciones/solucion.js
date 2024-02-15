function solucionJavaScript() {
  // Obtener los datos generados por la función generarMatrizYDatos
  const { num1ero, minimo, xMinimo, yMinimo } = generarMatrizYDatos();

  // Llamar a la función automaticoJS con los datos obtenidos
  automaticoJS(num1ero, minimo, xMinimo, yMinimo);
}
