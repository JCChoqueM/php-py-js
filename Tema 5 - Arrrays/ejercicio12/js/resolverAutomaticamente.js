const asociativo = {
  manzana: "apple",
  platano: "banana",
  naranja: "orange",
  uva: "grape",
  frutilla: "strawberry",
  mango: "mango",
  kiwi: "kiwi",
  piña: "pineapple",
  cereza: "cherry",
  pera: "pear",
  sandia: "watermelon",
  limon: "lemon",
  granada: "pomegranate",
  ciruela: "plum",
  papaya: "papaya",
  coco: "coconut",
  higo: "fig",
  mandarina: "tangerine",
  mora: "blackberry",
  guayaba: "guava",
  pomelo: "grapefruit",
  durazno: "peach",
};

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* SECTION inicio sumar todo */
function traducir() {
  automaticoPHP();
  automaticoPY();
  automaticoJS();
}
async function automaticoPHP() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  try {
    const url = "archives/automaticamente/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asociativo,
        valoresUtilizados,
        clavesUtilizadas,
        input1,
        input2,
        input3,
      }),
    });

    if (response.ok) {
      const traduccion = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML = ` ${traduccion}<br>`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function automaticoPY() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      asociativo: asociativo,
      valoresUtilizados: valoresUtilizados,
      clavesUtilizadas: clavesUtilizadas,
      input1: input1,
      input2: input2,
      input3: input3,
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
