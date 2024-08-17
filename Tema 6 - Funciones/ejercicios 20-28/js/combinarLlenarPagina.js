const archivosJavaScript = [
  'js/llenarPagina/insertarSpan.js',
  'js/llenarPagina/funcionesParatexto.js',
  'js/llenarPagina/cargarFuncionesHtml.js',
  'js/llenarPagina/cambiarColor.js'
]

async function cargarYAgregarArchivosAlHead () {
  try {
    for (const ruta of archivosJavaScript) {
      const script = document.createElement('script')
      script.src = ruta
      if (ruta.endsWith('.js')) {
        script.defer = true
      }
      document.head.appendChild(script)
    }
  } catch (error) {
    console.error(error)
    // Y aquí también puedes manejar el error según tus necesidades.
  }
}

cargarYAgregarArchivosAlHead()
