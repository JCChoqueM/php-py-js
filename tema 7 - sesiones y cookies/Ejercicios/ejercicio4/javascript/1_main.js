document.addEventListener('DOMContentLoaded', function () {
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
      botonIrAplicacion.style.backgroundColor = 'gray'; // cambiar de 'red' a 'gray'
      botonIrAplicacion.textContent = 'No has iniciado sesión, no puedes ir a la aplicación';
      botonIrAplicacion.disabled = true; // desactivar botón
      botonIrAplicacion.style.cursor = 'not-allowed'; // cursor coherente
    }
  }

  const contenedorMensajes = document.querySelector('.botonesSesion');

  function mostrarMensajeError(mensaje) {
    if (!mensajeDiv) {
      mensajeDiv = document.createElement('div');
      mensajeDiv.style.color = 'red';
      mensajeDiv.style.textAlign = 'center';
      mensajeDiv.style.marginTop = '10px';
      contenedorMensajes.appendChild(mensajeDiv);
    }

    mensajeDiv.textContent = mensaje;

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      mensajeDiv.remove();
      mensajeDiv = null;
      timeoutId = null;
    }, 6000);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const clave = claveInput.value.trim();

    const usuarioCorrecto = 'admin';
    const claveCorrecta = '1234';

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
      sessionStorage.setItem('sesionActiva', 'true');
      sessionStorage.setItem('nombreUsuario', usuario);
      actualizarEstadoSesion();
      cargarAplicacion();
    } else {
      mostrarMensajeError('Usuario o contraseña incorrectos');
    }
  });

  botonCerrarSesion.addEventListener('click', function (event) {
    event.preventDefault();
    sessionStorage.removeItem('sesionActiva');
    sessionStorage.removeItem('nombreUsuario');
    location.reload(); // Recargar para volver al login
  });

  botonIrAplicacion.addEventListener('click', function () {
    cargarAplicacion();
  });

  function cargarAplicacion() {
    document.querySelector('.botonesSesion').style.display = 'none';
    botonIrAplicacion.style.display = 'none'; // Oculta el botón 'Ir a la aplicación'
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

    inputRomano.addEventListener('input', function () {
      const romano = inputRomano.value.trim().toUpperCase();
      if (romano === '') {
        resultadoConversion.textContent = '';
        return;
      }

      const resultadoObj = convertirRomanoAEntero(romano);

      resultadoConversion.textContent = resultadoObj.mensaje;
      resultadoConversion.style.color = resultadoObj.valor !== null ? 'green' : 'red';
    });

    botonCerrar.addEventListener('click', function (event) {
      event.preventDefault();
      sessionStorage.removeItem('sesionActiva');
      sessionStorage.removeItem('nombreUsuario');
      location.reload();
    });
  }

  function convertirRomanoAEntero(romano) {
    const valores = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    if (!romano) {
      return {
        valor: null,
        mensaje: 'El campo está vacío. Ingresa un número romano.',
      };
    }

    const letrasValidas = /^[IVXLCDM]+$/;
    if (!letrasValidas.test(romano)) {
      return {
        valor: null,
        mensaje: 'Número romano inválido: contiene caracteres no permitidos.',
      };
    }

    // Reglas específicas con explicación clara
    const reglas = [
      {
        regex: /(I{4,}|X{4,}|C{4,}|M{4,})/,
        mensaje: 'No se puede repetir I, X, C o M más de tres veces seguidas.',
      },
      {
        regex: /(V{2,}|L{2,}|D{2,})/,
        mensaje: 'V, L y D no se pueden repetir.',
      },
      {
        regex: /IL|IC|ID|IM/,
        mensaje: 'I solo puede restar a V y X (no a L, C, D o M).',
      },
      {
        regex: /VX|VL|VC|VD|VM/,
        mensaje: 'V no puede restar a ningún número.',
      },
      {
        regex: /XD|XM/,
        mensaje: 'X solo puede restar a L y C (no a D o M).',
      },
      {
        regex: /LC|LD|LM/,
        mensaje: 'L no puede restar a ningún número.',
      },
      {
        regex: /DM/,
        mensaje: 'D no puede restar a ningún número.',
      },
      {
        regex: /([IVXLCDM])\1{3,}/,
        mensaje: 'No se puede repetir ningún símbolo más de tres veces consecutivas.',
      },
    ];

    for (const regla of reglas) {
      if (regla.regex.test(romano)) {
        return {
          valor: null,
          mensaje: `Número romano inválido: ${regla.mensaje}`,
        };
      }
    }

    // Validación completa de estructura correcta (hasta 3999)
    const romanoValido = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!romanoValido.test(romano)) {
      return {
        valor: null,
        mensaje: 'Número romano inválido: no cumple con el orden ni la estructura válida (por ejemplo, no puede ir XC antes de L).',
      };
    }

    // Si pasa todas las validaciones, convertimos
    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
      const letra = romano[i];
      const valor = valores[letra];

      if (valor < prev) {
        total -= valor;
      } else {
        total += valor;
      }
      prev = valor;
    }

    return {
      valor: total,
      mensaje: `Conversión exitosa: ${romano} = ${total}`,
    };
  }

  actualizarEstadoSesion();
  if (sessionStorage.getItem('sesionActiva') === 'true') {
    cargarAplicacion();
  }
});
