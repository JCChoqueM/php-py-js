const myData = (function () {
  let values = [1, 2, 3, 4]; // Valores iniciales

  return {
    getValues: function () {
      return values.slice(); // Devuelve una copia del array para evitar modificaciones externas
    },
    updateValues: function (newValues) {
      if (Array.isArray(newValues) && newValues.length === 4) {
        values = newValues;
      } else {
        console.error("Debe ser un array con 4 valores.");
      }
    },
  };
})();

// Ejemplo de uso
console.log(myData.getValues()); // [1, 2, 3, 4]
myData.updateValues([5, 6, 7, 8]); // Actualiza valores
console.log(myData.getValues()); // [5, 6, 7, 8]
