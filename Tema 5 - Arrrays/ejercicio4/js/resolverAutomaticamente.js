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
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  const data = {
    num1,
    num2,
    numerosAuto, // Utiliza el array generado en la función generarArray
  };

  fetch("archives/automaticamente/automaticamentePy.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = text;
    })
    .catch((error) => console.error(error));
}

/* !SECTION fin sumar todo */
