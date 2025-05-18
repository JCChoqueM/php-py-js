function mostrarProductos() {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';
  for (let codigo in productos) {
    const prod = productos[codigo];
    const cantidadId = `cantidadJS-${codigo}`;
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${prod.imagen}" width="280"><br>
        ${prod.nombre}<br>
        Precio: ${prod.precio} Bs.<br>
        <div class="controles">
          <div class="contador">
            <button onclick="cambiarCantidadContador('${cantidadId}', -1)">−</button>
            <span id="${cantidadId}" class="cantidad">1</span>
            <button onclick="cambiarCantidadContador('${cantidadId}', 1)">+</button>
          </div>
          <button onclick="agregarDesdeUI('${codigo}', '${cantidadId}', 'js')">Añadir al carrito JS</button>
          <br>
          <button onclick="agregarDesdeUI('${codigo}', '${cantidadId}', 'php')">Añadir al carrito PHP</button>
        </div>
      </div>
    `;
  }
}

function cambiarCantidadContador(id, delta) {
  const span = document.getElementById(id);
  let actual = parseInt(span.textContent);
  actual = Math.max(1, actual + delta);
  span.textContent = actual;
}

function agregarDesdeUI(codigo, cantidadId, tipo) {
  const cantidad = parseInt(document.getElementById(cantidadId).textContent);
  if (tipo === 'js') {
    agregarProductoJS(codigo, cantidad);
  } else if (tipo === 'php') {
    agregarProductoPHP(codigo, cantidad);
  }
}
function mostrarDetalle(codigo) {
  const prod = productos[codigo];
  const detalleHTML = `
    <img src="${prod.imagen}" width="300"><br>
    <h2>${prod.nombre}</h2>
    <p><strong>Precio:</strong> ${prod.precio} Bs.</p>
    <p>Un producto ideal para fans de los superhéroes.</p>
    <div class="contador">
      <button onclick="cambiarCantidadContador('detalleCantidad', -1)">−</button>
      <span id="detalleCantidad" class="cantidad">1</span>
      <button onclick="cambiarCantidadContador('detalleCantidad', 1)">+</button>
    </div>
    <button onclick="agregarDesdeUI('${codigo}', 'detalleCantidad', 'js')">Añadir al carrito JS</button>
    <br>
    <button onclick="agregarDesdeUI('${codigo}', 'detalleCantidad', 'php')">Añadir al carrito PHP</button>
  `;
  document.getElementById('detalleProducto').innerHTML = detalleHTML;
  document.getElementById('modalDetalle').classList.remove('hidden');
}

function cerrarModal() {
  document.getElementById('modalDetalle').classList.add('hidden');
}
