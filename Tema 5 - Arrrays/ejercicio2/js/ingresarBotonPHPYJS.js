var numerosPHP = [];
var numerosPY = [];
var numerosJS = [];

//SECTION - inicio PHP
function ingresarDatoPHP() {
  var inputNumero = document.getElementById("num1");
  var numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    numerosPHP.push(numero);
    inputNumero.value = "";

    var resultadosDiv = document.getElementById("resultadoPHP");
    resultadosDiv.innerHTML =
      "Números ingresados: " + numerosPHP.join(", ") + "";

    if (numerosPHP.length === 3) {
      ingresarBotonPHP();
    }
  }
}

async function ingresarBotonPHP() {
  try {
    const response = await fetch(
      "archives/ingresarPHPYJS/ingresarBoton.php?numerosPHP=" +
        JSON.stringify(numerosPHP)
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML += "<br>Suma de los números: " + suma;
      numerosPHP = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
//!SECTION fin PHP

//SECTION - inicio PY
function ingresarDatoPY() {
  var inputNumero = document.getElementById("num1");
  var numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    numerosPY.push(numero);
    inputNumero.value = "";

    var resultadosDiv = document.getElementById("resultadoPython");
    resultadosDiv.innerHTML =
      "Números ingresados: " + numerosPY.join(", ") + "";

    if (numerosPY.length === 3) {
      ingresarBotonPY();
    }
  }
}

async function ingresarBotonPY() {
  try {
    const response = await fetch(
      "archives/ingresarPHPYJS/ingresarBotonPY.php", // Cambiar la ruta al archivo PHP que ejecutará el script Python
      {
        method: "POST",
        body: JSON.stringify(numerosPY), // Enviamos el array de números en el cuerpo de la solicitud
      }
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPython");
      resultadosDiv.innerHTML += "<br>Suma de los números: " + suma;
      numerosPY = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
//!SECTION fin PY

//SECTION - inicio JS
function ingresarDatoJS() {
  var inputNumero = document.getElementById("num1");
  var numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    numerosJS.push(numero);
    inputNumero.value = "";

    var resultadosDiv = document.getElementById("resultadoJavaScript");
    resultadosDiv.innerHTML =
      "Números ingresados: " + numerosJS.join(", ") + "";

    if (numerosJS.length === 3) {
      ingresarBotonJS();
    }
  }
}
//!SECTION fin JS
