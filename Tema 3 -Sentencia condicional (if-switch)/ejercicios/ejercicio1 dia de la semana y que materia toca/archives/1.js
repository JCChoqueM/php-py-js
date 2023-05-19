function sumarJS() {
  const num1 = (document.getElementById("num1").value);
  /*   let solucion; */
  switch (num1) {
    case "lunes":
      document.getElementById("resultadoJavascript").innerHTML = "Lunes tienes matematicas";
      break;
    case "martes":
      document.getElementById("resultadoJavascript").innerHTML = "Martes tienes lenguaje";
      break;
    case "miercoles":
      document.getElementById("resultadoJavascript").innerHTML = "Miércoles tienes fisica";
      break;
    case "jueves":
      document.getElementById("resultadoJavascript").innerHTML = "Jueves tienes quimica";
      break;
    case "viernes":
      document.getElementById("resultadoJavascript").innerHTML = "Viernes tienes musica";
      break;
    case "sabado":
      document.getElementById("resultadoJavascript").innerHTML = "Sábado tienes psicologia";
      break;
    case "domingo":
      document.getElementById("resultadoJavascript").innerHTML = "Domingo es tu dia de descanso Felicidades!!!";
      break;
    default:
      document.getElementById("resultadoJavascript").innerHTML = "No es un día valido";
  }

  /*   const resultadoDiv = document.getElementById("resultadoJavascript");
    resultadoDiv.innerHTML = `${solucion} `; */
}
