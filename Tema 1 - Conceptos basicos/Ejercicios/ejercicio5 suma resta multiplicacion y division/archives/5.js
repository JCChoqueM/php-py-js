var x = 144;
var y = 999;
/* var division = (x / y).toFixed(3); */
var mensaje = `La suma de ${x} + ${y} = ${x + y}<br>
La resta de ${x} - ${y} = ${x - y}<br>
La multiplicación de ${x} * ${y} = ${x * y}<br>
La división de ${x} / ${y} = ${(x / y).toFixed(2)}`;

document.getElementById("js").innerHTML = mensaje;
