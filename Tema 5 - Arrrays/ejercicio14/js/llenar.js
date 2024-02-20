function llenar(inputId) {
  document.getElementById(inputId).value = "";
  let letras = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

  // Obtener una letra aleatoria
  let letraAleatoria = letras[Math.floor(Math.random() * letras.length)];

  // Obtener un número aleatorio
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

  // Construir la combinación aleatoria
  let combinacion = letraAleatoria + numeroAleatorio;

  // Insertar la combinación en el input
  // Insertar la combinación en el input
  let input = document.getElementById(inputId);
  input.value = combinacion;

  // Restablecer el estado de validez del input
  input.setCustomValidity("");
  input.classList.remove("invalid"); // Remover cualquier clase de estilo de inválido
  input.classList.add("valid"); // Agregar clase de estilo de válid
}











