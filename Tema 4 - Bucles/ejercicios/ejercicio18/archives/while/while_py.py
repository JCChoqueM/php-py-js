"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
MAYOR = None
MENOR = None
if NUM1 != NUM2:
    if NUM1 > NUM2:
        MAYOR = NUM1
        MENOR = NUM2
    else:
        MAYOR = NUM2
        MENOR = NUM1
    while MENOR <= MAYOR:
        MENSAJE += f"({MENOR})  "
        MENOR = MENOR + 7
else:
    MENSAJE = "Debe introducir 2 numeros diferentes"

print(f"{MENSAJE}")
