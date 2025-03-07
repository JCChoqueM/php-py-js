function funcion_esCapicua(elemento,datos,mostrarFuncion) {

    const valor = datos.num1 || "";

    const esCapicua = valor === valor.split("").reverse().join("");

    mostrarFuncion(document.querySelector("#resultadoJS"), esCapicua ? "Es capicúa" : "No es capicúa");
  }
  