var peseta = 15;
var mensaje = `${peseta}euros es igual a ${(peseta / 6.96).toFixed(3)} euros`;
console.log(mensaje);
document.getElementById("js").innerHTML = mensaje;
