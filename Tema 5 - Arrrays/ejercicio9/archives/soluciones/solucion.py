"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import random


# Inicializar variables
NUMERO1 = []  # Lista para almacenar números aleatorios
NUMERO2 = []  # Lista para almacenar números aleatorios
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(-9, 100)
    NUMERO1.append(ALEATORIO)
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(-1, 6)
    NUMERO2.append(ALEATORIO)
INTRODUCIDOS = ", ".join(map(str, NUMERO1))
MENSAJE = f"numeros introducidos<br>{INTRODUCIDOS}<br>"

COLORCAMBIO1 = "background-COLOR: #2EFE64; COLOR:black"
COLORCAMBIO2 = "background-COLOR: #FE2E2E; COLOR:black"
COLORNEGATIVO = "background-COLOR: #00000000; COLOR:black"
AUX = None
ARRAY_ORIGINAL = NUMERO1.copy()
POSICIONES_INTRODUCIDAS = f"Inicial= {NUMERO2[0]} Final= {NUMERO2[1]}"
if not (NUMERO2[0] >= 0 and NUMERO2[0] < (len(NUMERO1) - 1)):
    MENSAJE += f"<br>{POSICIONES_INTRODUCIDAS}<br><br>Inicial debe estar comprendido entre 0 y  {len(NUMERO1) - 2}"
elif not (NUMERO2[1] > NUMERO2[0] and NUMERO2[1] <= (len(NUMERO1) - 1)):
    MENSAJE += f"<br>{POSICIONES_INTRODUCIDAS}<br><br>Final debe ser mayor que {NUMERO2[0]} y menor que  {len(NUMERO1)-1} "
else:
    aux = NUMERO1[len(NUMERO1) - 1]
    for contador in range(len(NUMERO1) - 1, NUMERO2[1], -1):
        NUMERO1[contador] = NUMERO1[contador - 1]
    NUMERO1[NUMERO2[1]] = NUMERO1[NUMERO2[0]]
    for contador in range(NUMERO2[0], 0, -1):
        NUMERO1[contador] = NUMERO1[contador - 1]
    NUMERO1[0] = aux
    # Construir la tabla HTML con los resultados
    MENSAJE += POSICIONES_INTRODUCIDAS
    MENSAJE += "<table border='1' >"
    filas = [
        ["Indice", list(range(len(ARRAY_ORIGINAL)))],
        ["Matriz", ARRAY_ORIGINAL],
        ["Ordenado", NUMERO1],
    ]
    for fila in filas:
        TITULO = fila[0]
        datos = fila[1]
        MENSAJE += "<tr>"
        MENSAJE += f"<th>{TITULO}</th>"
        if TITULO == "Indice":
            # Construir filas de la tabla con colores según ciertas condiciones
            for elemento in datos:
                MENSAJE += f"<td>{elemento}</td>"
        elif TITULO == "Matriz":
            # Construir filas de la tabla con colores según ciertas condiciones
            for clave, elemento in enumerate(datos):
                if clave == NUMERO2[0]:
                    COLOR = COLORCAMBIO1
                elif clave == NUMERO2[1]:
                    COLOR = COLORCAMBIO2
                else:
                    COLOR = COLORNEGATIVO
                MENSAJE += f"<td style='{COLOR}'>{elemento}</td>"
        elif TITULO == "Ordenado":
            # Construir filas de la tabla con colores según ciertas condiciones
            for clave, elemento in enumerate(datos):
                if clave == (NUMERO2[1] % len(datos)):
                    # Si NUMERO2[1] está en la última posición, usa el índice 0
                    COLOR = COLORCAMBIO1
                elif clave == (NUMERO2[1] + 1) % len(datos):
                    # Color para la posición siguiente a NUMERO2[1]
                    COLOR = COLORCAMBIO2
                else:
                    # Color por defecto
                    COLOR = COLORNEGATIVO
                MENSAJE += f"<td style='{COLOR}'>{elemento}</td>"
        MENSAJE += "</tr>"
    MENSAJE += "</table>"
    # Información adicional sobre el array
    # Imprimir el mensaje
print(f"{MENSAJE}")
