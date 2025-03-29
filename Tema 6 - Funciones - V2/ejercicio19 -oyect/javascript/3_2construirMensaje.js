function construirMensaje_(datos, resultado) {
  let numero = datos.num1;
  const base = document.querySelector('#seleccion1').value;
  const salida = document.querySelector('#seleccion2').value;
  let mensaje = '';

  // Definir los colores de las bases
  const coloresBase = {
    Decimal: 'blue',
    Binario: 'green',
    Hexadecimal: 'orangered',
    Octal: 'purple'
  };

  // Verificar si el número es válido
  if (validarNumero(numero, base)) {
    mensaje =
      `El número <span style='color: ${coloresBase[base]};'><strong>${numero}</strong></span> en base <span style='color: ${coloresBase[base]};'><strong>${base}</strong></span><br> ` +
      `Es igual a: <span style='color: ${coloresBase[salida]};'><strong>${resultado}</strong></span> en base <span style='color: ${coloresBase[salida]};'><strong>${salida}</strong></span>`;
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
