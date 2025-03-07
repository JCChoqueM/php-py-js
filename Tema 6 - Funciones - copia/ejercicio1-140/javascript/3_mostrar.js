function mostrarError(resultadoJS, mensaje) {
  resultadoJS.innerHTML = '';
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta');
  resultadoMensaje.textContent = mensaje;
  resultadoJS.appendChild(resultadoMensaje);
}

function mostrar_esCapicua(resultadoJS, datos, funcionSeleccion) {
  resultadoJS.innerHTML = ''; // Limpiar el contenedor de resultados

  // Comprobar si el número es negativo
  let numero = Math.abs(datos.num1);
  let mensaje = '';

  // Crear el elemento para mostrar el número
  const numeroElemento = document.createElement('span');
  numeroElemento.textContent = numero;

  // Verificar si el número es negativo y actualizar el mensaje
  if (datos.num1 < 0) {
    mensaje = `El número <span style="color: red;">${datos.num1}</span> es negativo.<br>Al ignorar el signo: `;
    numeroElemento.style.color = 'red';
  }

  // Verificar si el número es capicúa
  const esCapicua = funcionSeleccion(numero);
  mensaje += `El número <span style="color: ${esCapicua ? 'green' : 'red'};">${numero}</span> ${esCapicua ? 'es' : 'NO es'} capicúa.`;

  // Crear y agregar el mensaje al contenedor de resultados
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta');
  resultadoMensaje.innerHTML = mensaje;
  resultadoJS.appendChild(resultadoMensaje);
}
