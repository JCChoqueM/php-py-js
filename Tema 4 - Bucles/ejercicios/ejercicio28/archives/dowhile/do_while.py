"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
ORIGINAL = NUM1
FACTORIAL = 1
if NUM1 >= 0:
    if NUM1 == 0:
        MENSAJE = "La factorial de 0! es:<br>1"
    else:
        BUCLE = True
        while BUCLE:
            FACTORIAL *= NUM1
            NUM1 -= 1
            if NUM1 <= 1:
                BUCLE = False
        MENSAJE = f"La FACTORIAL de {ORIGINAL}! es: <br>{FACTORIAL}"
else:
    MENSAJE = "La FACTORIAL de un numero solo acepta numeros enteros positivos."

print(f"{MENSAJE}")
