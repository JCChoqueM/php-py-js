function validarInput(input) {
  let valor = input.value.trim().toLowerCase(); // Obtener el valor del input en minúsculas
  let mensajeError = "";

  // Verificar si el valor tiene la longitud adecuada
  if (valor.length !== 2) {
    mensajeError = "La combinación debe tener exactamente dos caracteres.";
  } else {
    let letra = valor.charAt(0);
    let numero = valor.charAt(1);

    // Verificar si la letra está dentro del rango de "a" a "h" y si el número está dentro del rango de "1" a "8"
    if (letra < "a" || letra > "h" || numero < "1" || numero > "8") {
      mensajeError =
        "La combinación debe estar dentro del rango de 'a1' a 'h8'.";
    }
  }
  // Establecer el mensaje de error en el input
  input.setCustomValidity(mensajeError);
}
