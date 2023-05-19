import sys
import math

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
if num1 >= 0 and num1 <= 99999:
    if num1 >= 0 and num1 <= 9:
        capicua = True
    elif num1 >= 10 and num1 <= 99:
        capicua = int(num1 / 10) == num1 % 10
    elif num1 >= 100 and num1 <= 999:
        capicua = int(num1 / 100) == num1 % 10
    elif num1 >= 1000 and num1 <= 9999:
        capicua = (
            int(num1 / 1000) == num1 % 10
            and int(num1 / 100) % 10 == int(num1 / 10) % 10
        )
    elif num1 >= 10000 and num1 <= 99999:
        capicua = (
            int(num1 / 10000) == num1 % 10
            and int(num1 / 1000) % 10 == int(num1 / 10) % 10
        )

    #   inicio mensaje si es capicua
    if capicua:
        mensaje = f"El numero: {num1} es Capicua"
    else:
        mensaje = f"El numero: {num1} NO es capicua"
    #   fin mensaje si es capicua
else:
    mensaje = "El numero debe ser entero y positivo"


print(mensaje)
