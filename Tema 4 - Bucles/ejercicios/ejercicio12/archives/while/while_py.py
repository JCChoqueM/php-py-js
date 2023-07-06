"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
if NUM1 > 0:
    CONTADOR = 0
    SUMA = 0
    ANTERIOR = 1
    NUEVO = 0
    while CONTADOR < NUM1:
        MENSAJE += f"{SUMA}, "
        SUMA = ANTERIOR + NUEVO
        ANTERIOR = NUEVO
        NUEVO = SUMA
        CONTADOR += 1
else:
    MENSAJE = "El numero debe ser mayor que 0  "
print(f"{MENSAJE}")
