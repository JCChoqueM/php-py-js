"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
CONTADOR = 1
POTENCIA = 1
if NUM2 >= 0:
    while CONTADOR <= NUM2:
        POTENCIA *= NUM1
        MENSAJE += f"{NUM1}<sup>{CONTADOR}</sup> = {POTENCIA} <br>"
        CONTADOR += 1
print(f"<p>{MENSAJE}</p>")
