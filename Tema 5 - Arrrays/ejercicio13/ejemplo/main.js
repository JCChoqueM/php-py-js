document.addEventListener('DOMContentLoaded', function () {
  const cartasContainer = document.getElementById('cartasContainer')

  fetch('generar_cartas.php')
    .then(response => response.json())
    .then(data => {
      const [cartas, puntosTotales] = data

      cartas.forEach(carta => {
        const [figura, palo] = carta.split(' de ')

        // Crear contenedor de carta
        const cartaContainer = document.createElement('div')
        cartaContainer.classList.add('carta')

        // Crear imagen
        const img = document.createElement('img')
        img.src = `images/${carta.toLowerCase().replace(/ /g, '_')}.png`
        img.alt = carta
        cartaContainer.appendChild(img)

        // Crear texto con el nombre de la carta
        const textoNombre = document.createElement('span')
        textoNombre.textContent = carta
        cartaContainer.appendChild(textoNombre)

        // Crear texto con el valor
        const textoValor = document.createElement('span')
        textoValor.textContent = `Valor: ${obtenerValorCarta(figura)}`
        cartaContainer.appendChild(textoValor)

        // Agregar carta al contenedor principal
        cartasContainer.appendChild(cartaContainer)
      })

      const puntosDiv = document.createElement('div')
      puntosDiv.textContent = `Puntos Totales: ${puntosTotales}`
      cartasContainer.appendChild(puntosDiv)
    })
    .catch(error => console.error('Error al obtener las cartas:', error))

  function obtenerValorCarta (figura) {
    // Implementa la lógica para obtener el valor de la carta según el juego de la brisca aquí
    // Utiliza el array $puntuacion en el lado del servidor (PHP) y replica la lógica aquí
    // Puedes adaptar esta función según tus necesidades.
    return 0
  }
})
