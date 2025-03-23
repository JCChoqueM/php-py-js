
  // Crear una solicitud XMLHttpRequest
  var xhttp = new XMLHttpRequest();

  // Definir qué hacer cuando la solicitud está lista
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Insertar el contenido de funciones.html en el div con el id "funciones-container"
      document.getElementById("funciones-container").innerHTML = this.responseText;
    }
  };

  // Abrir y enviar la solicitud
  xhttp.open("GET", "funciones.html", true);
  xhttp.send();
