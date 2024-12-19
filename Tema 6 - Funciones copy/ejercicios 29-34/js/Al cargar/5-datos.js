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
        "array" in newValues
      ) {
        // Actualiza los valores, preservando 'extra' si no está presente en newValues
        values = {
          ...values, // Mantiene los valores actuales
          ...newValues, // Sobrescribe solo con los nuevos valores proporcionados
        };
        console.log(myData.getValues());
      } else if (newValues && "extra" in newValues) {
        // Actualiza solo 'extra' si es lo único proporcionado
        values.extra = newValues.extra;
        console.log(myData.getValues());
      } else {
        console.error(
          "Debe ser un objeto con las propiedades 'tamaño', 'minimo', 'maximo', 'array' o 'extra'."
        );
      }
    },
  };
})();

// Función para actualizar los datos según los cambios del input
function actualizarDatosDesdeInput(event) {
  const id = event.target.id;

  if (id === "extra") {
    // Actualizar solo 'extra' si es el campo modificado
    const extraInput = document.getElementById("extra");
    const extra = extraInput ? parseInt(extraInput.value, 10) : undefined;

    if (extraInput && !isNaN(extra)) {
      myData.updateValues({ extra });
    } else {
      console.error(
        "Por favor, ingrese un valor numérico válido para 'extra'."
      );
    }
  } else {
    // Actualizar tamaño, mínimo, máximo y regenerar el array
    const tamaño = parseInt(document.getElementById("tamaño").value, 10);
    const minimo = parseInt(document.getElementById("minimo").value, 10);
    const maximo = parseInt(document.getElementById("maximo").value, 10);

    if (isNaN(tamaño) || isNaN(minimo) || isNaN(maximo)) {
      console.error("Por favor, ingrese todos los valores numéricos.");
      return;
    }

    const newArray = generarArray(tamaño, minimo, maximo); // Regenera el array con los nuevos datos

    const newValues = {
      tamaño,
      minimo,
      maximo,
      array: newArray,
    };

    myData.updateValues(newValues);
  }

  // Llamar a la función resolver() después de actualizar
  resolver();
}

// Asignar un evento de escucha para actualizar los datos al cambiar un input
document
  .getElementById("tamaño")
  .addEventListener("input", actualizarDatosDesdeInput);
document
  .getElementById("minimo")
  .addEventListener("input", actualizarDatosDesdeInput);
document
  .getElementById("maximo")
  .addEventListener("input", actualizarDatosDesdeInput);
document
  .getElementById("funcionesInput")
  .addEventListener("input", actualizarDatosDesdeInput);

console.log(myData.getValues());
