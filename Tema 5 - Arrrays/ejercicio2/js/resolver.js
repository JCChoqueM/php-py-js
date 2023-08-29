/* SECTION inicio boton PHP */
function resolverConPHP() {
  /*  const num1 = document.getElementById("num1").value;

  const formData = new FormData();
  formData.append("num1", num1); */

  fetch("archives/resolver/resolver.php", {
    /*   method: "POST",
    body: formData, */
  })
    .then((response) => response.text())
    .then((text) => {
      const resultadoDiv = document.getElementById("resultadoPHP");
      resultadoDiv.innerHTML = text;
      /*            document.getElementById("form").reset(); */
    })
    .catch((error) => console.error(error));
}
/* !SECTION fin boton PHP */

/* SECTION inicio boton Python */
function resolverConPython() {
  /*  const num1 = document.getElementById("num1").value; */

  // Enviar la solicitud al servidor utilizando fetch
  fetch("archives/resolver/resolverPy.php") //.php?num1=" + num1)+ "&metodo=python" || + "&num2=" + num2
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
function resolverAutomaticamente() {
  resolverConPHP();
  resolverConPython();
  resolverConJavaScript();
}
/* !SECTION fin sumar todo */
