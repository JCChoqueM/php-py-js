function automaticamenteJS(datos) {


  // Determinar el nombre de la función
  let select = datos[1] === datos[2] ? "Iguales" : datos[1] + datos[2];
  let funcionNombre = "imprimir" + select;

  // Verificar si la función existe y llamarla
  let mensajeError;
  if (typeof window[funcionNombre] === "function") {
    mensajeError = window[funcionNombre](datos[0], datos[1], datos[2]);
  } else {
    mensajeError = "Pregúntame más";
  }

  return mensajeError;
}
