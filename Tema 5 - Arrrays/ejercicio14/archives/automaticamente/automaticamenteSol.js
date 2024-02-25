/**
 * Función que procesa automáticamente un array de números y muestra estadísticas en una tabla HTML.
 */
function automaticoJS(accion) {
  function usarInput() {
    try {
    let valor;
    if (accion === "random") {
      valor = generarLetraNumero().toLowerCase();
    } else if (accion === "normal") {
      valor = document.getElementById("input1").value.toLowerCase();
    }
      // Verificar si el valor tiene la longitud adecuada
      if (valor.length !== 2) {
        let mensaje=("La combinación debe tener exactamente dos caracteres y soy js.");
         const resultadoDiv = document.getElementById("resultadoJavaScript");
         resultadoDiv.innerHTML = ` ${mensaje}`;
        return null; // Devolver null si el valor no tiene la longitud adecuada
      }

      let letra = valor.charAt(0);
      let numero = valor.charAt(1);

      // Verificar si la letra está dentro del rango de "a" a "h" y si el número está dentro del rango de "1" a "8"
      if (letra < "a" || letra > "h" || numero < "1" || numero > "8") {
        let mensaje=(
          "La combinación debe estar dentro del rango de 'a1' a 'h8'."
        );
         const resultadoDiv = document.getElementById("resultadoJavaScript");
         resultadoDiv.innerHTML = ` ${mensaje}`;
        return null; // Devolver null si la letra o el número no están en el rango adecuado
      }

      // Obtener los valores numéricos asociados a la letra y al número
      let ejeY = letra;
      let ejeX = numero;

      // Devolver un objeto con los valores numéricos obtenidos
      return { ejeX: ejeX, ejeY: ejeY };
    } catch (error) {
      console.error("Error:", error);
    }
  }
  let resultado = usarInput();
  if (resultado) {
    numero = resultado["ejeX"];
    letra = resultado["ejeY"];
  } else {
    return;
  }
  // Variables para el mensaje y estadísticas
console.log(numero)
console.log(letra)
  ejeX = "8".charCodeAt(0) - numero.charCodeAt(0);
  ejeY = letra.charCodeAt(0) - "a".charCodeAt(0);
  let tabla_ancho = 300; // Ancho de la tabla
  let tabla_alto = 300; // Alto de la tabla
  let celula_ancho = 35; // Ancho de las celdas
  let celula_alto = 35; // Alto de las celdas
  mensaje = `El valor insertado es: ${document.getElementById("input1").value}`;
  mensaje += `<table border='1' style='border-collapse: collapse; width: ${tabla_ancho}px; height: ${tabla_alto}px;'>`; // Establecer un tamaño fijo para la tabla
  mensaje += `<tr><td style='width: ${celula_ancho}px; height: ${celula_alto}px;'></td>`;
  // Añadir letras a la derecha
  for (let y = 0; y < 8; y++) {
    mensaje += `<td style='background-color: yellow; width: ${celula_ancho}px; height: ${celula_alto}px;'>${String.fromCharCode(
      97 + y
    )}</td>`; // Establecer un tamaño fijo para las celdas
  }
  mensaje += `<td style='width: ${celula_ancho}px; height: ${celula_alto}px;'></td></tr>`;

  // Añadir filas con números y celdas vacías
  for (let x = 0; x < 8; x++) {
    mensaje += "<tr>";
    // Añadir número a la izquierda
    mensaje += `<td style='background-color: orange; width: ${celula_ancho}px; height: ${celula_alto}px;'>${
      8 - x
    }</td>`;
    // Añadir celdas vacías
    for (let y = 0; y < 8; y++) {
      let colorFondo = (x + y) % 2 == 0 ? "white" : "grey";
      let imagenFondo = "none"; // Sin imagen de fondo
      if (x === ejeX && y === ejeY) {
        imagenFondo = 'url("images/alfil.png")'; // Cambiar la ruta por la ruta real de tu imagen
      } else if (
        Math.abs(Math.abs(x) - Math.abs(ejeX)) ===
        Math.abs(Math.abs(y) - Math.abs(ejeY))
      ) {
        imagenFondo = 'url("images/alfilsemitransparente.png")'; // Cambiar la ruta por la ruta real de tu imagen
      }
      mensaje += `<td style='background-image: ${imagenFondo}; background-color: ${colorFondo}; background-size: cover; width: ${celula_ancho}px; height: ${celula_alto}px;'></td>`; // Establecer un tamaño fijo para las celdas
    }
    // Añadir número a la derecha
    mensaje += `<td style='background-color: orange; width: ${celula_ancho}px; height: ${celula_alto}px;'>${
      8 - x
    }</td>`;
    mensaje += "</tr>";
  }

  // Añadir fila de letras a la izquierda
  mensaje +=
    "<tr><td style='width: ${celula_ancho}px; height: ${celula_alto}px;'></td>";
  for (let y = 0; y < 8; y++) {
    mensaje += `<td style='background-color: yellow; width: ${celula_ancho}px; height: ${celula_alto}px;'>${String.fromCharCode(
      97 + y
    )}</td>`; // Establecer un tamaño fijo para las celdas
  }
  mensaje += `<td style='width: ${celula_ancho}px; height: ${celula_alto}px;'></td></tr>`;

  mensaje += "</table>";

  // Obtener el elemento HTML donde se mostrará el resultado y añadir el mensaje
  const resultadoDiv = document.getElementById("resultadoJavaScript");
  resultadoDiv.innerHTML = ` ${mensaje}`;
}
