/* SECTION inicio boton PHP */
function calcularPHP() {
  /*   const num1 = document.getElementById("num1").value; */

  const formData = new FormData();
  /*   formData.append("num1", num1); */

  fetch("archives/zolucion/solucion.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = "Solucion: <br>" + text;
      /*            document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
function calcularPython() {
/*     const num1 = document.getElementById("num1").value; */

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/zolucion/solucionPy.php?num1=" /* + num1 */) //+ "&metodo=python" || + "&num2=" + num2
    .then((response) => response.text())
    .then((text) => {
      // Mostrar el resultado en la página
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = "Solucion: <br>" + text;
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

/* SECTION botones imagen */
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const image = document.querySelector(".image img");

btn1.addEventListener("click", () => {
  image.src = "./diagramas/for.svg";
});

btn2.addEventListener("click", () => {
  image.src = "./diagramas/while.svg";
});

btn3.addEventListener("click", () => {
  image.src = "./diagramas/do-while.svg";
});
/* !SECTION botonoes de imagen */
