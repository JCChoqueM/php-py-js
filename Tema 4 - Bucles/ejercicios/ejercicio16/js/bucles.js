/* SECTION inicio For boton PHP */
function forPHP() {
  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1);

  fetch("archives/for/forPHP.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = "FOR PHP:<br>" + text;
      /*     document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin For boton PHP */

/* SECTION inicio For boton Python */
function forPython() {
  const num1 = document.getElementById("num1").value;

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/for/forPY.php?num1=" + num1) //+ "&metodo=python" || + "&num2=" + num2
    .then((response) => response.text())
    .then((text) => {
      // Mostrar el resultado en la página
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = "FOR PY: <br>" + text;
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin For boton Python */

/* SECTION inicio sumar todo */
function calculoFor() {
  forPHP();
  forPython();
  forJS();
}
/* !SECTION fin sumar todo */

/* SECTION inicio boton PHP */
function whilePHP() {
  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1);

  fetch("archives/while/whilePHP.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = "WHILE PHP:<br>" + text;
      /*    document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
function whilePython() {
  const num1 = document.getElementById("num1").value;

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/while/whilePY.php?num1=" + num1) //+ "&metodo=python" || + "&num2=" + num2
    .then((response) => response.text())
    .then((text) => {
      // Mostrar el resultado en la página
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = "WHILE PY:<br>" + text;
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton Python */

/* SECTION inicio sumar todo */
function calculoWhile() {
  whilePHP();
  whilePython();
  whileJS();
}
/* !SECTION fin sumar todo */

/* SECTION inicio boton PHP */
function dowhilePHP() {
  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1);

  fetch("archives/dowhile/dowhilePHP.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = "Do-WHILE PHP:<br>" + text;
      /*       document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
function dowhilePython() {
  const num1 = document.getElementById("num1").value;

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/dowhile/dowhilePY.php?num1=" + num1) //+ "&metodo=python" || + "&num2=" + num2
    .then((response) => response.text())
    .then((text) => {
      // Mostrar el resultado en la página
      const resultadoDiv = document.getElementById("resultadoPython");
      resultadoDiv.innerHTML = "Do-WHILE PY:<br>" + text;
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton Python */

/* SECTION inicio sumar todo */
function calculoDowhile() {
  dowhilePHP();
  dowhilePython();
  dowhileJS();
}
/* !SECTION fin sumar todo */
