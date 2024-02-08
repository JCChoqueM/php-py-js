function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* SECTION inicio sumar todo */
function resolver() {
  const { num1ero, minimo, xMinimo, yMinimo } = generarMatrizYDatos();
  automaticoPHP(num1ero, minimo, xMinimo, yMinimo);
  automaticoPY();
  automaticoJS();
}

async function automaticoPHP(numero, minimo, xMinimo, yMinimo) {
  try {
    const url = "archives/automaticamente/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numero,
        minimo,
        xMinimo,
        yMinimo,
      }),
    });

    if (response.ok) {
      const resolver = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML = ` ${resolver}<br>`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}


async function automaticoPY() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      asociativo: asociativo,
      valoresUtilizados: valoresUtilizados,
      clavesUtilizadas: clavesUtilizadas,
      input1: input1,
      input2: input2,
      input3: input3,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPython");
      resultadosDiv.innerHTML = ` ${suma}<br>`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}