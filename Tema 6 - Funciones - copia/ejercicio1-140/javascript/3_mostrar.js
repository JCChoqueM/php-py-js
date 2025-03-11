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


/* section 1.-esCapicua */
function construirMensaje_esCapicua(datos, resultado) {
  let mensaje = datos.num1 < 0 ? `El número <span style="color: red;">${datos.num1}</span> es negativo.<br>Al ignorar el signo: ` : '';
  mensaje += `El número <span style="color: ${resultado ? 'green' : 'red'};">${Math.abs(datos.num1)}</span> ${
    resultado ? 'es' : 'NO es'
  } capicúa.`;
  return mensaje;
}
/* !section fin - 1.-esCapicua */

/* section2 2.-esPrimo */
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
/* !section2 fin - 2.-esPrimo */

/* section 3.-siguientePrimo */
function construirMensaje_siguientePrimo(datos,resultado) {
  console.log(resultado);
  const input1 = parseInt(datos.num1); // Asegurar que es un número entero
  const color = input1 >= 0 ? "style='color: green;'" : "style='color: red;'";
  let mensaje = "<span>";

  if (input1 > 1) {
    mensaje += `El número ingresado es: <span ${color}>${input1}</span>.<br>
    El siguiente número primo es: <span style='color: green;'>${resultado}</span>.`;
  } else {
    mensaje += `El número ingresado es: <span ${color}>${input1}</span>.<br>
    Por definición, el siguiente número primo es: <span style='color: green;'>2</span>.`;
  }

  mensaje += "</span>";
  return mensaje;
}

/* !section fin - 3.-siguientePrimo */
/* section2 4.-potencia */
function construirMensaje_potencia(datos, resultado) {
  return `El número <span style="color: blue;">${datos.num1}</span> elevado a la potencia <span style="color: blue;">${datos.num2}</span> es: <span style="color: green;">${resultado}</span>.`;
}
/* !section2 fin - 4.-potencia */

/* section 5.-digitos */
function construirMensaje_digitos(datos, resultado) {
  return `El número <span style="color: blue;">${datos.num1}</span> tiene <span style="color: green;">${resultado}</span> dígito(s).`;
}
/* !section fin - 5.-digitos */

/* section2 6.-voltea */
function construirMensaje_voltea(input1,resultado) {

  input1 = parseInt(input1.num1); // Asegurar que sea un número entero

  if (isNaN(input1)) {
    return "Error: Ingrese un número válido.";
  }
  const color = input1 >= 0 ? "color: green;" : "color: red;";

  return `<span>
    Número Ingresado: <span style="${color}">${input1}</span>.<br>
    Volteado literal: <span style="${color}">${resultado[0]}</span><br>
    Volteado numeral: <span style="${color}">${resultado[1]}</span>
  </span>`;
}
/* !section2 fin - 6.-voltea */

/* section 7.-digitoN*/

/* !section fin - 7.-digitoN*/

/* section2 8.-posicionDeDigito */

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */

/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */

/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */

/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */

/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */

/* !section fin - 13.-trozoDeNumero */
/* section2 14.-juntaNumeros */

/* !section2 fin - 14.-juntaNumeros */