function usarInput() {

  // Obtener el valor del input y convertirlo a minúsculas
  const valor = document.getElementById("input1").value.trim().toLowerCase();

  // Crear un objeto para mapear las letras a sus valores numéricos
  const letrasMap = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };

  // Crear un objeto para mapear los números a sus valores numéricos
  const numerosMap = { 8: 0, 7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7 };

  // Verificar si el valor tiene la longitud adecuada
  if (valor.length !== 2) {
    console.error("La combinación debe tener exactamente dos caracteres.");
    return null; // Devolver null si el valor no tiene la longitud adecuada
  }

  const letra = valor.charAt(0);
  const numero = valor.charAt(1);

  // Verificar si la letra está dentro del rango de "a" a "h" y si el número está dentro del rango de "1" a "8"
  if (!(letra in letrasMap) || !(numero in numerosMap)) {
    console.error("La combinación debe estar dentro del rango de 'a1' a 'h8'.");
    return null; // Devolver null si la letra o el número no están en el rango adecuado
  }

  // Obtener los valores numéricos asociados a la letra y al número
  const ejeY = letrasMap[letra];
  const ejeX = numerosMap[numero];

  // Devolver un objeto con los valores numéricos obtenidos
  return { ejeX, ejeY };
}

