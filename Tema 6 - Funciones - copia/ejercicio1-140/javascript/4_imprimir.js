function imprimir_esCapicua(elemento,datos,mostrarFuncion) {
    console.log("Procesando datos:", datos);
    const valor = datos.num1 || "";
    console.log(valor)
    const esCapicua = valor === valor.split("").reverse().join("");
    console.log(esCapicua)
    mostrarFuncion(document.querySelector("#resultadoJS"), esCapicua ? "Es capicúa" : "No es capicúa");
  }
  