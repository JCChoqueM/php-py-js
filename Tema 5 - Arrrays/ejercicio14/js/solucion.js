/* SECTION inicio boton PHP */

function generarLetraNumero() {
  let letras = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

  // Obtener una letra aleatoria
  let letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
  let mayuscula = generarNumeroAleatorio(0, 1);
  if (mayuscula) {
    letraAleatoria = letraAleatoria.toUpperCase();
  }

  // Obtener un número aleatorio
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

  // Construir la combinación aleatoria
  let combinacion = letraAleatoria + numeroAleatorio;
  return combinacion;
}
function solucionPHP(accion) {
  let formData = new FormData();

  if (accion === "random") {
    document.getElementById("input1").value = "";
    const input1 = generarLetraNumero();
    formData.append("input1", input1);
  } else if (accion === "normal") {
    const valorInput = document.getElementById("input1").value;
    formData.append("input1", valorInput);
  }

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
async function solucionPython(accion) {
  let input1;

    if (accion === "random") {

      input1 = generarLetraNumero();

    } else if (accion === "normal") {
      input1 = document.getElementById("input1").value;

    }
  
  try {
    const url = "archives/soluciones/solucionPy.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      input1: input1,
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
