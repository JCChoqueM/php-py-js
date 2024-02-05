/* SECTION inicio boton PHP */
function solucionPHP_JS_PY() {
  solucionPHP();
  solucionPython();
  solucionJavaScript();
}

function solucionPHP() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;

  const formData = new FormData();
  formData.append("input1", input1);
  formData.append("input2", input2);
  formData.append("input3", input3);
  formData.append("valoresUtilizados", JSON.stringify(valoresUtilizados));
  formData.append("clavesUtilizadas", JSON.stringify(clavesUtilizadas));
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
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  try {
    const url = "archives/soluciones/solucionPy.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      input1: input1,
      input2: input2,
      input3: input3,
      valoresUtilizados: valoresUtilizados,
      clavesUtilizadas: clavesUtilizadas,
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
/* !SECTION fin boton Python */
