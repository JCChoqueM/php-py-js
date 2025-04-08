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

// Función para construir el mensaje según el tipo de función
function construirMensaje(datos, resultado, arrayGenerado) {
  const seleccion = document.getElementById('miSelect').value; // Obtener el valor seleccionado

  // Crear el nombre de la función dinámica
  const funcionNombre = 'construirMensaje_' + seleccion;

  // Verificar si la función existe en el contexto global (window)
  if (typeof window[funcionNombre] === 'function') {
    return window[funcionNombre](datos, resultado, arrayGenerado); // Llamar a la función dinámica
  } else {
    // Si la función no existe, mostrar un mensaje indicando que la función no se encuentra
    return `<span style="color: red;">Error: La función 'construirMensaje_${seleccion}' no está definida.</span>`;
  }
}

// Función principal con refactorización
async function mostrar_imprimir(resultadoJS, resultadoPHP, datos, funcionSeleccion) {
  const nombreFuncion = funcionSeleccion.name; // Obtener el nombre de la función JS

  const arrayGenerado = JSON.parse(sessionStorage.getItem('matrizGenerada')) || [];

  // Si todo está bien, procesamos los datos

  let esVerdaderoJS = '';
  if (funcionSeleccion === funcion_generaArrayBiInt) {
    esVerdaderoJS = funcionSeleccion(...Object.values(datos));
  } else {
    console.log(arrayGenerado)
    esVerdaderoJS = funcionSeleccion(arrayGenerado, datos);

  }
  // Evaluar en JavaScript
  console.log('respuestaJS:', esVerdaderoJS);
  mostrarResultado(resultadoJS, construirMensaje(datos, esVerdaderoJS, arrayGenerado));

  // Evaluar en PHP con la misma función (si existe en PHP)
  const datosCombinados = {
    arrayGenerado, // Primero añadimos el array generado
    ...datos, // Luego copiamos los datos del formulario
  };
  let respuestaPHP = null; // Inicializar respuestaPHP
  try {
    if (funcionSeleccion === funcion_generaArrayBiInt) {
      respuestaPHP = await obtenerRespuestaPHP(datos, nombreFuncion);
    } else {
      respuestaPHP = await obtenerRespuestaPHP(datosCombinados, nombreFuncion);
    }
    console.log(respuestaPHP);
    const resultadoJSON = JSON.parse(respuestaPHP); // Convertir la respuesta JSON a objeto

    if (resultadoJSON.error) {
      mostrarResultado(resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
 
      console.log('resultadoPHP:', resultadoJSON.resultado);
      mostrarResultado(resultadoPHP, construirMensaje(datos, resultadoJSON.resultado, arrayGenerado));
    }
  } catch (error) {
    mostrarResultado(resultadoPHP, `Error en la petición212: ${error.message}`, true);
  }
}
