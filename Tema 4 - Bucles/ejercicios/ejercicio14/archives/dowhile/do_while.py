"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])

CONTADOR = 0
POTENCIA = 1
if NUM1 == 0 and NUM2 == 0:
    MENSAJE = "En este caso 0^0 puede tener 2 valores 0 y 1 dependiendo como se lo quiere tratar"
elif NUM1 == 0 and NUM2 < 0:
    MENSAJE = "El resultado es indefinido "
elif NUM2 == 0:
    if NUM1 != 0:
        POTENCIA = 1
        MENSAJE = f"A{POTENCIA}"
    else:
        MENSAJE = "Dependiendo de como se trabaje el resultado sera 0 o 1"
else:
    if NUM2 > 0:
        BUCLE = True
        while BUCLE:
            POTENCIA *= NUM1
            CONTADOR += 1
            if CONTADOR == NUM2:
                BUCLE = False
    elif NUM2 < 0:
        BUCLE = True
        while BUCLE:
            POTENCIA *= NUM1
            CONTADOR += 1
            if CONTADOR == -NUM2:
                BUCLE = False
        POTENCIA = 1 / POTENCIA
    MENSAJE = f"{POTENCIA}"

print(MENSAJE)
