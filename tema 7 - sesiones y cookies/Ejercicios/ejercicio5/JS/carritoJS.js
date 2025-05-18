let carritoJS = cargarCarritoJS();

function cargarCarritoJS() {
  const guardado = JSON.parse(localStorage.getItem('carritoJS'));
  const carrito = {};
  for (let codigo in productos) {
    carrito[codigo] = (guardado && guardado[codigo]) || 0;
  }
  return carrito;
}

function guardarCarritoJS() {
  localStorage.setItem('carritoJS', JSON.stringify(carritoJS));
}

function agregarProductoJS(codigo, cantidad) {
  carritoJS[codigo] += cantidad;
  guardarCarritoJS();
  mostrarCarritoJS();
}

function eliminarProductoJS(codigo) {
  carritoJS[codigo] = 0;
  guardarCarritoJS();
  mostrarCarritoJS();
}

function cambiarCantidadJS(codigo, delta) {
  carritoJS[codigo] += delta;
  if (carritoJS[codigo] < 0) carritoJS[codigo] = 0;
  guardarCarritoJS();
  mostrarCarritoJS();
}

function vaciarCarritoJS() {
  for (let codigo in carritoJS) {
    carritoJS[codigo] = 0;
  }
  guardarCarritoJS();
  mostrarCarritoJS();
}

function mostrarCarritoJS() {
  const contenedor = document.getElementById('carritoJS');
  const totalSpan = document.getElementById('totalJS');
  contenedor.innerHTML = '';
  let total = 0;
  for (let codigo in carritoJS) {
    const cantidad = carritoJS[codigo];
    if (cantidad > 0) {
      const prod = productos[codigo];
      const subtotal = cantidad * prod.precio;
      total += subtotal;
      contenedor.innerHTML += `
        <div class="carrito-item">
          <img src="${prod.imagen}" alt="${prod.nombre}" />
          <div>${prod.nombre}</div>
          <div>Precio: ${prod.precio} Bs.</div>
          <div>
            <button onclick="cambiarCantidadJS('${codigo}', -1)">−</button>
            <span>${cantidad}</span>
            <button onclick="cambiarCantidadJS('${codigo}', 1)">+</button>
          </div>
          <div>Subtotal: ${subtotal.toFixed(2)} Bs.</div>
          <button onclick="eliminarProductoJS('${codigo}')">Eliminar</button>
        </div>
      `;
    }
  }
  totalSpan.textContent = `Total JS: ${total.toFixed(2)} Bs.`;
}
