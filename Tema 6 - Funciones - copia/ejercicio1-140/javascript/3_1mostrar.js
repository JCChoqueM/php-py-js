// Función para mostrar el resultado en el contenedor con manejo de errores
function mostrarResultado(contenedor, mensaje, esError = false) {
  contenedor.innerHTML = ''; // Limpiar el contenido anterior
  const elemento = document.createElement('p');
  elemento.classList.add('respuesta');
  elemento.innerHTML = esError ? `<span style="color: red;">${mensaje}</span>` : mensaje;
  contenedor.appendChild(elemento);
}

// Función para obtener respuesta de PHP
async function obtenerRespuestaPHP(objeto, funcionPHP) {
  try {
    const objetoJSON = JSON.stringify(objeto); // Convertimos el objeto a JSON

    const response = await fetch('javascript/4_funciones.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `datos=${encodeURIComponent(objetoJSON)}&funcion=${encodeURIComponent(funcionPHP)}`,
    });

    const resultadoTexto = await response.text(); // Obtener la respuesta en texto
    console.log('Respuesta de PHP:', resultadoTexto);
    return resultadoTexto; // Retornar la respuesta
  } catch (error) {
    console.error('Error en la petición PHP:', error.message);
    return new Error(error.message); // Devolver el error como instancia de Error
  }
}

// Función para construir el mensaje según el tipo de función
function construirMensaje(datos, resultado) {
  const seleccion = document.getElementById('miSelect').value; // Obtener el valor seleccionado

  // Crear el nombre de la función dinámica
  const funcionNombre = 'construirMensaje_' + seleccion;

  // Verificar si la función existe en el contexto global (window)
  if (typeof window[funcionNombre] === 'function') {
    return window[funcionNombre](datos, resultado); // Llamar a la función dinámica
  } else {
    // Si la función no existe, mostrar un mensaje indicando que la función no se encuentra
    return `<span style="color: red;">Error: La función '${seleccion}' no está definida.</span>`;
  }
}

// Función principal con refactorización
async function mostrar_imprimir(resultadoJS, resultadoPHP, datos, funcionSeleccion) {
  const nombreFuncion = funcionSeleccion.name; // Obtener el nombre de la función JS

  // Evaluar en JavaScript
  const esVerdaderoJS = funcionSeleccion(...Object.values(datos));
  mostrarResultado(resultadoJS, construirMensaje(datos, esVerdaderoJS));

  // Evaluar en PHP con la misma función (si existe en PHP)
  try {
    const respuestaPHP = await obtenerRespuestaPHP(datos, nombreFuncion);
    const resultadoJSON = JSON.parse(respuestaPHP); // Convertir la respuesta JSON a objeto

    if (resultadoJSON.error) {
      mostrarResultado(resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
      mostrarResultado(resultadoPHP, construirMensaje(datos, resultadoJSON.resultado));
    }
  } catch (error) {
    mostrarResultado(resultadoPHP, `Error en la petición: ${error.message}`, true);
  }
}
