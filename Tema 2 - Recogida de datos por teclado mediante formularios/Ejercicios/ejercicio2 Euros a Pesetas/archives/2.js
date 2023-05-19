function sumarJS() {
  const num1 = parseInt(document.getElementById("num1").value);

  const resultado = num1*6.96;
  console.log(resultado);
  // Mostrar el resultado en la página
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<br>JS<br>${num1} euros es :<br><br>  ${resultado} pesetas`;
}
