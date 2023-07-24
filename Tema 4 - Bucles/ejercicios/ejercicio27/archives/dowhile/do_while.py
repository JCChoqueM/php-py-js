"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
ORIGINAL = NUM1
NUM1 = abs(NUM1)
SIGNO = bool
DIGITO = None
if ORIGINAL < 0:
    SIGNO = True
else:
    SIGNO = False
if NUM1 != 0:
    BUCLE = True
    while BUCLE:
        DIGITO = NUM1 % 10
        NUM1 = int(NUM1 / 10)
        if SIGNO:
            MENSAJE += "- "
            SIGNO = False
        MENSAJE += f"{DIGITO} "
        if NUM1 == 0:
            BUCLE = False
else:
    MENSAJE = "0"
print(f"El numero volteado de<br> {ORIGINAL} es: <br> {MENSAJE}")
