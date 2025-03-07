function mostrarError(resultadoJS, mensaje) {
  resultadoJS.innerHTML = '';
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta');
  resultadoMensaje.textContent = mensaje;
  resultadoJS.appendChild(resultadoMensaje);
}

function mostrar_esCapicua(resultadoJS, datos, funcionSeleccion) {
  resultadoJS.innerHTML = '';
  let mensaje = '';

  // Creamos el elemento donde se mostrará el número
  const numeroElemento = document.createElement('span');

  // Comprobamos si el número es negativo
  if (datos.num1 < 0) {
    mensaje = `El número <span style="color: red;">${datos.num1}</span> es negativo.<br>Al ignorar el signo:`;
    numeroElemento.textContent = Math.abs(datos.num1); // Mostrar el número sin signo
    numeroElemento.style.color = 'red'; // Si es negativo, lo mostramos en rojo
    datos.num1 = Math.abs(datos.num1); // Ignorar el signo para comprobar si es capicúa
  } else {
    // Si no es negativo, simplemente mostramos el número sin cambiarlo
    numeroElemento.textContent = datos.num1;
  }

  // Verificamos si el número es capicúa
  const esCapicua = funcionSeleccion(datos.num1); // Aquí se pasa la función de verificación

  if (esCapicua) {
    mensaje += ` El número <span style="color: green;">${datos.num1}</span> es capicúa.`;
    numeroElemento.style.color = 'green'; // Si es capicúa, el color será verde
  } else {
    mensaje += ` El número <span style="color: red;">${datos.num1}</span> NO es capicúa.`;
    numeroElemento.style.color = 'red'; // Si no es capicúa, el color será rojo
  }

  // Añadimos el número al mensaje
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta');
  resultadoMensaje.innerHTML = mensaje; // Usamos innerHTML para que se apliquen los estilos de color
  resultadoJS.appendChild(resultadoMensaje); // Finalmente lo mostramos en el contenedor
}
