var numeros = [];

function ingresarDato() {
  var inputNumero = document.getElementById("num1");
  var numero = parseInt(inputNumero.value);

  if (!isNaN(numero)) {
    numeros.push(numero);
    inputNumero.value = "";

    var resultadosDiv = document.getElementById("resultadoJavaScript");
    var resultadosDiv2 = document.getElementById("resultadoPHP");
    var resultadosDiv3 = document.getElementById("resultadoPython");
    resultadosDiv.innerHTML = "Números ingresados: " + numeros.join(", ") + "";
    resultadosDiv2.innerHTML = "Números ingresados: " + numeros.join(", ") + "";
    resultadosDiv3.innerHTML = "Números ingresados: " + numeros.join(", ") + "";

    if (numeros.length === 5) {
      ingresarPHP();
      ingresarPY();
      ingresarJS();
    }
  }
}

async function ingresarPHP() {
  try {
    const response = await fetch(
      "archives/ingresarDato/ingresarDato.php?numeros=" +
        JSON.stringify(numeros)
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML += `  </p><br>${suma}  `;
      numeros = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function ingresarPY() {
  try {
    const response = await fetch(
      "archives/ingresarDato/ingresarDatoPY.php", // Cambiar la ruta al archivo PHP que ejecutará el script Python
      {
        method: "POST",
        body: JSON.stringify(numeros), // Enviamos el array de números en el cuerpo de la solicitud
      }
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPython");
      resultadosDiv.innerHTML += "<br> " + suma;
      numeros = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}


