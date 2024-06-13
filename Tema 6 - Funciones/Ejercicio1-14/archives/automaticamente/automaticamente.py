import sys
import json
from imprimir import imprimir_escapicua

# Verificar si se recibieron datos POST
if len(sys.argv) > 1:
    # Obtener los datos enviados desde JavaScript
    datos = json.loads(sys.argv[1])

    # Verificar si se recibieron datos y que sea un array
    if isinstance(datos, list) and len(datos) > 0:
        select = datos[0]
        input1 = datos[1]
        mensaje_error = ""

        if select == "esCapicua":
            mensaje_error = imprimir_escapicua(input1)
        else:
            mensaje_error = "Pregúntame más"

        # Imprimir el resultado de vuelta al cliente
        print(mensaje_error)
    else:
        print("Error: Los datos recibidos no son válidos.")
else:
    # Si no se recibieron datos POST, retornar un mensaje de error
    print("Error: No se recibieron datos POST")
