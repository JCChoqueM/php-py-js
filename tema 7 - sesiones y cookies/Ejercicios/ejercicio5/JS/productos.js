const productos = {
  patitoBatman: { nombre: 'Patito Batman', precio: 54, imagen: 'img/patito_batman.jpg' },
  patitoSuperman: { nombre: 'Patito Superman', precio: 40, imagen: 'img/patito_superman.jpg' },
  patitoJoker: { nombre: 'Patito Joker', precio: 18, imagen: 'img/patito_joker.jpg' },
  patitoRobin: { nombre: 'Patito Robin', precio: 10, imagen: 'img/patito_robin.jpg' },
};
function mostrarProductos() {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';
  for (let codigo in productos) {
    const prod = productos[codigo];
    const cantidadId = `cantidadJS-${codigo}`;
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${prod.imagen}" width="280" onclick="mostrarDetalle('${codigo}')"><br>
        ${prod.nombre}<br>
        Precio: ${prod.precio} Bs.<br>
        <div class="controles">
          <div class="contador">
            <button onclick="cambiarCantidadContador('${cantidadId}', -1)">−</button>
            <span id="${cantidadId}" class="cantidad">1</span>
            <button onclick="cambiarCantidadContador('${cantidadId}', 1)">+</button>
          </div>
          <button onclick="agregarDesdeUI('${codigo}', '${cantidadId}', 'js')">Añadir al carrito JS</button>
        </div>
      </div>
    `;
  }
}
