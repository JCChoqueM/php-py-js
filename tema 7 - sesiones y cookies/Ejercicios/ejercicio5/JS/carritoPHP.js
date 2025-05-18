function cargarCarritoPHP() {
  fetch('php/carrito.php?action=mostrar')
    .then((r) => r.json())
    .then((data) => {
      mostrarCarritoPHP(data.carrito);
    });
}

function agregarProductoPHP(codigo, cantidad) {
  const formData = new FormData();
  formData.append('codigo', codigo);
  formData.append('cantidad', cantidad);
  fetch('php/carrito.php?action=agregar', { method: 'POST', body: formData })
    .then((r) => r.json())
    .then((data) => mostrarCarritoPHP(data.carrito));
}

function cambiarCantidadPHP(codigo, delta) {
  const formData = new FormData();
  formData.append('codigo', codigo);
  formData.append('delta', delta);
  fetch('php/carrito.php?action=cambiar', { method: 'POST', body: formData })
    .then((r) => r.json())
    .then((data) => mostrarCarritoPHP(data.carrito));
}

function eliminarProductoPHP(codigo) {
  const formData = new FormData();
  formData.append('codigo', codigo);
  fetch('php/carrito.php?action=eliminar', { method: 'POST', body: formData })
    .then((r) => r.json())
    .then((data) => mostrarCarritoPHP(data.carrito));
}

function vaciarCarritoPHP() {
  fetch('php/carrito.php?action=vaciar', { method: 'POST' })
    .then((r) => r.json())
    .then((data) => mostrarCarritoPHP(data.carrito));
}

function mostrarCarritoPHP(carrito) {
  const contenedor = document.getElementById('carritoPHP');
  const totalSpan = document.getElementById('totalPHP');
  contenedor.innerHTML = '';
  let total = 0;
  for (let codigo in carrito) {
    const cantidad = carrito[codigo];
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
            <button onclick="cambiarCantidadPHP('${codigo}', -1)">−</button>
            <span>${cantidad}</span>
            <button onclick="cambiarCantidadPHP('${codigo}', 1)">+</button>
          </div>
          <div>Subtotal: ${subtotal.toFixed(2)} Bs.</div>
          <button onclick="eliminarProductoPHP('${codigo}')">Eliminar</button>
        </div>
      `;
    }
  }
  totalSpan.textContent = `Total PHP: ${total.toFixed(2)} Bs.`;
}
