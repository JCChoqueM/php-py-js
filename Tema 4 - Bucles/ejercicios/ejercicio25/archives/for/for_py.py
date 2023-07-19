"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
SUMA = 0
CONTADOR = 0
I = NUM1 + 1
if NUM1 >= 0:
    for _ in range(0, 100):
        SUMA = SUMA + I
        I += 1
    MENSAJE = f"La suma de los 100 numeros siguientes a {NUM1} es:<br> {SUMA}"

print(f"{MENSAJE}")
