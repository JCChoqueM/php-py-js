
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
        negro: "style='color: black;'"
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
  