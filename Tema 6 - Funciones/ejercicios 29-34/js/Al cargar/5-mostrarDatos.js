function mostrarDatos() {
  const numInput = document.getElementById("tamaño");
  const numInput2 = document.getElementById("minimo");
  const numInput3 = document.getElementById("maximo");
  const extraInput = document.getElementById("extra");
  const mostrarArray = document.getElementById("arrayNumerosAleatorios");

  // Generar datos aleatorios
  let datos = myData.getValues();

  // Asignar valores comunes
  numInput.value = datos.tamaño;
  numInput2.value = datos.minimo;
  numInput3.value = datos.maximo;
  // Si existe extraInput, asignar un valor aleatorio
  if (extraInput) {
    extraInput.value = datos.extra;
  }
  mostrarArray.value = datos.array.join(", ");
}
