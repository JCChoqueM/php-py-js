

/* SECTION inicio sumar todo */
async function resolver() {
  // Recopilar los valores de los inputs utilizando FormData
  const formulario = document.getElementById("FormularioInputs2");
  let select = document.getElementById("accion");
  const datosFormulario = new FormData(formulario);

  // Crear un array indexado para almacenar los valores recopilados
  const datos = [];
  // Iterar sobre los valores del formulario
  datosFormulario.forEach((value, key) => {
    const inputElement = formulario.querySelector(`[name="${key}"]`);
    if (inputElement && inputElement.tagName.toLowerCase() === "input") {
      // Agregar el valor al array indexado
      datos.push(value);
    }
  });
  console.log(datos);

  let array = validacion(datos[0], datos[1], datos[2]);

  const objetoDatos = {
    seleccion: select.value,
    arrayGenerado: array,
  };
  if (datos.length > 3) {
    objetoDatos.extra = datos[3];
  }

  if (typeof array === "string") {
    limpiarCajas();
    var resultadosDiv = document.getElementById("arrayNumerosAleatorios");
    resultadosDiv.innerHTML = array;
    // Si el dato es una cadena, haz algo
    console.log("El dato es un array:", array);
  } else if (Array.isArray(array)) {
    var resultadosDiv = document.getElementById("arrayNumerosAleatorios");
    resultadosDiv.innerHTML = array.join(", ");
    // Si el dato es un array, haz algo diferente
    console.log("El dato es un array:", array);

    await automaticoPHP(objetoDatos);
    automaticoJS(objetoDatos);
  } else {
    // Para otros tipos de datos, si es necesario
    console.log("El dato es de otro tipo:", array);
  }
}

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
