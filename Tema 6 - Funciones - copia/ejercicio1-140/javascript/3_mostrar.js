// Función para construir el mensaje con formato

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

    return resultadoTexto; // Retornar la respuesta
  } catch (error) {
    console.error('Error en la petición PHP:', error.message);
    return new Error(error.message); // Devolver el error como instancia de Error
  }
}

// Función principal
async function mostrar_esCapicua(resultadoJS, resultadoPHP, datos, funcionSeleccion) {
  const nombreFuncion = funcionSeleccion.name; // Obtener el nombre de la función JS

  // Evaluar en JavaScript
  const esVerdaderoJS = funcionSeleccion(datos);
  mostrarResultado(resultadoJS, construirMensaje(nombreFuncion, datos, esVerdaderoJS));

  // Evaluar en PHP con la misma función (si existe en PHP)
  try {
    const respuestaPHP = await obtenerRespuestaPHP(datos, nombreFuncion);
    const resultadoJSON = JSON.parse(respuestaPHP); // Convertir la respuesta JSON a objeto
    console.log(resultadoJSON);
    if (resultadoJSON.error) {
      mostrarResultado(resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
      mostrarResultado(resultadoPHP, construirMensaje(nombreFuncion, datos, resultadoJSON.resultado));
    }
  } catch (error) {
    mostrarResultado(resultadoPHP, `Error en la petición: ${error.message}`, true);
  }
}
async function mostrar_potencia(resultadoJS, resultadoPHP, datos, funcionSeleccion) {
  const nombreFuncion = funcionSeleccion.name; // Obtener el nombre de la función JS

  // Evaluar en JavaScript
  const esVerdaderoJS = funcionSeleccion(datos);
  mostrarResultado(resultadoJS, construirMensaje(nombreFuncion, datos, esVerdaderoJS));

  // Evaluar en PHP con la misma función (si existe en PHP)
  try {
    const respuestaPHP = await obtenerRespuestaPHP(datos, nombreFuncion);
    const resultadoJSON = JSON.parse(respuestaPHP); // Convertir la respuesta JSON a objeto
    console.log(resultadoJSON);
    if (resultadoJSON.error) {
      mostrarResultado(resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
      mostrarResultado(resultadoPHP, construirMensaje(nombreFuncion, datos, resultadoJSON.resultado));
    }
  } catch (error) {
    mostrarResultado(resultadoPHP, `Error en la petición: ${error.message}`, true);
  }
}

// Función dinámica para construir mensajes según la función evaluada
function construirMensaje(nombreFuncion, datos, resultado) {
  let mensajeBase = '';
  switch (nombreFuncion) {
    case 'funcion_esCapicua':
      mensajeBase = datos.num1 < 0 ? `El número <span style="color: red;">${datos.num1}</span> es negativo.<br>Al ignorar el signo: ` : '';

      mensajeBase += `El número <span style="color: ${resultado ? 'green' : 'red'};">${Math.abs(datos.num1)}</span> ${
        resultado ? 'es' : 'NO es'
      } capicúa.`;
      return mensajeBase;
    case 'funcion_potencia':
      mensajeBase = `El número <span style="color: blue;">${datos.num1}</span> elevado a la potencia <span style="color: blue;">${datos.num2}</span> es: `;
      return mensajeBase + `<span style="color: green;">${resultado}</span>.`;
    default:
      return (
        mensajeBase +
        `El resultado para <span style="color: blue;">${nombreFuncion}</span> es: <span style="color: ${
          resultado ? 'green' : 'red'
        };">${resultado}</span>.`
      );
  }
}
