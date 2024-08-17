

/* SECTION inicio sumar todo */


async function automaticoPHP(datos) {
  try {
    const url = "archives/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
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

function automaticoJS(datos) {
  mensajeError = automaticamenteJS(datos);
  const resultadoDiv1 = document.getElementById("resultadoJavaScript");
  // Insertar el mensaje de error en cada elemento
  resultadoDiv1.innerHTML = mensajeError;
}
