import random

asociativo = {
    "uno": 11,
    "dos": 0,
    "tres": 10,
    "cuatro": 0,
    "cinco": 0,
    "seis": 0,
    "siete": 0,
    "sota": 2,
    "caballo": 3,
    "rey": 4,
}

valor = [
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "sota",
    "caballo",
    "rey",
]

figura = ["oros", "copas", "espadas", "bastos"]

cartas_sacadas = []
puntos_sacados = []
CONTADOR_CARTAS = 0
SUMA_TOTAL = 0


def generar_numero_aleatorio(inferior, superior):
    return random.randint(inferior, superior)


def generar_cartas():
    global cartas_sacadas, puntos_sacados, CONTADOR_CARTAS, SUMA_TOTAL
    cartas_sacadas = []
    puntos_sacados = []
    CONTADOR_CARTAS = 0
    SUMA_TOTAL = 0

    while CONTADOR_CARTAS < 10:
        random_figura = figura[generar_numero_aleatorio(0, 3)]
        random_valor = valor[generar_numero_aleatorio(0, 9)]
        puntos = asociativo[random_valor]
        nombre_carta = f"{random_valor} de {random_figura}"

        if nombre_carta not in cartas_sacadas:
            cartas_sacadas.append(nombre_carta)
            puntos_sacados.append(puntos)
            CONTADOR_CARTAS += 1
            SUMA_TOTAL += puntos


# Generar cartas
generar_cartas()

# Construir el MENSAJE HTML
MENSAJE = "<table border='1'><tr>"

CONTADOR = 0
for carta, puntos in zip(cartas_sacadas, puntos_sacados):
    if CONTADOR % 5 == 0 and CONTADOR > 0:
        # Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
        MENSAJE += "</tr><tr>"

    # Establecer un color de fondo condicional basado en los puntos
    COLOR_FONDO = "background-color: yellow;" if puntos > 0 else ""

    # Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
    MENSAJE += f"<td style='{COLOR_FONDO}'>"
    MENSAJE += "<table border='1'>"
    MENSAJE += "<tr>"
    MENSAJE += "<td>"
    # Celda para la imagen
    MENSAJE += f"<img src='images/{carta.lower().replace(' ', '_')}.png' alt='{carta}' style='width: 70px; height: 95px;'><br>"

    # Celda para el nombre de la carta
    MENSAJE += f"{carta}<br>"
    MENSAJE += "</td>"
    MENSAJE += "</tr>"

    MENSAJE += "<tr>"
    MENSAJE += "<td>"

    # Celda para los puntos
    MENSAJE += f"{puntos} pts."
    MENSAJE += "</td>"
    MENSAJE += "</tr>"

    MENSAJE += "</table>"
    MENSAJE += "</td>"

    CONTADOR += 1

# Cerrar la última fila
MENSAJE += "</tr></table><br> La suma total es: ${:.2f}".format(SUMA_TOTAL)

print(MENSAJE)
