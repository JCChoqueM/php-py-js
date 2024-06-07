// Función genérica para validar entrada y actualizar mensajes de error
function validarInputYMostrarError(mensajeError) {
  // Establecer el mensaje de error en el input
  const resultadoDiv1 = document.getElementById("resultadoJavaScript");
  const resultadoDiv2 = document.getElementById("resultadoPHP");
  const resultadoDiv3 = document.getElementById("resultadoPython");

  // Insertar el mensaje de error en cada elemento
  resultadoDiv1.innerHTML = mensajeError;
  resultadoDiv2.innerHTML = mensajeError;
  resultadoDiv3.innerHTML = mensajeError;
}
//SECTION - Inicio 1.- esCapicua
function validarInputEscapicua() {
  const input1 = parseInt(document.getElementById("num1").value);
  let esValido = (input1 >= 0 && input1 <= 9) || (input1 >= -9 && input1 <= -1);
  let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = isNaN(input1) ? "0" : "1";
  switch (estado) {
    case "0":
      mensajeError = "0-El campo están vacío. Por favor, ingrese número(s).";
      break;
    case "1":
      switch (true) {
        case esValido:
          if (input1 >= 0) {
            mensajeError = `<span>El numero ${input1} es un palindromo.</span>`;
          } else {
            mensajeError = `<span >El número ${input1} es negativo, pero al ignorar el signo, ${Math.abs(
              input1
            )} es un palíndromo.</span>`;
          }
          break;
        case !esValido:
          if (input1 >= 0) {
            mensajeError = `<span>Continuar</span>`;
          } else {
            mensajeError = `<span >El número ${input1} es negativo, pero al ignorar el signo, ${Math.abs(
              input1
            )} es: Continuar</span>`;
          }
          habilitarBoton = true;
          break;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  validarInputYMostrarError(mensajeError);
}
// !SECTION 1.- esCapicua

//SECTION - Inicio 2.- esPrimo
function validarInputEsPrimo() {
  const input1 = parseInt(document.getElementById("num1").value);
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = isNaN(input1) ? "0" : "1";
  switch (estado) {
    case "0":
      mensajeError = "0-El campo están vacío. Por favor, ingrese número(s).";
      break;
    case "1":
      if (input1 > 1) {
        mensajeError = `<span>El numero ${input1} es continuar.</span>`;
      } else {
        mensajeError = `En matemáticas, un número primo es un número natural mayor que 1, el numero
        <span ${rojo}>${input1}</span> no es primo`;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  validarInputYMostrarError(mensajeError);
}
// !SECTION 2.- esPrimo

//SECTION - Inicio 3.- siguientePrimo
function validarInputSiguientePrimo() {
  const input1 = parseInt(document.getElementById("num1").value);
  let centrar = "style='text-align: center;'";
  let izquierda = "style='text-align: left;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = isNaN(input1) ? "0" : "1";
  switch (estado) {
    case "0":
      mensajeError = "0-El campo están vacío. Por favor, ingrese número(s).";
      break;
    case "1":
      if (input1 > 1) {
        mensajeError = `<div ${izquierda}>
        El número ingresado es: <span ${verde}>${input1}</span>.<br>
        El siguiente número primo es: <span ${verde}>continuar</span>.
    </div>`;
      } else {
        mensajeError = `<div>
        El número ingresado es: <span ${rojo}>${input1}</span>.<br>
        Por definición, el siguiente número primo es: <span ${verde}>2</span>.
    </div>`;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  validarInputYMostrarError(mensajeError);
}
// !SECTION 3.- siguientePrimo

//SECTION - Inicio 4.- potencia
function validarInputPotencia() {
  const base = parseInt(document.getElementById("num1").value);
  const exponente = parseInt(document.getElementById("num2").value);

  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let letra = "style = 'font-size: 20px; font-weight: bold'";

  let mensajeError = "";
  const estado = (isNaN(base) ? "0" : "1") + (isNaN(exponente) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (exponente == 0) {
        if (base == 0) {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado tiene 2 valores:<br> 1 <br>e Indefinido</span>`;
        } else {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es: 1</span>`;
        }
      } else if (exponente < 0) {
        if (base == 0) {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es:<br><br>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>
              (${base})<sup>${Math.abs(exponente)}</sup>
            </span></mi>
        </mfrac>
    </math> =
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>${base}</span></mi>
        </mfrac>
    </math> = Indefinido
            </span>`;
        } else {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es:<br><br>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>
              (${base})<sup>${Math.abs(exponente)}</sup>
            </span></mi>
        </mfrac>
    </math> =
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>${Math.pow(base, Math.abs(exponente))}</span></mi>
        </mfrac>
    </math>
            </span>`;
        }
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  validarInputYMostrarError(mensajeError);
}
// !SECTION 4.- potencia

//SECTION - Inicio 5.- digitos
function validarInputDigitos() {
  const base = parseInt(document.getElementById("num1").value);
  const exponente = parseInt(document.getElementById("num2").value);

  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let letra = "style = 'font-size: 20px; font-weight: bold'";

  let mensajeError = "";
  const estado = (isNaN(base) ? "0" : "1") + (isNaN(exponente) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (exponente == 0) {
        if (base == 0) {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado tiene 2 valores:<br> 1 <br>e Indefinido</span>`;
        } else {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es: 1</span>`;
        }
      } else if (exponente < 0) {
        if (base == 0) {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es:<br><br>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>
              (${base})<sup>${Math.abs(exponente)}</sup>
            </span></mi>
        </mfrac>
    </math> =
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>${base}</span></mi>
        </mfrac>
    </math> = Indefinido
            </span>`;
        } else {
          mensajeError = `<span ${centrar}>(${base})<sup>${exponente}</sup> resultado es:<br><br>
          <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>
              (${base})<sup>${Math.abs(exponente)}</sup>
            </span></mi>
        </mfrac>
    </math> =
    <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mfrac ${letra}>
            <mi>1</mi>
            <mi><span>${Math.pow(base, Math.abs(exponente))}</span></mi>
        </mfrac>
    </math>
            </span>`;
        }
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  validarInputYMostrarError(mensajeError);
}
// !SECTION 5.- digitos

//SECTION - Inicio 6.- voltea

// !SECTION 6.- voltea
//SECTION - 7.-digitoN
function validarInputDigitoN(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const nDigito = contarDigitos(input1);
  const boton = document.getElementById("resolver");
  let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input2 > contarDigitos(input1) - 1) {
        mensajeError = `<br><div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "posicion." : "posiciones."
        }</span> <br>
        ${crearTabla(input1, 0)}
        </div>
        <span ${rojo}>No se puede buscar la posicon ${input2}</span>.`;
      } else if (input2 < 0) {
        mensajeError = `<span ${rojo}>el numero no puede ser negativo</span>`;
      } else {
        mensajeError = `Continuar:<br><div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "posicion." : "posiciones."
        }</span> <br>
        ${crearTabla(input1, 0)}
        <span ${verde}>Si se puede buscar la posicion ${input2}</span>.
        </div>`;
        habilitarBoton = true;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  boton.disabled = !habilitarBoton;
  validarInputYMostrarError(mensajeError);
}

//!SECTION fin 7.-digitoN

//SECTION - 8.- posicionDeDigito
function validarInputPosicionDeDigito(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const nDigito = contarDigitos(input1);
  const boton = document.getElementById("resolver");
  let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input2 > 9) {
        mensajeError = `<span ${rojo}>solo se permite ingresar numeros de 1 digito</span>`;
      } else if (input2 < 0) {
        mensajeError = `<span ${rojo}>el numero no puede ser negativo</span>`;
      } else {
        mensajeError = `Continuar:<br><div ${centrar}> 
        <span ${verde}>Si se puede buscar el digito ${input2}</span> en ${input1}.
        ${crearTabla(input1, 0)}
        </div>
       `;
        habilitarBoton = true;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  boton.disabled = !habilitarBoton;
  validarInputYMostrarError(mensajeError);
}

//!SECTION fin 8.-posicionDeDigito

//SECTION -  9.- quitaPorDetras
function validarInputQuitaPorDetras(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const nDigito = contarDigitos(input1);
  const boton = document.getElementById("resolver");
  let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input2 > nDigito) {
        mensajeError = `
        <div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "digito." : "digitos."
        }</span> <br>
        ${crearTablaReves(input1, 1)}
        <span ${rojo}>No se puede quitar ${input2} digitos por Detras</span>.
        </div>`;
      } else if (input2 < 0) {
        mensajeError = `<span ${rojo}>La cantidad de numeros a quitar no puede ser negativo</span>`;
      } else {
        mensajeError = `Continuar:<br><div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "digito." : "digitos."
        }</span> <br>
        ${crearTablaReves(input1, 1)}
        <span ${verde}>Si se puede quitar ${input2} digitos por Detras</span>.
        </div>`;
        habilitarBoton = true;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  // Verificar si el valor tiene la longitud adecuada

  boton.disabled = !habilitarBoton;
  validarInputYMostrarError(mensajeError);
}
//!SECTION fin 9.- quitaPorDetras

//SECTION - Inicio 10.- quitaPorDelante
function validarInputQuitaPorDelante(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const nDigito = contarDigitos(input1);
  const boton = document.getElementById("resolver");
  let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'";
  let mensajeError = "";
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      mensajeError = "01- El campo 1 está vacío.";
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input2 > nDigito) {
        mensajeError = `
        <div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "digito." : "digitos."
        }</span> <br>
        ${crearTabla(input1, 1)}
        <span ${rojo}>No se puede quitar ${input2} digitos por Delante</span>.
        </div>`;
      } else if (input2 < 0) {
        mensajeError = `<span ${rojo}>La cantidad de numeros a quitar no puede ser negativo</span>`;
      } else {
        mensajeError = `Continuar:<br><div ${centrar}>El numero ${input1} tiene <span ${verde}>${nDigito} ${
          nDigito == 1 ? "digito." : "digitos."
        }</span> <br>
        ${crearTabla(input1, 1)}
        <span ${verde}>Si se puede quitar ${input2} digitos por Delante</span>.
        </div>`;
        habilitarBoton = true;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  // Verificar si el valor tiene la longitud adecuada

  boton.disabled = !habilitarBoton;
  validarInputYMostrarError(mensajeError);
}
// !SECTION 10.- quitaPorDelante

//SECTION - Inicio 11.- pegaPorDetras
function validarInputPegaPorDetras(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const boton = document.getElementById("resolver");
  let esValido = (input2 >= 0 && input2 <= 9) || (input2 >= -9 && input2 <= -1);
  let mensajeError = "";
  let rojo = "style = 'color: red;'";
  let centrar = "style='text-align: center;'";

  // Combinaciones posibles y mensajes correspondientes
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");
  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      if (esValido) {
        mensajeError = "01- El campo 1 está vacío.";
      } else {
        mensajeError = `01- El campo 1 esta vacio <br><br> No se puede pegar 2 digitos`;
      }
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      switch (true) {
        case input1 == 0:
          mensajeError = `Input1 no puede ser 0<br>`;
          switch (true) {
            case input2 == 0:
              mensajeError += `
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
                  <span ${rojo}>${input2}</span> 
             </div>`;
              break;
            case esValido:
              if (input2 > 0) {
                mensajeError += `
              <div ${centrar}>
                   ${input1}<span ${rojo}>${input2}</span><br>
                   <span ${rojo}>${input2}</span>
              </div>`;
              } else {
                mensajeError += `
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              }
              break;
            case !esValido:
              if (input2 > 0) {
                mensajeError += `
              <div ${centrar}>
                   ${input1}<span ${rojo}>${input2}</span><br>
                  <span ${rojo}>${input2}</span> 
              </div>`;
              } else {
                mensajeError += `
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              }
              break;
          }
          break;
        case input1 > 0:
          switch (true) {
            case input2 == 0:
              mensajeError = `Continuar`;
              break;
            case esValido:
              if (input2 > 0) {
                mensajeError = `Continuar`;
              } else {
                mensajeError = `input2 no puede ser Negativo:<br>
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              }
              break;
            case !esValido:
              mensajeError = `No se puede pegar 2 digitos:<br>
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              break;
          }
          break;
        case input1 < 0:
          switch (true) {
            case input2 == 0:
              mensajeError = `Continuar`;
              break;
            case esValido:
              if (input2 > 0) {
                mensajeError = `Continuar`;
              } else {
                mensajeError = `input2 no puede ser Negativo:<br>
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              }
              break;
            case !esValido:
              mensajeError = `No se puede pegar 2 digitos:<br>
             <div ${centrar}>
                  ${input1}<span ${rojo}>${input2}</span><br>
             </div>`;
              break;
          }
          break;
        default:
          console.log("input1 no es un número válido");
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  // Habilitar o deshabilitar el botón según el estado del error
  boton.disabled = mensajeError !== "Continuar";

  validarInputYMostrarError(mensajeError);
}
// !SECTION 11.- pegaPorDetras

//SECTION - Inicio 12.- pegaPorDelante
function validarInputPegaPorDelante(input) {
  const input1 = parseInt(document.getElementById("num1").value);
  const input2 = parseInt(input.value);
  const boton = document.getElementById("resolver");
  let esValido = (input2 >= 0 && input2 <= 9) || (input2 >= -9 && input2 <= -1);
  let mensajeError = "";
  let rojo = "style = 'color: red;'";
  let centrar = "style='text-align: center;'";

  // Combinaciones posibles y mensajes correspondientes
  const estado = (isNaN(input1) ? "0" : "1") + (isNaN(input2) ? "0" : "1");

  switch (estado) {
    case "00":
      mensajeError =
        "00- Ambos campos están vacíos. Por favor, ingrese números.";
      break;
    case "01":
      if (esValido) {
        mensajeError = "01- El campo 1 está vacío.";
      } else {
        mensajeError = `01- El campo 1 esta vacio <br><br> No se puede pegar 2 digitos`;
      }
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      switch (true) {
        case input1 == 0:
          switch (true) {
            case input2 == 0:
              mensajeError = `Input2 no puede ser 0:<br>
             <div ${centrar}>
                  <span ${rojo}>${input2}</span>${input1}<br>
                  ${input1}  
             </div>`;
              break;
            case esValido:
              mensajeError = `Continuar`;
              break;
            case !esValido:
              mensajeError = `No se puede pegar 2 digitos:<br>
             <div ${centrar}>
                  <span ${rojo}>${input2}</span>${input1}<br> 
             </div>`;
              break;
          }
          break;
        case input1 > 0:
          switch (true) {
            case input2 == 0:
              mensajeError = `Input2 no puede ser 0:<br>
             <div ${centrar}>
                  <span ${rojo}>${input2}</span>${input1}<br>
                  ${input1}  
             </div>`;
              break;
            case esValido:
              mensajeError = `Continuar`;
              break;
            case !esValido:
              mensajeError = `No se puede pegar 2 digitos:<br>
             <div ${centrar}>
                  <span ${rojo}>${input2}</span>${input1}<br> 
             </div>`;
              break;
          }
          break;
        case input1 < 0:
          mensajeError = `Input1 no puede ser Negativo:<br>`;
          switch (true) {
            case input2 == 0:
              mensajeError += `
             <div ${centrar}>
                  <span ${rojo}>-</span>${input2}<span ${rojo}>${Math.abs(
                input1
              )}</span><br>
                 ${input2}<span ${rojo}>${input1}</span><br>
                  <span ${rojo}>${input1}</span> 
             </div>`;
              break;
            case esValido:
              mensajeError += `
             <div ${centrar}>
                  <span ${rojo}>-</span>${input2}<span ${rojo}>${Math.abs(
                input1
              )}</span><br>
                 ${input2}<span ${rojo}>${input1}</span><br> 
             </div>`;
              break;
            case !esValido:
              mensajeError += `
             <div ${centrar}>
                  <span ${rojo}>-</span>${input2}<span ${rojo}>${Math.abs(
                input1
              )}</span><br>
                 ${input2}<span ${rojo}>${input1}</span><br>
             </div>`;
              break;
          }
          break;
        default:
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }

  // Habilitar o deshabilitar el botón según el estado del error
  boton.disabled = mensajeError !== "Continuar";

  validarInputYMostrarError(mensajeError);
}

// !SECTION 12.- pegaPorDelante

//SECTION - Inicio 13.- trozoDeNumero
function validarInputTrozoDeNumero() {
  console.log(typeof document.getElementById("num1").value);
  const valor = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(document.getElementById("num2").value);
  const valor3 = parseInt(document.getElementById("num3").value);
  let digitos = contarDigitos(valor) - 1;
  const boton = document.getElementById("resolver");

  let mensajeError = "";
  // Verificar si el valor tiene la longitud adecuada
  const estado =
    (isNaN(valor) ? "0" : "1") +
    (isNaN(valor2) ? "0" : "1") +
    (isNaN(valor3) ? "0" : "1");
  const estado2 =
    (valor2 < 0 ? "N" : valor2 > digitos ? "F" : "I") +
    (valor3 < 0 ? "N" : valor3 > digitos ? "F" : "I");

  switch (estado) {
    case "000":
      mensajeError = "Por favor, ingrese números en todos los campos.";
      break;
    case "100":
      mensajeError = "Llene los campos 2 y 3.";
      break;
    case "010":
      mensajeError = "Llene los campos 1 y 3.";
      break;
    case "001":
      mensajeError = "Llene los campos 1 y 2.";
      break;
    case "011":
      mensajeError = "Llene el campo 1.";
      break;
    case "101":
      mensajeError = "Llene el campo 2.";
      break;
    case "110":
      mensajeError = "Llene el campo 3.";
      break;
    case "111":
      switch (estado2) {
        case "NN":
          mensajeError = "input2 e input 3 no pueden ser negativos";
          break;
        case "NI":
          mensajeError = "input2 no puede ser negativo";
          break;
        case "IN":
          mensajeError = "input3 no puede ser negativo";
          break;
        case "FI":
          mensajeError = "El campo 2 no está en el rango.";
          break;
        case "IF":
          mensajeError = "El campo 3 no está en el rango.";
          break;
        case "FF":
          mensajeError = "El campo 2 y 3 no están en el rango permitido.";
          break;
        case "FN":
          mensajeError =
            "El campo 2 no está en el rango y input3 no puede ser negativo.";
          break;
        case "NF":
          mensajeError =
            "input2 no puede ser negativo y el campo 3 no está en el rango.";
          break;
        case "II":
          if (valor2 >= 0 && valor2 <= digitos) {
            if (valor3 >= valor2 && valor3 <= digitos) {
              mensajeError = "Puede Continuar2";
              boton.disabled = false;
            } else {
              mensajeError = "input2 no puede ser mayor que input3";
            }
          }
          break;
        default:
          mensajeError = "revisame algo paso";
      }
      break;
  }

  if (estado !== "111" || estado2 !== "II") {
    boton.disabled = true;
  }

  validarInputYMostrarError(mensajeError);
}

// !SECTION 13.- trozoDeNumero

//SECTION - Inicio 14.- juntaNumeros

// !SECTION 14.- juntaNumeros

//SECTION -  Funciones para llamar a las validaciones específicas desde los eventos
function validarNum1DigitoN() {
  validarInputDigitoN(document.getElementById("num2"));
}

function validarNum1PosicionDeDigito() {
  validarInputPosicionDeDigito(document.getElementById("num2"));
}

function validarNum1QuitaPorDetras() {
  validarInputQuitaPorDetras(document.getElementById("num2"));
}
function validarNum1QuitaPorDelante() {
  validarInputQuitaPorDelante(document.getElementById("num2"));
}

function validarNum1PegaPorDetras() {
  validarInputPegaPorDetras(document.getElementById("num2"));
}

function validarNum1PegaPorDelante() {
  validarInputPegaPorDelante(document.getElementById("num2"));
}
function validarTrozoDeNumero1() {
  validarInputTrozoDeNumero();
}
function validarTrozoDeNumero2() {
  validarInputTrozoDeNumero();
}
function validarTrozoDeNumero3() {
  validarInputTrozoDeNumero();
}

//!SECTION fin Funciones para llamar a las validaciones específicas desde los eventos
