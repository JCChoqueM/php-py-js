/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS() {
  // Variables para el mensaje y estadísticas
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  // Inicializar variables de mensaje, correcto e incorrecto
  let mensaje = "";
  let correcto = 0;
  let incorrecto = 0;
  let input = [input1, input2, input3];
  // Iniciar la estructura de la tabla
  mensaje += `<table border='1' style='text-align:center';><tr>`;

  // Iterar sobre los elementos de entrada (input) utilizando forEach
  input.forEach((valor, indice) => {
    // Determinar el color de fondo basado en la comparación entre el valor actual y el valor utilizado
    const colorFondo =
      valor === valoresUtilizados[indice] ? "color: green;" : "color: red;";

    // Construir la celda de la tabla
    mensaje += `<td>`;
    mensaje += `<span style='font-size: 25px;'>${clavesUtilizadas[indice]} </span><br>`;
    mensaje += `<table border='1'>`;
    mensaje += `<tr>`;
    mensaje += `<td>`;
    // Celda para la imagen
    mensaje += `<img src='images/${clavesUtilizadas[indice]}.png' alt='${clavesUtilizadas[indice]}' style='width: 130px; height: 165px;'><br>`;
    mensaje += `</td>`;
    mensaje += `</tr>`;
    mensaje += `<tr>`;
    mensaje += `<td style='height: 75px; text-align: center; font-size: 17px;'>`;
    // Celda para los puntos
    mensaje += `${valor}`;
    // Determinar si la respuesta es correcta o incorrecta
    if (valor === valoresUtilizados[indice]) {
      correcto += 1;
      mensaje += `<br><span style='${colorFondo}'>correcto</span>`;
    } else {
      incorrecto += 1;
      mensaje += `<br><span style='${colorFondo}'>incorrecto</span><br>la traducción es:<br>${valoresUtilizados[indice]}`;
    }
    mensaje += `</td>`;
    mensaje += `</tr>`;
    mensaje += `</table>`;
    mensaje += `</td>`;
  });

  // Finalizar la tabla y agregar el resumen de correctos e incorrectos
  mensaje += `</tr></table><br> correctos: ${correcto}<br>Incorrectos:${incorrecto}`;

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje}`;
}
