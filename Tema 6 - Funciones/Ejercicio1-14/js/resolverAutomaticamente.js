function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* SECTION inicio sumar todo */
async function resolver() {
  // Recopilar los valores de los inputs utilizando FormData
  const formulario = document.getElementById("FormularioInputs");
  let select = document.getElementById("accion");
  const datosFormulario = new FormData(formulario);

  // Crear un array indexado para almacenar los valores recopilados
  const datos = [];
  datos.push(select.value);
  // Iterar sobre los valores del formulario
  datosFormulario.forEach((value, key) => {
    const inputElement = formulario.querySelector(`[name="${key}"]`);
    if (inputElement && inputElement.tagName.toLowerCase() === "input") {
      // Agregar el valor al array indexado
      datos.push(value);
    }
  });

  console.log("Datos recopilados solo de inputs:", datos); // Para verificar la recopilación de datos

  // Llamar a las funciones con los datos recopilados
  await automaticoPHP(datos);
  /*   await automaticoPY(datos);
  await automaticoJS(datos); */
}

async function automaticoPHP(datos) {
  try {
    const url = "archives/automaticamente/automaticamente.php";

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

async function automaticoPY(numero) {
  try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      numero: numero,
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
