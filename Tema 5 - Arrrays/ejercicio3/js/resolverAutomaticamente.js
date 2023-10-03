/* SECTION inicio sumar todo */
function resolverAutomaticamente() {
  generarArray();
  if (numerosAuto.length === 7) {
    automaticoPHP();
    automaticoPY();
    automaticoJS();
  }
}
async function automaticoPHP() {
  try {
    const response = await fetch(
      "archives/automaticamente/automaticamente.php?numerosAuto=" +
        JSON.stringify(numerosAuto)
    );
    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML += ` <br>${suma}  `;
      numerosAuto = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
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
      resultadosDiv.innerHTML += `${suma}` ;
      numerosAuto = [];
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

/* !SECTION fin sumar todo */
