const asociativo = {
  uno: 11,
  dos: 0,
  tres: 10,
  cuatro: 0,
  cinco: 0,
  seis: 0,
  siete: 0,
  sota: 2,
  caballo: 3,
  rey: 4,
};
const valor = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "sota",
  "caballo",
  "rey",
];
const figura = ["oros", "copas", "espadas", "bastos"];

function generarArray() {
  const min = -8;
  const max = 100;

  for (contador = 0; contador < 7; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    asociativo.push(numeroAleatorio);
  }
}

/* SECTION inicio sumar todo */
function resolverAutomaticamente() {
  automaticoPHP();
  automaticoPY();
  automaticoJS();
}
async function automaticoPHP() {
  try {
    const url = "archives/automaticamente/automaticamente.php";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ asociativo, valor, figura }),
    });

    if (response.ok) {
      const suma = await response.text();
      var resultadosDiv = document.getElementById("resultadoPHP");
      resultadosDiv.innerHTML = ` ${suma}<br>`;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function automaticoPY() {
  let numeros4 = asociativo.slice(0);

  try {
    const url = "archives/automaticamente/automaticamentePY.php";
    const data = {
      numeros1: numeros4,
      numeros2: valor,
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
      resultadosDiv.innerHTML = ` numeros ingresados: ${numeros4.join(
        ", "
      )}<br> ${suma} `;
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

/* !SECTION fin sumar todo */
