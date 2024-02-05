let valoresUtilizados = [];
let clavesUtilizadas = [];

function generar() {
  limpiarResultados();
  // Obtener los valores únicos del objeto asociativo
  const frutasUnicas = [...new Set(Object.values(asociativo))];

  // Reiniciar los arrays de frutas seleccionadas y claves utilizadas
  valoresUtilizados = [];
  clavesUtilizadas = [];

  while (
    valoresUtilizados.length < 3 &&
    valoresUtilizados.length < frutasUnicas.length
  ) {
    const frutaAleatoria =
      frutasUnicas[Math.floor(Math.random() * frutasUnicas.length)];
    if (!valoresUtilizados.includes(frutaAleatoria)) {
      valoresUtilizados.push(frutaAleatoria);
      // Encontrar la clave correspondiente al valor
      const clave = Object.keys(asociativo).find(
        (key) => asociativo[key] === frutaAleatoria
      );
      clavesUtilizadas.push(clave);
    }
  }

  // Actualizar las tarjetas con las frutas seleccionadas
  for (let i = 0; i < valoresUtilizados.length; i++) {
    const tarjeta = document.getElementById(`tarjeta${i + 1}`);
    const titulo = tarjeta.querySelector(".titulo");
    const imagen = tarjeta.querySelector(".fruta");

    // Encontrar la clave (fruta) correspondiente al valor
    const fruta = Object.keys(asociativo).find(
      (key) => asociativo[key] === valoresUtilizados[i]
    );

    titulo.textContent = fruta;
    imagen.src = `images/${fruta}.png`;
  }

  // Imprimir los valores y claves utilizados en la consola
  console.log("Valores utilizados:", valoresUtilizados);
  console.log("Claves utilizadas:", clavesUtilizadas);

  // Retornar el array con los valores utilizados
  verificarCampos();
  reinciarColor();
  clickCount = 0;
  return valoresUtilizados;
}

document.addEventListener("DOMContentLoaded", function () {
  generar();
});

function reinciarColor() {
  const botonLlenar = document.getElementById("botonLlenar");
  const colores = ["#adda9b"]; // Definir los colores deseados

  // Cambiar el color del botón en cada clic
  botonLlenar.style.backgroundColor = colores;
}
