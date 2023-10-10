/* SECTION inicio sumar todo */
function resolverAutomaticamente() {
  automaticoPHP();
  automaticoPY();
  automaticoJS();
}
async function automaticoPHP() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  // Serializa el array como JSON y agrégalo al FormData
  const formData = new FormData();
  formData.append("num1", num1);
  formData.append("num2", num2);
  formData.append("miArray", JSON.stringify(numerosAuto)); // Convierte el array a JSON

  fetch("archives/automaticamente/automaticamente.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = text;
    })
    .catch((error) => console.error(error));
}

async function automaticoPY() {
  try {
    const response = await fetch(
      "archives/automaticamente/automaticamentePY.php", // Cambiar la ruta al archivo PHP que ejecutará el script Python
      {
        method: "POST",
        body: JSON.stringify(numerosAuto), // Enviamos el array de números en el cuerpo de la solicitud
      }
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPython");
      resultadosDiv.innerHTML = `${suma}`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

/* !SECTION fin sumar todo */
