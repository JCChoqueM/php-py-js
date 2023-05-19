function sumarJS() {
  const num1 = parseFloat(document.getElementById("num1").value);
  let a = 5;
  let b = "Hola";
  let c = true;

  console.log(typeof a); 
  console.log(typeof b); 
  console.log(typeof c); 
  const resultado = num1 / 6.96;
  console.log(num1);
  console.log(resultado);
  // Mostrar el resultado en la página
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `<br>JS<br>${num1} pesetas es :<br><br>  ${resultado.toFixed(
    2
  )} euros`;
}
