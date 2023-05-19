var euro= 29;
var mensaje = `${euro} euros es igual a ${(euro * 6.96).toFixed(4)} pesetas`;
console.log(mensaje);
document.getElementById("js").innerHTML = mensaje;
