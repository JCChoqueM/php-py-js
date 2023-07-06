"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys


# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
if NUM1 > 0:
    SUMA = 0
    ANTERIOR = 1
    NUEVO = 0

    for CONTADOR in range(NUM1):
        MENSAJE += f"{SUMA}, "
        SUMA = ANTERIOR + NUEVO
        ANTERIOR = NUEVO
        NUEVO = SUMA
else:
    MENSAJE = "El numero debe ser mayor que 0  "
print(f"{MENSAJE}")
