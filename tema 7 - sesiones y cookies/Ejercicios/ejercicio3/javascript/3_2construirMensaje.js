function construirMensaje(resultado) {
  const { datos, contador, sumaTotal, media } = resultado;

  // Paleta armónica y más variada (colores terciarios y análogos)
  const colores = {
    titulo: '#3b3b98',        // azul violáceo (profundo y legible)
    numero: 'purple',        // naranja quemado
    suma: '#d63031',          // rojo coral fuerte
    media: '#00b894',         // verde menta
    temporal: '#6c5ce7',      // púrpura claro
    detalle: 'green',       // amarillo cálido
  };

  const resaltar = (texto, color) =>
    `<span style="color:${color}; font-weight:bold;">${texto}</span>`;

  let mensaje = `<div style="font-family: Arial, sans-serif;">`;

  mensaje += `<span style="color:${colores.titulo}; font-size: 1.2em; font-weight:bold;">📋 Datos introducidos:</span><br> ${datos.map(n => resaltar(n, colores.numero)).join(', ')}`;

  if (sumaTotal <= 1000) {
    mensaje += `<br><span style="color:${colores.temporal};">🔄 Suma temporal:</span> ${resaltar(sumaTotal, colores.temporal)}`;
  } else {
    mensaje += `<br><span style="color:${colores.suma}; font-weight:bold;">⚠️ La suma ${sumaTotal} ha  superado el límite de 1000.🤓</span>`;
  }

  if (contador !== undefined) {
    mensaje += `<br><span style="color:${colores.detalle}; font-weight:bold;">🔢 Cantidad de números introducidos:</span> ${resaltar(contador, colores.numero)}`;
    mensaje += `<br><span style="color:${colores.suma}; font-weight:bold;">➕ Suma total:</span> ${resaltar(sumaTotal, colores.suma)}`;
    mensaje += `<br><span style="color:${colores.media}; font-weight:bold;">📊 Media:</span> ${resaltar(media.toFixed(2), colores.media)}`;
  }

  mensaje += `</div>`;
  return mensaje;
}
