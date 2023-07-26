"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
CONTADOR = 1
CONTADORMUL = 0
SUMA = 0
if NUM1 >= 1:
    MENSAJE += f"En el rango de 1 a {NUM1}.<br>"
    MENSAJE += "Los multiplos de 3 son:<br> "
    BUCLE = True
    while BUCLE:
        if CONTADOR % 3 == 0:
            MENSAJE += f"({CONTADOR})"
            CONTADORMUL += 1
            SUMA += CONTADOR
        CONTADOR += 1
        if CONTADOR == NUM1 + 1:
            BUCLE = False

    if CONTADORMUL == 0:
        MENSAJE += " no hay multiplos<br> La cantidad de multiplos es (0)"
    else:
        MENSAJE += f"<br> la cantidad de multiplos es:<br> ({CONTADORMUL})"

    MENSAJE += f"<br>la suma de los multiplos es:<br> ({SUMA})"
else:
    MENSAJE = "El numero debe ser mayor o igual a 1"
print(f"{MENSAJE}")
