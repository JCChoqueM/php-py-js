const asociativo = {
  manzana: "Apple",
  platano: "Banana",
  naranja: "Orange",
  uva: "Grape",
  frutilla: "Strawberry",
  mango: "Mango",
  kiwi: "Kiwi",
  piña: "Pineapple",
  cereza: "Cherry",
  pera: "Pear",
  sandia: "Watermelon",
  limon: "Lemon",
  granada: "Pomegranate",
  ciruela: "Plum",
  papaya: "Papaya",
  coco: "coconut",
  higo: "Fig",
  mandarina: "Tangerine",
  mora: "Blackberry",
  guayaba: "Guava",
  pomelo: "Grapefruit",
  durazno: "peach",
};

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* SECTION inicio sumar todo */
function resolverAutomaticamente() {
  automaticoPHP();
  automaticoPY();
  automaticoJS();
}
async function automaticoPHP() {
  const fruta = document.getElementById("fruta").value;
  try {
    const url = "archives/automaticamente/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asociativo,
        fruta,
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
  const fruta = document.getElementById("fruta").value;
  try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      asociativo: asociativo,
      fruta: fruta,
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
