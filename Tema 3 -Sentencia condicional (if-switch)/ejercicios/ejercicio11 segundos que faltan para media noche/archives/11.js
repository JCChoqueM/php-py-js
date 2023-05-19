function sumarJS() {
  const hora = parseFloat(document.getElementById("num1").value);
  const min = parseFloat(document.getElementById("num2").value);
  if (Number.isFinite(hora) && Number.isFinite(min) && Number.isInteger(hora) && Number.isInteger(min)) {
    /* SECTION inicio codigo tras verificacion de formulario */
if((hora>=0&&hora<=23)&&(min>=0&&min<=59)){
segundos=86400-(((hora*60)*60)+min*60);
  mensaje = `La hora es ${(hora <= 9 ? "0" : "") + hora}:${(min <= 9 ? "0" : "") +min} ${hora<=12?"Am.":"Pm."}<br>Faltan ${segundos} seg. para la media noche`;
}else{
  mensaje= "Verifique la hora o los minutos"
}

    /* !SECTION fin codigo tras verificacion de formulario */
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }
  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}

