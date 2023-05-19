var x = 2;
var y = "mascota";

function mostrarVariables() {
  var elemento = document.createElement("div");
  elemento.innerHTML = "x = " + x + "<br> y = " + y;
  document.body.appendChild(elemento);
}
