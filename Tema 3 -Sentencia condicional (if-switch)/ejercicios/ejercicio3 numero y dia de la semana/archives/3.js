function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);
  let solucion;
  if (num1 > 0 && num1 <= 7) {
    if (num1 == 1) {
      solucion = `El dia ${num1} es Lunes`;
    } else if (num1 == 2) {
      solucion = `El dia ${num1} es Martes`;
    } else if (num1 == 3) {
      solucion = `El dia ${num1} es Miercoles`;
    } else if (num1 == 4) {
      solucion = `El dia ${num1} es Jueves`;
    } else if (num1 == 5) {
      solucion = `El dia ${num1} es Viernes`;
    } else if (num1 == 6) {
      solucion = `El dia ${num1} es Sabado`;
    } else if (num1 == 7) {
      solucion = `El dia ${num1} es Domingo`;
    }
  } else {
    solucion = "Ingrese un numero entre 1 y 7";
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${solucion}`;
}
