/* <?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php'; */
function imprimirEscapicua(input1) {
  input1 = parseInt(input1);
  let esValido = (input1 >= 0 && input1 <= 9) || (input1 >= -9 && input1 <= -1);
  /*   let habilitarBoton = false;
  let centrar = "style='text-align: center;'";
  let rojo = "style = 'color: red;'";
  let verde = "style = 'color: darkgreen;'"; */
  let mensajeError = "";
  const estado = isNaN(input1) ? "0" : "1";
  switch (estado) {
    case "0":
      mensajeError =
        "El campo esta vacio o no es un numero. Por favor, ingrese numero(s)..";
      break;
    case "1":
      switch (true) {
        case esValido:
          if (input1 >= 0) {
            mensajeError = `<span>El numero<span style='color: green'> ${input1}</span> es un palíndromo.</span>`;
          } else {
            mensajeError = `<span>El número <span style='color: red'> ${input1} . </span>  es negativo<br>Al ignorar el signo:<br> <span style='color: green'> ${Math.abs(
              input1
            )}  </span>es un palíndromo.</span>`;
          }
          break;
        case !esValido:
          if (input1 >= 0) {
            mensajeError = `<span>  ${esCapicua(input1)}  </span>`;
          } else {
            mensajeError = `<span> El número <span style = 'color: red' > ${input1}</span> es negativo.<br> Al ignorar el signo: <br>${esCapicua(
              input1
            )} </span>`;
          }
          habilitarBoton = true;
          break;
      }
      break;
    default:
      mensajeError = "Error desconocido. Por favor, revise las entradas.";
  }
  return mensajeError;
}
