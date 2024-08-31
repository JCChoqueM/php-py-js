// Objeto myData inicializado con valores generados
const myData = (function () {
  let values = generarPrimerDato(); // Inicializa con datos generados

  return {
    getValues: function () {
      return { ...values }; // Devuelve una copia del objeto para evitar modificaciones externas
    },
    updateValues: function (newValues) {
      // Asegura que newValues tiene las propiedades necesarias
      if (
        newValues &&
        typeof newValues === "object" &&
        "tamaño" in newValues &&
        "minimo" in newValues &&
        "maximo" in newValues &&
        "extra" in newValues &&
        "array" in newValues
      ) {
        values = { ...newValues }; // Actualiza los valores
      } else {
        console.error(
          "Debe ser un objeto con las propiedades 'tamaño', 'minimo', 'maximo', 'extra' y 'array'."
        );
      }
    },
  };
})();

// Función para actualizar los datos según los cambios del input
function actualizarDatosDesdeInput() {
  const tamaño = parseInt(document.getElementById("tamaño").value, 10);
  const minimo = parseInt(document.getElementById("minimo").value, 10);
  const maximo = parseInt(document.getElementById("maximo").value, 10);
  const extra = parseInt(document.getElementById("extra").value, 10);

  // Verifica si los valores son válidos antes de actualizar
  if (isNaN(tamaño) || isNaN(minimo) || isNaN(maximo) || isNaN(extra)) {
    console.error("Por favor, ingrese todos los valores numéricos.");
    return;
  }

  const newArray = generarArray(tamaño, minimo, maximo); // Regenera el array con los nuevos datos
  myData.updateValues({ tamaño, minimo, maximo, extra, array: newArray });
}

// Asignar un evento de escucha para actualizar los datos al cambiar un input
document
  .getElementById("tamaño")
  .addEventListener("change", actualizarDatosDesdeInput);
document
  .getElementById("minimo")
  .addEventListener("change", actualizarDatosDesdeInput);
document
  .getElementById("maximo")
  .addEventListener("change", actualizarDatosDesdeInput);
document
  .getElementById("extra")
  .addEventListener("change", actualizarDatosDesdeInput);
