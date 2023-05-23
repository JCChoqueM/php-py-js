<script>
      /* SECTION inicio boton PHP */
      function sumarPHP() {
        const num1 = document.getElementById("num1").value;

        const formData = new FormData();
        formData.append("num1", num1);

        fetch("archives/7.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((text) => {
            const resultadoDiv = document.getElementById("resultadoPHP");
            resultadoDiv.innerHTML = text;
          })
          .catch((error) => console.error(error));
      }
      /* !SECTION fin boton PHP */

      /* SECTION inicio boton Python */
      function sumarPython() {
        const num1 = document.getElementById("num1").value;

        // Enviar la solicitud al servidor utilizando fetch
        fetch("archives/7py.php?num1=" + num1) //+ "&metodo=python" || + "&num2=" + num2
          .then((response) => response.text())
          .then((text) => {
            // Mostrar el resultado en la página
            const resultadoDiv = document.getElementById("resultadoPython");
            resultadoDiv.innerHTML = text;
          })
          .catch((error) => console.error(error));
      }
      /* !SECTION fin boton Python */

      /* SECTION inicio sumar todo */
      function sumarTodo() {
        sumarPHP();
        sumarPython();
        sumarJS();
      }
      /* !SECTION fin sumar todo */

      /* SECTION inicio Numeros random */
      function generarNumero(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      function llenarFormulario() {
        const num1 = document.getElementById("num1");

        num1.value = generarNumero(99999, -99999);
      }

      /* !SECTION fin Numeros random */
    </script>