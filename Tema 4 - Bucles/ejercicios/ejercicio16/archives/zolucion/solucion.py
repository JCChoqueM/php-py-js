"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
CONTADOR = 0
i = 1
if NUM1 > 1:
    while i <= NUM1:
        if NUM1 % i == 0:
            CONTADOR += 1
        i += 1
    if CONTADOR <= 2:
        MENSAJE = f"El numero {NUM1}:<br> Es primo"
    else:
        MENSAJE = f"El numero {NUM1}:<br> NO es primo"
elif NUM1 == 1:
    MENSAJE = "El numero 1, no es ni primo ni compuesto"
else:
    if NUM1 <= 0:
        MENSAJE = "El numero debe ser mayor que 1"

print(f"<p>{MENSAJE}</p>")
