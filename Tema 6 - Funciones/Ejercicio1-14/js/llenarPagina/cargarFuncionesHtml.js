function cargarTooltip () {
  // Obtener el valor seleccionado del select
  var select = document.getElementById('accion')
  var opcionSeleccionada = select.options[select.selectedIndex].value

  // Cargar el contenido de funciones.html utilizando fetch
  fetch('funciones.html')
    .then(response => response.text())
    .then(data => {
      // Crear un elemento HTML temporal para manipular el contenido
      var tempDiv = document.createElement('div')
      tempDiv.innerHTML = data

      // Obtener el elemento específico por su ID según la opción seleccionada
      var tooltip = tempDiv.querySelector('#' + opcionSeleccionada + 'Tooltip')

      // Limpiar el contenedor de tooltips antes de agregar el nuevo contenido
      var tooltipsContainer = document.getElementById('tooltips-container')
      tooltipsContainer.innerHTML = ''

      // Insertar el elemento en el contenedor deseado
      tooltipsContainer.appendChild(tooltip)
    })
    .catch(error => console.error('Error:', error))
}

// Llamar a la función cargarTooltip al cargar la página para mostrar el primer tooltip


// Llamar a la función cargarTooltip cada vez que se cambie la selección en el select

