class UIHandler {
    // Constructor de la clase que recibe los IDs de los elementos HTML
    constructor(selectId, botonId, contenedorId, tooltipId, descripcionId, inputsId) {
      this.select = document.getElementById(selectId); // Elemento <select>
      this.boton = document.getElementById(botonId); // Botón principal
      this.contenedor = document.getElementById(contenedorId); // Contenedor de textos
      this.tooltip = document.getElementById(tooltipId); // Tooltip de descripción
      this.descripcionDiv = document.getElementById(descripcionId); // Div donde se muestra la descripción
      this.contenedorInputs = document.getElementById(inputsId); // Contenedor de inputs dinámicos
      this.textos = []; // Array que almacena los textos a manejar
    }
  
    // Método para inicializar la interfaz con los datos proporcionados
    inicializar(textos) {
      this.textos = textos; // Guarda la lista de textos
      this.generarOpciones(); // Genera opciones del <select>
      this.generarTextos(); // Genera los textos dinámicos en el contenedor
      this.agregarEventos(); // Agrega eventos a los elementos
      this.actualizarInterfaz(); // Actualiza la interfaz inicial
    }
  
    // Método para generar las opciones del <select>
    generarOpciones() {
      this.textos.forEach((item, index) => {
        const optionElement = document.createElement('option'); // Crea una opción
        optionElement.value = item.texto; // Asigna el valor de la opción
        optionElement.textContent = `${index + 1}.-${item.texto}`; // Texto visible en la opción
        this.select.appendChild(optionElement); // Agrega la opción al <select>
      });
    }
  
    // Método para generar los textos dentro del contenedor
    generarTextos() {
      this.textos.forEach((item, index) => {
        const span = document.createElement('SPAN'); // Crea un elemento <span>
        span.textContent = `${index + 1}.-${item.texto} `; // Asigna el texto
        span.className = 'texto-item'; // Asigna una clase CSS
        span.style.color = `var(--${item.texto})`; // Aplica color dinámico
        
        // Agrega eventos para mostrar y ocultar tooltip
        span.addEventListener('mouseover', () => this.mostrarTooltip(item, span));
        span.addEventListener('mouseout', () => this.ocultarTooltip());
        span.addEventListener('click', () => this.actualizarSeleccion(item.texto));
        
        this.contenedor.appendChild(span); // Agrega el span al contenedor
      });
    }
  
    // Método para mostrar el tooltip con la descripción del elemento
    mostrarTooltip(item, span) {
      this.tooltip.textContent = item.descripcion; // Asigna el texto al tooltip
      this.tooltip.style.display = 'block'; // Muestra el tooltip
      const rect = span.getBoundingClientRect(); // Obtiene la posición del span
      this.tooltip.style.left = `${rect.left}px`; // Posiciona el tooltip a la izquierda del span
      this.tooltip.style.top = `${rect.bottom + 5}px`; // Posiciona debajo del span
      this.tooltip.style.backgroundColor = `var(--${item.texto})`; // Aplica color de fondo dinámico
    }
  
    // Método para ocultar el tooltip
    ocultarTooltip() {
      this.tooltip.style.display = 'none'; // Oculta el tooltip
    }
  
    // Método para actualizar el <select> cuando se hace clic en un texto
    actualizarSeleccion(valor) {
      this.select.value = valor; // Cambia el valor seleccionado en el <select>
      this.select.dispatchEvent(new Event('change')); // Dispara el evento 'change' manualmente
    }
  
    // Método para agregar eventos a los elementos
    agregarEventos() {
      this.select.addEventListener('change', () => this.actualizarInterfaz()); // Evento para actualizar la interfaz cuando cambia la selección
    }
  
    // Método para actualizar la interfaz cuando cambia la selección
    actualizarInterfaz() {
      const valorSeleccionado = this.select.value; // Obtiene el valor seleccionado
      this.cambiarColorBoton(valorSeleccionado); // Cambia el color del botón
      this.insertarDescripcion(valorSeleccionado); // Muestra la descripción correspondiente
      this.generarInputs(valorSeleccionado); // Genera los inputs dinámicos si es necesario
    }
  
    // Método para cambiar el color del botón según la opción seleccionada
    cambiarColorBoton(valor) {
      this.boton.style.backgroundColor = `var(--${valor})` || ''; // Aplica color dinámico
    }
  
    // Método para insertar la descripción en el div correspondiente
    insertarDescripcion(valor) {
      const textoSeleccionado = this.textos.find(item => item.texto === valor); // Busca el texto correspondiente
      this.descripcionDiv.textContent = textoSeleccionado ? textoSeleccionado.descripcion : 'Seleccione una función para ver su descripción.'; // Muestra la descripción o un mensaje predeterminado
    }
  
    // Método para generar inputs dinámicamente según la opción seleccionada
    generarInputs(valor) {
      this.contenedorInputs.innerHTML = ''; // Limpia los inputs anteriores
      const funcionSeleccionada = this.textos.find(funcion => funcion.texto === valor); // Busca la función seleccionada
      if (!funcionSeleccionada) return; // Si no hay función seleccionada, salir
      
      funcionSeleccionada.inputs.forEach(inputConfig => {
        const label = document.createElement('label'); // Crea un label
        label.setAttribute('for', inputConfig.id); // Asigna el atributo 'for'
        label.textContent = inputConfig.label; // Asigna el texto del label
        label.classList.add('label__letra'); // Agrega una clase CSS
  
        const input = document.createElement('input'); // Crea un input
        input.type = 'number'; // Define el tipo de input como numérico
        input.id = inputConfig.id; // Asigna el ID del input
        input.name = inputConfig.name; // Asigna el nombre del input
        input.placeholder = inputConfig.placeholder; // Asigna el placeholder
        input.required = true; // Define el input como obligatorio
  
        this.contenedorInputs.appendChild(label); // Agrega el label al contenedor
        this.contenedorInputs.appendChild(input); // Agrega el input al contenedor
      });
    }
  }
  
  // Inicialización de la clase con los IDs de los elementos HTML
  const uiHandler = new UIHandler('miSelect', 'miBoton', 'contenedor', 'tooltip', 'descripcionDiv', 'contenedorInputs');
  uiHandler.inicializar(textos); // Llamada al método de inicialización con los textos
  