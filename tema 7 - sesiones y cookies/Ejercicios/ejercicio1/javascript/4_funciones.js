function procesarEjercicio1(dato) {
  console.log('message:', dato);
  const clave = 'datosGuardados'; // clave fija
  const datos = JSON.parse(sessionStorage.getItem(clave)) || [];
  datos.push(dato);
  sessionStorage.setItem(clave, JSON.stringify(datos));
}
