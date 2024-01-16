import sys
import json

# Obtener los argumentos de la línea de comandos
cartas_sacadas_json = sys.argv[1]
puntos_sacados_json = sys.argv[2]
suma_total = float(sys.argv[3])

# Convertir los datos JSON a Python
cartas_sacadas = [carta.strip(" ,") for carta in cartas_sacadas_json[1:-1].split(",")]
puntos_sacados = json.loads(puntos_sacados_json)

# Iniciar la tabla
mensaje = "<table border='1'><tr>"

contador = 0
for carta, puntos in zip(cartas_sacadas, puntos_sacados):
    if contador % 5 == 0 and contador > 0:
        # Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
        mensaje += "</tr><tr>"

    # Establecer un color de fondo condicional basado en los puntos
    color_fondo = "background-color: yellow;" if puntos > 0 else ""

    # Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
    mensaje += f"<td style='{color_fondo}'>"
    mensaje += "<table border='1'>"
    mensaje += "<tr>"
    mensaje += "<td>"
    # Celda para la imagen
    mensaje += f"<img src='images/{carta.lower().replace(' ', '_')}.png' alt='{carta}' style='width: 70px; height: 95px;'><br>"

    # Celda para el nombre de la carta
    mensaje += f"{carta}<br>"
    mensaje += "</td>"
    mensaje += "</tr>"

    mensaje += "<tr>"
    mensaje += "<td>"

    # Celda para los puntos
    mensaje += f"{puntos} pts."
    mensaje += "</td>"
    mensaje += "</tr>"

    mensaje += "</table>"
    mensaje += "</td>"

    contador += 1

# Cerrar la última fila
mensaje += "</tr></table><br> La suma total es: ${:.2f}".format(suma_total)

print(mensaje)
