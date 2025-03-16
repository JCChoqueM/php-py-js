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
function construirMensaje_siguientePrimo(datos, resultado) {
  console.log(resultado);
  const input1 = parseInt(datos.num1); // Asegurar que es un número entero
  const color = input1 >= 0 ? "style='color: green;'" : "style='color: red;'";
  let mensaje = '<span>';

  if (input1 > 1) {
    mensaje += `El número ingresado es: <span ${color}>${input1}</span>.<br>
      El siguiente número primo es: <span style='color: green;'>${resultado}</span>.`;
  } else {
    mensaje += `El número ingresado es: <span ${color}>${input1}</span>.<br>
      Por definición, el siguiente número primo es: <span style='color: green;'>2</span>.`;
  }

  mensaje += '</span>';
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
function construirMensaje_voltea(input1, resultado) {
  input1 = parseInt(input1.num1); // Asegurar que sea un número entero

  if (isNaN(input1)) {
    return 'Error: Ingrese un número válido.';
  }
  const color = input1 >= 0 ? 'color: green;' : 'color: red;';

  return `<span>
      Número Ingresado: <span style="${color}">${input1}</span>.<br>
      Volteado literal: <span style="${color}">${resultado[0]}</span><br>
      Volteado numeral: <span style="${color}">${resultado[1]}</span>
    </span>`;
}
/* !section2 fin - 6.-voltea */

/* section 7.-digitoN*/

function construirMensaje_digitoN(datos, resultado) {
  let centrar = "style='text-align: center;'";
  let rojo = "style='color: red;'";
  let verde = "style='color: darkgreen;'";
  let azul = "style='color: blue;'";
  let negro = "style='color: black;'";
  let mensajeError = '';
  let input1 = datos.num1;
  let input2 = datos.num2;
  console.log(input2);
  let nDigito = funcion_digitos(input1);

  mensajeError = `<br><div ${centrar}>El numero ${input1} tiene <span ${verde}> ${
    nDigito == 1 ? 'la posición.' : 'las siguientes posiciones.'
  } </span> <br> ${crearTabla(Math.abs(input1), 0, input2)} </div>`;

  switch (true) {
    case input2 > nDigito - 1 || input2 < 0:
      mensajeError += `<span ${rojo}>No se puede buscar la posición ${input2}</span>.`;
      break;
    default:
      mensajeError += `<span ${azul}>El número en la posición ${input2} es: <span ${negro}>${Math.abs(resultado)}</span></span>.`;
      break;
  }
  return mensajeError;
}

/* !section fin - 7.-digitoN*/

/* section2 8.-posicionDeDigito */
function construirMensaje_posicionDeDigito(datos, resultado) {
  const input1 = parseInt(datos.num1);
  const input2 = parseInt(datos.num2);

  const estilos = {
    centrar: "style='text-align: center;'",
    rojo: "style='color: red;'",
    verde: "style='color: darkgreen;'",
    azul: "style='color: blue;'",
    negro: "style='color: black;'",
  };

  if (input2 < 0 || input2 > 9) {
    return `<span ${estilos.rojo}>
                  Número ingresado: ${input1}.<br>
                  Solo se permiten números positivos de 1 dígito.<br>
                  '${input2}' no es válido para la búsqueda.
                </span>`;
  }

  const [posicionIzqDer, posicionDerIzq] = resultado;

  return `
        <br>
        <div ${estilos.centrar}>
            <br>
            <span ${estilos.azul}>
                Izquierda a Derecha<br>
                El número '${input2}' está en la posición: '${posicionIzqDer}'.<br>
                ${crearTabla(Math.abs(input1), 0, posicionIzqDer)}
            </span>
            <br>
            <span ${estilos.rojo}>
                Derecha a Izquierda<br>
                El número '${input2}' está en la posición: '${posicionDerIzq}'.<br>
                ${crearTablaReves(Math.abs(input1), 0, posicionDerIzq)}
            </span>
        </div>
    `;
}

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */
function construirMensaje_quitaPorDetras(datos, resultado) {
  input1 = parseInt(datos.num1);
  input2 = parseInt(datos.num2);
  console.log(resultado);
  const nDigito = funcion_digitos(input1);
  const centrar = "style='text-align: center;'";
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  let mensajeError = '';
  const digitoS = input2 === 1 ? 'dígito' : 'dígitos';
  mensajeError = `<div ${centrar}>`;
  mensajeError += `El número ${input1} tiene <span ${verde}>${nDigito} ${digitoS}.</span> <br>`;
  mensajeError += crearTablaReves(Math.abs(input1), 1);
  if (input2 === 0) {
    mensajeError += `<span ${rojo}>Quitar ${input2} dígitos nos dará el mismo número ${input1}</span><br>`;
    mensajeError += crearTablaReves(Math.abs(input1), 1);
  } else if (input2 > nDigito) {
    mensajeError += `<span ${rojo}>No se puede quitar ${input2} dígitos por detrás</span>`;
  } else if (input2 < 0) {
    mensajeError += `<span ${rojo}>La cantidad de números a quitar no puede ser negativa</span>`;
  } else if (input2 === nDigito) {
    mensajeError += `<span ${rojo}>Quitar ${input2} dígitos resultará en 0</span>`;
  } else {
    mensajeError += `<span ${verde}>El número ${input1} menos ${input2} ${digitoS} es: ${resultado}.</span>`;
    mensajeError += crearTablaReves(resultado, 1);
  }
  mensajeError += `</div>`;
  return mensajeError;
}
/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */
function construirMensaje_quitaPorDelante(datos, resultado) {
  input1 = parseInt(datos.num1);
  input2 = parseInt(datos.num2);
  const nDigito = funcion_digitos(input1);
  const centrar = "style='text-align: center;'";
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  let mensajeError = '';

  const digitoS = input2 === 1 ? 'dígito' : 'dígitos';
  mensajeError = `<div ${centrar}>`;
  mensajeError += `El número ${input1} tiene <span ${verde}>${nDigito} ${digitoS}.</span> <br>`;
  mensajeError += crearTabla(Math.abs(input1), 1);
  if (input2 === 0) {
    mensajeError += `<span ${rojo}>Quitar ${input2} dígitos nos dará el mismo número ${input1}</span><br>`;
    mensajeError += crearTabla(Math.abs(input1), 1);
  } else if (input2 > nDigito) {
    mensajeError += `<span ${rojo}>No se puede quitar ${input2} dígitos por delante</span>`;
  } else if (input2 < 0) {
    mensajeError += `<span ${rojo}>La cantidad de números a quitar no puede ser negativa</span>`;
  } else if (input2 === nDigito) {
    mensajeError += `<span ${rojo}>Quitar ${input2} dígitos resultará en 0</span>`;
  } else {
    mensajeError += `<span ${verde}>El número ${input1} menos ${input2} ${digitoS} es: ${resultado}.</span>`;
    mensajeError += crearTabla(resultado, 1);
  }
  mensajeError += `</div>`;
  return mensajeError;
}
/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */
function construirMensaje_pegaPorDetras(datos, resultado) {
  input1 = parseInt(datos.num1, 10);
  input2 = parseInt(datos.num2, 10);
  const centrar = "style='text-align: center;'";
  const rojo = "style='color: red;'";
  const verde = "style='color: darkgreen;'";
  const negro = "style='color: black;'";
  const morado = "style='color: purple;'";
  const naranja = "style='color: brown'";

  let mensajeError = '';

  const nDigito = funcion_digitos(input2);
  if (input2 >= 0 && nDigito === 1) {
    mensajeError += `<span ${centrar}>`;
    mensajeError += `<span ${morado}>${input1}</span> con <span ${naranja}>${input2}</span> pegado por detrás:<br>`;
    mensajeError += `<span ${verde}>`;
    if (input1 === 0) {
      mensajeError += `<span ${negro}>Numeral:</span> ${resultado}`;
      mensajeError += `<br><span ${negro}>Literal:</span> ${input1}${input2}`;
    } else {
      mensajeError += resultado;
    }
    mensajeError += '</span>';
    mensajeError += '</span>';
  } else {
    mensajeError += `<span ${rojo}>`;
    if (nDigito > 1) {
      mensajeError += 'El campo 2 no puede tener más de 1 dígito.<br>';
    }
    if (input2 < 0) {
      mensajeError += `El campo 2 no puede ser negativo:<span ${negro}> ${input1}${input2}</span>`;
    }
    mensajeError += '</span>';
  }
  return mensajeError;
}
/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */
function construirMensaje_pegaPorDelante(datos, resultado) {
  input1 = parseInt(datos.num1, 10);
  input2 = parseInt(datos.num2, 10);

  const centrar = 'text-align: center;';
  const rojo = 'color: red;';
  const verde = 'color: darkgreen;';
  const negro = 'color: black;';
  const morado = 'color: purple;';
  const naranja = 'color: brown;';
  let mensajeError = '';
  const nDigito = funcion_digitos(input2);
  if (nDigito === 1) {
    mensajeError += `<span style='${centrar}'>`;
    mensajeError += `<span style='${morado}'>${input1}</span> con <span style='${naranja}'>${input2}</span> pegado por delante:<br>`;
    mensajeError += `<span style='${verde}'>`;
    if (input1 < 0) {
      mensajeError = '<span>';
      mensajeError += `<span style='${rojo}'>El pegado de ${input2} delante de: ${input1} tiene distintas soluciones</span>`;
      if (input2 === 0) {
        mensajeError += '<span>';
        mensajeError += `<br>Numeral: <span style='${rojo}'>${input1}</span>`;
        mensajeError += `<br>Literal:  <span style='${rojo}'>-${input2}${Math.abs(input1)}</span>`;
        mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
        mensajeError += '</span>';
      } else if (input2 > 0) {
        mensajeError += '<span>';
        mensajeError += `<br>Numeral:  <span style='${rojo}'>-${input2}${Math.abs(input1)}</span>`;
        mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
        mensajeError += '</span>';
      } else if (input2 < 0) {
        mensajeError += '<span>';
        mensajeError += `<br>Literal: <span style='${rojo}'>${input2}${input1}</span>`;
        mensajeError += `<br>Literal:  <span style='${rojo}'>-${input2}${Math.abs(input1)}</span>`;
        mensajeError += '</span>';
      }
      mensajeError += '</span>';
    } else {
      if (input2 === 0) {
        mensajeError += `<span style='${negro}'>Numeral:</span> ${resultado}`;
        mensajeError += `<br><span style='${negro}'>Literal:</span> ${input2}${input1}`;
      } else {
        mensajeError += `caso: ${resultado}`;
      }
    }
    mensajeError += '</span>';
    mensajeError += '</span>';
  } else {
    mensajeError += `<span style='${rojo}'>`;
    if (nDigito > 1) {
      mensajeError += 'El campo 2 no puede tener más de 1 dígito.<br>';
    }
    mensajeError += '</span>';
  }
  return mensajeError;
}
/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */
function construirMensaje_trozoDeNumero(datos, resultado) {
  let centrar = "style='text-align: center;'";
  let mensajeError = `<span ${centrar}>`;

  // Verificar si los datos son números válidos
  if (!Number.isInteger(parseInt(datos.num1)) || !Number.isInteger(parseInt(datos.num2)) || !Number.isInteger(parseInt(datos.num3))) {
    return 'Error: Todos los valores deben ser números enteros.';
  }

  let valor = parseInt(datos.num1);
  let valor2 = parseInt(datos.num2);
  let valor3 = parseInt(datos.num3);
  let digitosTotales = funcion_digitos(valor) - 1;

  // Verificar si los valores están dentro del rango esperado
  if (valor2 < 0 || valor3 < 0) {
    return `Error: Los valores inicial (${valor2}) y final (${valor3}) no pueden ser negativos.`;
  }

  if (valor2 > digitosTotales || valor3 > digitosTotales) {
    return `Error: Los valores inicial (${valor2}) y final (${valor3}) deben estar en el rango [0, ${digitosTotales}].`;
  }

  if (valor2 > valor3) {
    return `Error: El valor inicial (${valor2}) no puede ser mayor que el final (${valor3}).`;
  }

  // Si las validaciones son correctas, construir el mensaje
  mensajeError += crearTablaTrozo(Math.abs(valor), 0, valor2, valor3);
  mensajeError += resultado;
  mensajeError += '</span>';

  return mensajeError;
}

/* !section fin - 13.-trozoDeNumero */
/* section2 14.-juntaNumeros */
function construirMensaje_juntaNumeros(datos, resultado) {
  const input1 = parseInt(datos.num1, 10);
  const input2 = parseInt(datos.num2, 10);
  const centrar = 'text-align: center;';
  const rojo = 'color: red;';
  const azul = 'color: blue;';

  let mensajeError = '';
  
  // Generar el estado basado en los valores de input1 y input2
  const estado2 = (input1 === 0 ? 'C' : input1 > 0 ? 'P' : 'N') + (input2 === 0 ? 'C' : input2 > 0 ? 'P' : 'N');

  let pegado1 = '';
  let pegado2 = '';

  mensajeError = `<span style="${centrar}">`;
  mensajeError += `El pegado de los números <span style="${rojo}">${input1}</span> y <span style="${azul}">${input2}</span> es:<br>`;

  // Definir el comportamiento para cada caso
  const pegado = {
    'CC': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: 0`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: 0`;
    },
    'CP': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: ${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: ${funcion_pegaPorDelante(input1, input2)}`;
    },
    'PC': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: ${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: ${funcion_pegaPorDelante(input1, input2)}`;
    },
    'CN': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Literal: ${color('-', 2)}${color(input1, 1)}${color(Math.abs(input2), 2)}<br>Numeral: -${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: ${funcion_pegaPorDelante(input1, input2)}`;
    },
    'NC': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: ${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 1)}${color(input1, 1)}<br>Literal: ${color('-', 1)}${color(input2, 2)}${color(Math.abs(input1), 1)}<br>Numeral: -${funcion_pegaPorDelante(input1, input2)}`;
    },
    'PP': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: ${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: ${funcion_pegaPorDelante(input1, input2)}`;
    },
    'PN': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: -${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: ${funcion_pegaPorDelante(input1, input2)}`;
    },
    'NN': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Literal: ${color('-', 2)}${color('-', 1)}${color(Math.abs(input1), 1)}${color(Math.abs(input2), 2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Literal: ${color('-', 1)}${color('-', 2)}${color(Math.abs(input2), 2)}${color(Math.abs(input1), 1)}`;
    },
    'NP': () => {
      pegado1 = `Literal: ${color(input1, 1)}${color(input2, 2)}<br>Numeral: ${funcion_pegaPorDetras(input1, input2)}`;
      pegado2 = `Literal: ${color(input2, 2)}${color(input1, 1)}<br>Numeral: -${funcion_pegaPorDelante(input1, input2)}`;
    },
  };

  // Ejecutar el caso correspondiente
  if (pegado[estado2]) {
    pegado[estado2]();
  } else {
    mensajeError = 'Revisame, algo pasó';
  }

  // Crear tabla y añadir mensaje
  mensajeError += crearTablaPegado(pegado1, pegado2);
  mensajeError += '</span>';

  return mensajeError;
}

function color(numero, mn) {
  const naranja = 'color: red;';
  const morado = 'color: blue;';
  const style = mn === 1 ? naranja : morado;
  return `<span style="${style}">${numero}</span>`;
}

/* !section2 fin - 14.-juntaNumeros */
