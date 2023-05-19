import sys
import math

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
if (num1 > 0):
    mensaje = f"El tiempo de caida es {round(math.sqrt((2 * num1) / 9.81),2)}m/s^2"
elif (num1 == 0):
    mensaje = "El tiempo de caida es 0"
elif (num1 < 0):
    mensaje = "La altura no puede ser negativa"
else:
    mensaje = "ingrese un valor"

print(f"{mensaje}")
