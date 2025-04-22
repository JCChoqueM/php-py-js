function procesarEjercicio1(dato) {
  const clave = 'datosGuardados';

  const datos = JSON.parse(sessionStorage.getItem(clave)) || [];
  datos.push(Number(dato));
  sessionStorage.setItem(clave, JSON.stringify(datos));
  console.log(datos);
  let sumaTotal = datos.reduce((acc, d) => acc + d, 0);
  console.log(sumaTotal);
  if (sumaTotal > 1000) {
    const contador = datos.length;
    const media = sumaTotal / contador;
    sessionStorage.removeItem(clave); // Reinicia los datos
    return { datos, contador, sumaTotal, media };
  }

  return { datos,sumaTotal };
}
