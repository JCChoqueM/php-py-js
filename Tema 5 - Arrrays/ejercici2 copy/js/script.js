/* SECTION inicio boton PHP */
function calcularPHP() {
  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1);

  fetch("archives/zolucion/solucion.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML =   text;
      /*            document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
function calcularPython() {
  const num1 = document.getElementById("num1").value;

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/zolucion/solucionPy.php?num1=" + num1) //+ "&metodo=python" || + "&num2=" + num2
    .then((response) => response.text())
    .then((text) => {
      // Mostrar el resultado en la página
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = text;
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton Python */

/* SECTION inicio sumar todo */
function calcularTodo() {
  calcularPHP();
  calcularPython();
  calcularJS();
}
/* !SECTION fin sumar todo */

/* SECTION inicio Numeros random */
function generarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function llenarFormulario() {
  const num1 = document.getElementById("num1");

  num1.value = generarNumero(25, -2);
}

/* !SECTION fin Numeros random */


