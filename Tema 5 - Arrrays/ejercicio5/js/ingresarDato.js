var numeros = [];

function ingresarDato() {
  for (let i = 0; i < 12; i++) {
    var inputNumero = document.getElementById(`${"num" + [i + 1]}`);
    var numero = parseInt(inputNumero.value);
    if (!isNaN(numero)) {
      numeros.push(numero);
    } else {
      alert("No se completaron los campos");
      numeros = [];
      break;
    }
  }
if (numeros.length === 12) {
  ingresarPHP();
  ingresarPY();
  ingresarJS();
}else{
  numeros=[];
}
console.log(numeros)
}

async function ingresarPHP() {
  try {
    // Crear un objeto que contiene ambos arrays
    const data = {
      numeros: numeros,
      nombres: nombres,
    };

    // Realizar la solicitud y enviar el objeto como JSON
    const response = await fetch("archives/ingresarDato/ingresarDato.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML = ` ${suma}  `;
      numeros = [];
      // También podrías limpiar el segundoArray si es necesario
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function ingresarPY() {
  try {
    // Crear un objeto que contiene ambos arrays
    const data = {
      numeros: numeros,
      nombres: nombres,
    };

    // Realizar la solicitud y enviar el objeto como JSON
    const response = await fetch("archives/ingresarDato/ingresarDatoPY.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPython");
      resultadosDiv.innerHTML = ` ${suma}  `;
      numeros = [];
      // También podrías limpiar el segundoArray si es necesario
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
