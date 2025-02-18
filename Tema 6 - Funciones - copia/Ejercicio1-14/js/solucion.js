/* SECTION inicio boton PHP */
function solucionPhpPyJs() {
  solucionPHP();
  solucionPython();
  solucionJavaScript();
}

function solucionPHP() {
  const formData = new FormData();

  /*  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1); */

  fetch("archives/soluciones/solucion.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = text;
      /*            document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
async function solucionPython() {
  try {
    const url = "archives/soluciones/solucionPy.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {};

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
/* !SECTION fin boton Python */
