"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
CONTADOR = 1
if NUM1 >= 0:
    MENSAJE += (
        f"Los numeros enteros positivos menores que"
        f" {NUM1} que no son divisibles entre {NUM2} son : <br>"
    )
    while CONTADOR < NUM1:
        if CONTADOR % NUM2 != 0:
            MENSAJE += f"({CONTADOR})"
        CONTADOR += 1
else:
    MENSAJE = "El número debe ser mayor o igual que 0"


print(f"{MENSAJE}")
