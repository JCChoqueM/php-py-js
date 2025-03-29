function construirMensaje_(datos, resultado) {
  let numero = datos.num1;
  const base = document.querySelector('#seleccion1').value;
  const salida = document.querySelector('#seleccion2').value;
  let mensaje = '';

  if (validarNumero(numero, base)) {
    mensaje =
      `El número <span style='color: blue;'><strong>${numero}</strong></span> en base <span style='color: blue;'><strong>${base}</strong></span><br> ` +
      `Es igual a: <span style='color: rgb(234, 0, 255);'><strong>${resultado}</strong></span> en base <span style='color: rgb(234, 0, 255);'><strong>${salida}</strong></span>`;
  } else {
    mensaje = `El número <span style='color: red;'><strong>${numero}</strong></span> no es una base <span style='color: red;'><strong>${base}</strong></span> válida.`;
  }
  return mensaje;
}

function validarNumero(numero, base) {
  let esValido = false;
  base = base.toLowerCase(); // Convertir la base a minúsculas para evitar problemas

  switch (base) {
    case 'binario':
      esValido = /^-?[01]+$/.test(numero); // Permite opcionalmente el signo negativo
      break;
    case 'octal':
      esValido = /^-?[0-7]+$/.test(numero);
      break;
    case 'decimal':
      esValido = /^-?[0-9]+$/.test(numero);
      break;
    case 'hexadecimal':
      esValido = /^-?[0-9A-Fa-f]+$/.test(numero);
      break;
    default:
      esValido = false; // Si la base no es reconocida, retorna false
  }

  return esValido;
}
