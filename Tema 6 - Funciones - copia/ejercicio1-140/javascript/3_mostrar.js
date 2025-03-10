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

// Función base para el mensaje de número primo
function construirMensaje_esPrimo(datos, resultado) {
  let absInput1 = Math.abs(datos.num1);
  let esPrimoAbsInput1 = funcion_esPrimo(absInput1);
  let color = esPrimoAbsInput1 ? "style='color: green;'" : "style='color: red;'";
  let mensaje = '<span>';

  if (datos.num1 > 1) {
    mensaje += `El número <span ${color}>${datos.num1}</span>` + (resultado ? ' es primo.' : ' NO es primo.');
  } else {
    mensaje += `En matemáticas, un número primo es un número natural mayor que <span style='color: green;'>1</span>, el número <span style='color: red;'>${datos.num1}</span> no es primo.`;

    if (datos.num1 !== 0 && datos.num1 !== 1) {
      mensaje += `<br><br><span ${color}>Ignorando el signo:</span><br>`;
      mensaje += `El número <span ${color}>${absInput1}</span>` + (esPrimoAbsInput1 ? ' es primo.' : ' NO es primo.');
    }
  }

  mensaje += '</span>';
  return mensaje;
}

// Función base para el mensaje de número capicúa
function construirMensaje_esCapicua(datos, resultado) {
  let mensaje = datos.num1 < 0 ? `El número <span style="color: red;">${datos.num1}</span> es negativo.<br>Al ignorar el signo: ` : '';
  mensaje += `El número <span style="color: ${resultado ? 'green' : 'red'};">${Math.abs(datos.num1)}</span> ${
    resultado ? 'es' : 'NO es'
  } capicúa.`;
  return mensaje;
}

// Función base para el mensaje de potencia
function construirMensaje_potencia(datos, resultado) {
  return `El número <span style="color: blue;">${datos.num1}</span> elevado a la potencia <span style="color: blue;">${datos.num2}</span> es: <span style="color: green;">${resultado}</span>.`;
}

// Función base para el mensaje de dígitos
function construirMensaje_digitos(datos, resultado) {
  return `El número <span style="color: blue;">${datos.num1}</span> tiene <span style="color: green;">${resultado}</span> dígito(s).`;
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
    console.log(resultadoJSON);

    if (resultadoJSON.error) {
      mostrarResultado(resultadoPHP, `Error en PHP: ${resultadoJSON.error}`, true);
    } else {
      mostrarResultado(resultadoPHP, construirMensaje(datos, resultadoJSON.resultado));
    }
  } catch (error) {
    mostrarResultado(resultadoPHP, `Error en la petición: ${error.message}`, true);
  }
}
