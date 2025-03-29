// Función principal con refactorización
/* SECTION mostrar_imprimir   */
async function mostrar_imprimir(Div_resultadoJS, Div_resultadoPHP, datos, funcionSeleccion) {
  const nombreFuncion = funcionSeleccion.name; // Obtener el nombre de la función JS

  // Evaluar en JavaScript
  /* section5 mostrar resultado JS  */
  const resultado_4funcionJS = funcionSeleccion(...Object.values(datos));
  let mensajeJS = construirMensaje(datos, resultado_4funcionJS);
  mostrarResultado(Div_resultadoJS, mensajeJS);
  /* !section5 fin - mostrar resultado JS  */

  // Evaluar en PHP con la misma función (si existe en PHP)
  try {
    const respuestaPHP = await obtenerRespuestaPHP(datos, nombreFuncion); //nombreFuncion es funcionSeleccion
    const resultadoJSON = JSON.parse(respuestaPHP); // Convertir la respuesta JSON a objeto

    if (resultadoJSON.error) {
      mostrarResultado(Div_resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
      console.log('resultadoPHP:', resultadoJSON.resultado);
      /* section5 mostrar resultado PHP */
      const resultado_4funcionePHP = resultadoJSON.resultado;
      let mensajePHP = construirMensaje(datos, resultado_4funcionePHP);
      mostrarResultado(Div_resultadoPHP, mensajePHP);
      /* !section5 fin - mostrar resultado PHP */
    }
  } catch (error) {
    mostrarResultado(Div_resultadoPHP, `Error en la petición: ${error.message}`, true);
  }
}
/* !SECTION fin - mostrar_imprimir */

/* section construirMensaje */
function construirMensaje(datos, resultado, funcionSeleccion) {
  const construirMensaje = 'construirMensaje_'; // Obtener el nombre de la función

  if (typeof window[construirMensaje] === 'function') {
    return window[construirMensaje](datos, resultado); // Llamar a la función dinámica
  } else {
    // Si la función no existe, mostrar un mensaje indicando que la función no se encuentra
    return `<span style="color: red;">Error: La función '${construirMensaje}' no está definida.</span>`;
  }
}
/* !section fin - construirMensaje */

/* SECTION fucion para insertar mensaje en la pagina Index */
function mostrarResultado(contenedor, mensaje, esError = false) {
  contenedor.innerHTML = ''; // Limpiar el contenido anterior
  const elemento = document.createElement('p');
  elemento.classList.add('respuesta');
  elemento.innerHTML = esError ? `<span style="color: red;">${mensaje}</span>` : mensaje;
  contenedor.appendChild(elemento);
}
/* !SECTION fin - fucion para insertar mensaje en la pagina Index */

/* section obtenerRespuestaPHP */
async function obtenerRespuestaPHP(objeto, funcionSeleccion) {
  try {
    const objetoJSON = JSON.stringify(objeto); // Convertimos el objeto a JSON

    const response = await fetch('javascript/4_funciones.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `datos=${encodeURIComponent(objetoJSON)}&funcion=${encodeURIComponent(funcionSeleccion)}`,
    });

    const resultadoTexto = await response.text(); // Obtener la respuesta en texto

    return resultadoTexto; // Retornar la respuesta
  } catch (error) {
    console.error('Error en la petición PHP:', error.message);
    return new Error(error.message); // Devolver el error como instancia de Error
  }
}
/* !section fin - obtenerRespuestaPHP */
