function sumarJS() {
  const dia = parseInt(document.getElementById("num1").value);
  const mes = parseInt(document.getElementById("num2").value);
  if (Number.isFinite(dia) && Number.isFinite(mes)) {
    /* SECTION inicio codigo tras verificacion de formulario */
    if (((dia > 0 && dia <= 31) && (mes > 0 && mes <= 12)) && ((mes == 2 && dia <= 29) || ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia <= 30) || ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia <= 31))) {

      if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {

        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 3 ? "Marzo" : "Abril")}<br>Su signo es Aries`;

      } else if ((dia >= 20 && mes == 4) || (dia <= 20 && mes == 5)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 4 ? "Abril" : "Mayo")}<br>Su signo es Tauro`;

      } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 5 ? "Mayo" : "Junio")}<br>Su signo es Geminis`;

      } else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 6 ? "Junio" : "Julio")}<br>Su signo Cancer`;

      } else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 7 ? "Julio" : "Agosto")}<br>Su signo es Leo`;

      } else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 8 ? "Agosto" : "Septiembre")}<br>Su signo es Virgo`;

      } else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 9 ? "Septiembre" : "Octubre")}<br>Su signo es Libra`;

      } else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 10 ? "Octubre" : "Noviembre")}<br>Su signo es Escorpio`;

      } else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 11 ? "Noviembre" : "Diciembre")}<br>Su signo es Sagitario`;

      } else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 12 ? "Diciembre" : "Enero")}<br>Su signo es Capricornio`;

      } else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 1 ? "Enero" : "Febrero")}<br>Su signo es Acuario`;

      } else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        mensaje = `Su fecha de nacimiento es:<br> ${dia} de ${(mes == 2 ? "Febrero" : "Marzo")}<br>Su signo es Piscis`;

      }
    } else {
      mensaje = "Verifique la fecha de su nacimiento";
    }

    /* !SECTION fin codigo tras verificacion de formulario */
  } else {
    mensaje = `Ingrese un número válido en el formulario `;
  }

  const resultadoDiv = document.getElementById("resultadoJavascript");
  resultadoDiv.innerHTML = `${mensaje}`;
}

