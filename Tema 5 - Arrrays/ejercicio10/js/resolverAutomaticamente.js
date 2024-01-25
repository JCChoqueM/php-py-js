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
let cartasSacadas = [];
let puntosSacados = [];
let contadorCartas = 0;
let sumaTotal = 0;

function generarCartas() {
  cartasSacadas = [];
  puntosSacados = [];
  contadorCartas = 0;
  sumaTotal = 0;

  do {
    let randomFigura = figura[generarNumeroAleatorio(0, 3)];
    let randomValor = valor[generarNumeroAleatorio(0, 9)];
    let puntos = asociativo[randomValor];
    let nombreCarta = `${randomValor} de ${randomFigura}`;
    if (!cartasSacadas.includes(nombreCarta)) {
      cartasSacadas.push(nombreCarta);
      puntosSacados.push(puntos);
      contadorCartas += 1;
      sumaTotal += puntos;
    }
  } while (contadorCartas < 10);
}

function generarArray() {
  const min = -8;
  const max = 100;

  for (contador = 0; contador < 7; contador++) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    asociativo.push(numeroAleatorio);
  }
}

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* SECTION inicio sumar todo */
function resolverAutomaticamente() {
  generarCartas();
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
      body: JSON.stringify({
        cartasSacadas,
        puntosSacados,
        sumaTotal,
      }),
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
 try {
    const url = "archives/automaticamente/automaticamentePY.php";

    // Ajusta los datos según lo que espera el script PHP
    const data = {
      cartasSacadas: cartasSacadas,
      puntosSacados: puntosSacados,
      sumaTotal: sumaTotal,
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
