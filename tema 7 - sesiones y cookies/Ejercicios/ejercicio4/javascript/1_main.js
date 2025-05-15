document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const usuarioInput = document.getElementById('usuarioJS');
  const claveInput = document.getElementById('claveJS');
  const botonIrAplicacion = document.querySelector('.formulario__boton--enviarJS[type="button"]');
  const botonesEnviar = document.querySelectorAll('.botonesSesion input[type="submit"]');

  const botonIniciarSesion = botonesEnviar[0];
  const botonCerrarSesion = botonesEnviar[1];

  const contenedorInputs = document.getElementById('contenedorInputs');

  let mensajeDiv = null;
  let timeoutId = null;

  function actualizarEstadoSesion() {
    const sesionActiva = sessionStorage.getItem('sesionActiva') === 'true';
    const nombreUsuario = sessionStorage.getItem('nombreUsuario') || '';

    usuarioInput.disabled = sesionActiva;
    claveInput.disabled = sesionActiva;

    botonIniciarSesion.disabled = sesionActiva;
    botonIniciarSesion.style.backgroundColor = sesionActiva ? 'gray' : '';
    botonIniciarSesion.style.cursor = sesionActiva ? 'not-allowed' : 'pointer';

    botonCerrarSesion.disabled = !sesionActiva;
    botonCerrarSesion.style.backgroundColor = !sesionActiva ? 'gray' : '';
    botonCerrarSesion.style.cursor = !sesionActiva ? 'not-allowed' : 'pointer';

    if (sesionActiva) {
      botonIrAplicacion.style.backgroundColor = 'green';
      botonIrAplicacion.textContent = `Bienvenido ${nombreUsuario}, puedes ir a la aplicación`;
      botonIrAplicacion.disabled = false;
      botonIrAplicacion.style.cursor = 'pointer';
    } else {
      botonIrAplicacion.style.backgroundColor = 'red';
      botonIrAplicacion.textContent = 'No has iniciado sesión, puedes ir a la aplicación';
      botonIrAplicacion.disabled = false; // Siempre habilitado
      botonIrAplicacion.style.cursor = 'pointer';
    }
  }

  function mostrarMensajeError(mensaje) {
    if (!mensajeDiv) {
      mensajeDiv = document.createElement('div');
      mensajeDiv.style.color = 'red';
      mensajeDiv.style.textAlign = 'center';
      mensajeDiv.style.marginTop = '10px';
      form.appendChild(mensajeDiv);
    }
    mensajeDiv.textContent = mensaje;

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      mensajeDiv.remove();
      mensajeDiv = null;
      timeoutId = null;
    }, 6000);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const clave = claveInput.value.trim();

    const usuarioCorrecto = 'admin';
    const claveCorrecta = '1234';

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
      sessionStorage.setItem('sesionActiva', 'true');
      sessionStorage.setItem('nombreUsuario', usuario);
      actualizarEstadoSesion();
    } else {
      mostrarMensajeError('Usuario o contraseña incorrectos');
    }
  });

  botonCerrarSesion.addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.removeItem('sesionActiva');
    sessionStorage.removeItem('nombreUsuario');
    location.reload(); // Recargar para volver al login
  });

  botonIrAplicacion.addEventListener('click', function() {
    cargarAplicacion();
  });

  function cargarAplicacion() {
    contenedorInputs.innerHTML = `
      <h2 class="formulario__titulo">Conversor Romano a Número</h2>
      <label for="romano" class="label__letra">Ingrese número romano:</label>
      <input type="text" id="romano" placeholder="Ej: XIV" required><br><br>
      <h3 id="resultadoConversion"></h3>
      <div id="mensajeSesion"></div>
      <br>
      <input type="submit" value="Cerrar Sesión" class="formulario__boton formulario__boton--enviarJS">
    `;

    const inputRomano = document.getElementById('romano');
    const resultadoConversion = document.getElementById('resultadoConversion');
    const mensajeSesion = document.getElementById('mensajeSesion');
    const botonCerrar = document.querySelector('#contenedorInputs input[type="submit"]');

    // Verificamos si hay sesión activa
    const sesionActiva = sessionStorage.getItem('sesionActiva') === 'true';
    if (!sesionActiva) {
      mensajeSesion.textContent = 'No has iniciado sesión, no puedes acceder a la aplicación. Debes iniciar sesión.';
      mensajeSesion.style.color = 'red';
      mensajeSesion.style.textAlign = 'center';
      inputRomano.disabled = true; // Bloqueamos el input
    } else {
      mensajeSesion.textContent = '';
      inputRomano.disabled = false;
    }

    inputRomano.addEventListener('input', function() {
      const romano = inputRomano.value.trim().toUpperCase();
      if (romano === '') {
        resultadoConversion.textContent = '';
        return;
      }

      const resultado = convertirRomanoAEntero(romano);
      if (resultado !== null) {
        resultadoConversion.textContent = `Resultado: ${resultado}`;
        resultadoConversion.style.color = 'green';
      } else {
        resultadoConversion.textContent = `Número romano inválido`;
        resultadoConversion.style.color = 'red';
      }
    });

    botonCerrar.addEventListener('click', function(event) {
      event.preventDefault();
      sessionStorage.removeItem('sesionActiva');
      sessionStorage.removeItem('nombreUsuario');
      location.reload();
    });
  }

  function convertirRomanoAEntero(romano) {
    const valores = {
      I: 1, V: 5, X: 10, L: 50,
      C: 100, D: 500, M: 1000
    };
    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
      const letra = romano[i];
      const valor = valores[letra];
      if (!valor) return null;
      if (valor < prev) {
        total -= valor;
      } else {
        total += valor;
      }
      prev = valor;
    }
    return total;
  }

  actualizarEstadoSesion();
});
