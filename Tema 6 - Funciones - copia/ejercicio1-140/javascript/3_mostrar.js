// Función para construir el mensaje con formato
function construirMensaje(numeroOriginal, numero, esCapicua) {
  let mensaje = numeroOriginal < 0
    ? `El número <span style="color: red;">${numeroOriginal}</span> es negativo.<br>Al ignorar el signo: `
    : '';

  return mensaje + `El número <span style="color: ${esCapicua ? 'green' : 'red'};">${numero}</span> ${esCapicua ? 'es' : 'NO es'} capicúa.`;
}

// Función para mostrar el resultado en el contenedor con manejo de errores
function mostrarResultado(contenedor, mensaje, esError = false) {
  contenedor.innerHTML = ''; // Limpiar el contenido anterior
  const elemento = document.createElement('p');
  elemento.classList.add('respuesta');
  elemento.innerHTML = esError ? `<span style="color: red;">${mensaje}</span>` : mensaje;
  contenedor.appendChild(elemento);
}

// Función para obtener respuesta de PHP
async function obtenerRespuestaPHP(numero) {
  try {
    const response = await fetch('javascript/capicua.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `num=${numero}`,
    });

    return (await response.text()) === 'true'; // Devuelve booleano directamente
  } catch (error) {
    return new Error(error.message); // Devuelve un error en caso de fallo
  }
}



// Función principal para verificar si un número es capicúa en JS y PHP
async function mostrar_esCapicua(resultadoJS, resultadoPHP, datos, funcionSeleccion) {

  const numeroOriginal = datos.num1;
  const numero = Math.abs(numeroOriginal);

  // Evaluar en JavaScript
  const esCapicuaJS = funcionSeleccion(numero);
  mostrarResultado(resultadoJS, construirMensaje(numeroOriginal, numero, esCapicuaJS));

  // Evaluar en PHP
  const respuestaPHP = await obtenerRespuestaPHP(numero);
  if (respuestaPHP instanceof Error) {
    mostrarResultado(resultadoPHP, `Error en PHP: ${respuestaPHP.message}`, true);
  } else {
    mostrarResultado(resultadoPHP, construirMensaje(numeroOriginal, numero, respuestaPHP));
  }
}
