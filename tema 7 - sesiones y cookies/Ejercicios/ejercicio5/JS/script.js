// === Datos base ===
const productos = {
  patitoBatman: { nombre: 'Patito batman', precio: 54, imagen: 'img/patito_batman.jpg' },
  patitoSuperman: { nombre: 'Patito Superman', precio: 40, imagen: 'img/patito_superman.jpg' },
  patitoJoker: { nombre: 'Patito Joker', precio: 18, imagen: 'img/patito_joker.jpg' },
  patitoRobin: { nombre: 'Patito Robin', precio: 10, imagen: 'img/patito_robin.jpg' },
};

// === Funciones de almacenamiento ===
function cargarCarrito() {
  const guardado = JSON.parse(localStorage.getItem('carrito'));
  const carrito = {};
  for (let codigo in productos) {
    carrito[codigo] = (guardado && guardado[codigo]) || 0;
  }
  return carrito;
}

function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// === Funciones de manipulación del carrito ===
function agregarProducto(carrito, codigo, cantidad) {
  carrito[codigo] += cantidad;
  guardarCarrito(carrito);
  mostrarCarrito(carrito);
}

function eliminarProducto(carrito, codigo) {
  carrito[codigo] = 0;
  guardarCarrito(carrito);
  mostrarCarrito(carrito);
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  const nuevo = {};
  for (let codigo in productos) {
    nuevo[codigo] = 0;
  }
  guardarCarrito(nuevo);
  mostrarCarrito(nuevo);
}

// === Funciones de UI ===
function mostrarProductos(carrito) {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';

  for (let codigo in productos) {
    const prod = productos[codigo];
    const cantidadId = `cantidad-${codigo}`;

    contenedor.innerHTML += `
      <div class="producto">
        <img src="${prod.imagen}" width="280"><br>
        ${prod.nombre}<br>
        Precio: ${prod.precio} Bs.<br>
        <div class="controles">
          <div class="contador">
            <button onclick="cambiarCantidad('${cantidadId}', -1)">−</button>
            <span id="${cantidadId}" class="cantidad">1</span>
            <button onclick="cambiarCantidad('${cantidadId}', 1)">+</button>
          </div>
          <button onclick="agregarDesdeUI('${codigo}', '${cantidadId}')">Añadir al carrito</button>
        </div>
      </div>
    `;
  }
}

function mostrarCarrito(carrito) {
  const contenedor = document.getElementById('carrito');
  const totalSpan = document.getElementById('total');
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
          <img src="${prod.imagen}" width="160"><br>
          ${prod.nombre}<br>
          Precio: ${prod.precio} Bs.<br>
          Unidades: ${cantidad}<br>
          <button onclick="eliminarProducto(carritoGlobal, '${codigo}')">Eliminar</button>
        </div>
      `;
    }
  }

  totalSpan.textContent = `Total: ${total.toFixed(2)} €`;
}

function cambiarCantidad(id, delta) {
  const span = document.getElementById(id);
  let actual = parseInt(span.textContent);
  actual = Math.max(1, actual + delta);
  span.textContent = actual;
}

function agregarDesdeUI(codigo, cantidadId) {
  const cantidad = parseInt(document.getElementById(cantidadId).textContent);
  agregarProducto(carritoGlobal, codigo, cantidad);
}

// === Inicialización global ===
const carritoGlobal = cargarCarrito();
mostrarProductos(carritoGlobal);
mostrarCarrito(carritoGlobal);
