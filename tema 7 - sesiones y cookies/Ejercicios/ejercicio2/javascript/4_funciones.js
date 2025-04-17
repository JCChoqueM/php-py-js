function procesarEjercicio1(dato) {
  const clave = 'datosGuardados';
  const datos = JSON.parse(sessionStorage.getItem(clave)) || [];

  datos.push(Number(dato));
  sessionStorage.setItem(clave, JSON.stringify(datos));

  if (dato < 0) {
    const positivos = datos.filter(d => d >= 0);
    const suma = positivos.reduce((acc, d) => acc + d, 0);
    const promedio = positivos.length ? suma / positivos.length : 0;
    sessionStorage.removeItem(clave); // Reinicia los datos
    return { datos: positivos, promedio };
  }

  return { datos };
}
