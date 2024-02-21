function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* SECTION inicio sumar todo */
function resolver() {
  automaticoPHP();
  automaticoPY();
  automaticoJS();
}

async function automaticoPHP() {
  const num1 = document.getElementById("input1").value;
  try {
    const url = "archives/automaticamente/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num1,
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
  const num1 = document.getElementById("input1").value;
  try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      numero: num1,
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
      resultadosDiv.innerHTML = ` ${suma} <br>`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}
