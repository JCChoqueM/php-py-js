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

//SECTION - 7.-digitoN
function validarInputDigitoN(input) {
  const valor = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(input.value);
  let mensajeError = "";

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > contarDigitos(valor) - 1) {
    mensajeError = `El numero ${valor2} ${valor} tiene posiciones de 0 a ${
      contarDigitos(valor) - 1
    } digitos.`;
  } else if (valor2 < 0) {
    mensajeError = `La Posicion no puede ser negativa`;
  }

  validarInputYMostrarError(mensajeError);
}
//!SECTION fin 7.-digitoN

//SECTION - 8.- posicionDeDigito
function validarInputPosicionDeDigito(input) {
  const valor = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(input.value);
  let mensajeError = "";

  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > 9) {
    mensajeError = `solo se permite ingresa numeros de 1 digito`;
  } else if (valor2 < 0) {
    mensajeError = `el numero no puede ser negativo`;
  }

  validarInputYMostrarError(mensajeError);
}
//!SECTION fin 8.-posicionDeDigito

//SECTION -  9.- quitaPorDetras
function validarInputQuitaPorDetras(input) {
  const valor = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(input.value);
  let mensajeError = "";
  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > contarDigitos(valor)) {
    mensajeError = `El numero ${valor} tiene ${contarDigitos(
      valor
    )} digitos. No se puede quitar mas de eso`;
  } else if (valor2 < 0) {
    mensajeError = `la cantidad de numeros a quitar no puede ser negativo`;
  }

  validarInputYMostrarError(mensajeError);
}
//!SECTION fin 9.- quitaPorDetras

//SECTION - Inicio 10.- quitaPorDelante
function validarInputQuitaPorDelante(input) {
  const valor = parseInt(document.getElementById("num1").value);
  const valor2 = parseInt(input.value);
  let mensajeError = "";
  // Verificar si el valor tiene la longitud adecuada
  if (valor2 > contarDigitos(valor)) {
    mensajeError = `El numero ${valor} tiene ${contarDigitos(
      valor
    )} digitos. No se puede quitar mas de eso`;
  } else if (valor2 < 0) {
    mensajeError = `la cantidad de numeros a quitar no puede ser negativo`;
  }
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
        mensajeError = `01- El campo 1 esta vacio <br><br> input2 No puede tener mas de 1 digito`;
      }
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input1 >= 0) {
        if (esValido) {
          if (input2 >= 0) {
            mensajeError = "Continuar";
          } else {
            mensajeError = `<span>11- El campo 2 no puede tener números negativos <br>${input1}<span style='color: red;'>${input2}</span>.  </span>`;
          }
        } else {
          if (input2 >= 0) {
            mensajeError = "11- input2 no puede tener más de 1 dígito";
          } else {
            mensajeError =
              "11- input2 no puede tener más de 1 dígito y no puede ser negativo";
          }
        }
      } else {
        if (esValido) {
          mensajeError =
            input2 >= 0
              ? "11- Continuar"
              : `<span>11- El campo 2 no puede tener números negativos2 <br>${input1}<span style='color: red;'>${input2}</span>.  </span>`;
        } else {
          mensajeError =
            input2 >= 0
              ? "11- input2 no puede tener más de 1 dígito2"
              : "11- input2 no puede tener más de 1 dígito y no puede ser negativo";
        }
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
  let verde = "style = 'color: green;'";
  let continuar = false;

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
        mensajeError = `01- El campo 1 esta vacio <br><br> input2 No puede tener mas de 1 digito`;
      }
      break;
    case "10":
      mensajeError = `10- input 2 esta vacio`;
      break;
    case "11":
      if (input1 >= 0) {
        if (esValido) {
          if (input2 >= 0) {
            mensajeError = "Continuar";
          } else {
            mensajeError = `<span>11- El campo 2 no puede tener números negativos:<br><span ${rojo}>${input2}</span>${input1}.  </span>`;
          }
        } else {
          mensajeError = `<span> 11- input2 no puede tener más de 1 dígito:<br><span ${rojo}>${input2}</span>${input1}</span>`;
        }
      } else {
        if (esValido) {
          mensajeError =
            input2 >= 0
              ? "Continuar"
              : `<span>11- El campo 2 no puede tener números negativos <br><span ${rojo}>${input2}</span>${input1}.  </span>`;
        } else {
          mensajeError =
            input2 >= 0
              ? "11- input2 no puede tener más de 1 dígito"
              : "11- input2 no puede tener más de 1 dígito y no puede ser negativo";
        }
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
