let clickCount = 0;

function llenar() {
  const inputs = {
    input1: document.getElementById("input1"),
    input2: document.getElementById("input2"),
    input3: document.getElementById("input3"),
  };
const frutasUnicas = [...new Set(Object.values(asociativo))];
  const botonLlenar = document.getElementById("botonLlenar");
  const colores = ["green", "yellow", "red"]; // Definir los colores deseados

  // Cambiar el color del botón en cada clic
  botonLlenar.style.backgroundColor = colores[clickCount % colores.length];

  // Obtener las frutas seleccionadas y las respuestas incorrectas
  const respuestasIncorrectas = frutasUnicas.filter(
    (valor) => !valoresUtilizados.includes(valor)
  );

  clickCount++;
  switch (clickCount) {
    case 1:
      // 1er click: Todos correctos
      inputs.input1.value = valoresUtilizados[0];
      inputs.input2.value = valoresUtilizados[1];
      inputs.input3.value = valoresUtilizados[2];
      break;
    case 2:
      // 2do click: Correcto, Incorrecto, Correcto
      inputs.input1.value = valoresUtilizados[0];
      inputs.input2.value =
        respuestasIncorrectas[
          Math.floor(Math.random() * respuestasIncorrectas.length)
        ];
      inputs.input3.value = valoresUtilizados[2];
      break;
    case 3:
      // 3er click: Todos incorrectos
      inputs.input1.value =
        respuestasIncorrectas[
          Math.floor(Math.random() * respuestasIncorrectas.length)
        ];
      inputs.input2.value =
        respuestasIncorrectas[
          Math.floor(Math.random() * respuestasIncorrectas.length)
        ];
      inputs.input3.value =
        respuestasIncorrectas[
          Math.floor(Math.random() * respuestasIncorrectas.length)
        ];
      clickCount = 0; // Reiniciar contador para volver al inicio en el próximo click
      break;
  }

  verificarCampos();
}

function limpiarResultados() {
  document.getElementById("resultadoPHP").innerHTML = "";
  document.getElementById("resultadoPython").innerHTML = "";
  document.getElementById("resultadoJavaScript").innerHTML = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  verificarCampos();
  reinciarColor();
}
