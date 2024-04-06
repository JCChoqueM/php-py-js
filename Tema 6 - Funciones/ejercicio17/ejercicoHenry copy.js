function obtenerDiaSemana(numeroDeDia) {
  // La función recibe un "numeroDeDia" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

  if (numeroDeDia == 1) {
    return "Lunes";
  } else if (numeroDeDia == 2) {
    return "Martes";
  } else if (numeroDeDia == 3) {
    return "Miercoles";
  } else if (numeroDeDia == 4) {
    return "Jueves";
  } else if (numeroDeDia == 5) {
    return "Viernes";
  } else if (numeroDeDia == 6) {
    return "Sabado";
  } else if (numeroDeDia == 7) {
    return "Domingo";
  } else {
    return "No es un día de la semana";
  }
}
let numero = 1;
let diaSemana = obtenerDiaSemana(numero);
console.log(diaSemana);
