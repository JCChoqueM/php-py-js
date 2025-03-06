function mostrarResultado(elemento, mensaje) {
  elemento.innerHTML = '';
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta');
  resultadoMensaje.textContent = mensaje;
  elemento.appendChild(resultadoMensaje);
}

function mostrar_esCapicua(elemento, mensaje) {
  elemento.innerHTML = '';
  const resultadoMensaje = document.createElement('p');
  resultadoMensaje.classList.add('respuesta22');
  resultadoMensaje.textContent = mensaje;
  elemento.appendChild(resultadoMensaje);
}
