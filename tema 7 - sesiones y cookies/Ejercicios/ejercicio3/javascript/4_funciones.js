function procesarEjercicio1(dato) {
  const clave = 'datosGuardados';
  const datos = JSON.parse(sessionStorage.getItem(clave)) || [];

  datos.push(Number(dato));
  sessionStorage.setItem(clave, JSON.stringify(datos));

  if (dato < 0) {
    const positivos = datos.filter((d) => d >= 0);
    const contador = positivos.filter((d) => d >= 0).length;
    const impares = positivos.filter((d) => d % 2 !== 0);
    const mediaImpares = impares.length ? impares.reduce((acc, d) => acc + d, 0) / impares.length : 0;
    const pares = positivos.filter((d) => d % 2 === 0);
    const mayorPar = pares.length ? Math.max(...pares) : 0;
    sessionStorage.removeItem(clave); // Reinicia los datos
    return { datos: positivos, contador, numerosImpares: impares, mediaImpares, numerosPares: pares, mayorPar };
  }

  return { datos };
}
