"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
if NUM2 >= 0 and NUM2 < 10:
    VOLTEADO = 0
    POSICION = 0
    ORIGINAL = NUM1
    NUM1 = abs(NUM1)
    VERIFICAR = 0
    while NUM1 > 0:
        VOLTEADO = VOLTEADO * 10 + (NUM1 % 10)
        NUM1 = int(NUM1 / 10)

    MENSAJE += f"El digito {NUM2} del numero {ORIGINAL} se encuentra en las posiciones:"

    while VOLTEADO > 0:
        if VOLTEADO % 10 == NUM2:
            POSICION += 1
            VERIFICAR += 1
            MENSAJE += f"({POSICION}) "
        else:
            POSICION += 1
        VOLTEADO = int(VOLTEADO / 10)

    if VERIFICAR == 0:
        MENSAJE = f"No se encontro el digito {NUM2} en el numero {ORIGINAL}"
else:
    MENSAJE = "El digitio debe ser de 0 a 9"

print(f"{MENSAJE}")
