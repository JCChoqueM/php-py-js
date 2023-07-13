"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = float(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
CONTADOR = 1
POTENCIA = 1
if NUM1 == 0 and NUM2 == 0:
    MENSAJE = f"{NUM1}<sup>{NUM2}</sup>=0 y {NUM1}<sup>{NUM2}</sup>=1 "
elif NUM2 == 0:
    MENSAJE = f"{NUM1}<sup>{NUM2}</sup>=1"
else:
    if NUM2 > 0:
        while CONTADOR <= NUM2:
            POTENCIA *= NUM1
            MENSAJE += f"{NUM1}<sup>{CONTADOR}</sup> = {POTENCIA} <br>"
            CONTADOR += 1
    else:
        MENSAJE = "El exponente debe ser positivo"
print(f"<p>{MENSAJE}</p>")
