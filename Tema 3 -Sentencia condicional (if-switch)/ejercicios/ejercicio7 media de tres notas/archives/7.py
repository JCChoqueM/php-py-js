import sys
import math

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
num2 = int(sys.argv[2])
num3 = int(sys.argv[3])
if num1 >= 0 and num2 >= 0 and num3 >= 0:
    mensaje = f"Su promedio es de {round(((num1+num2+num3)/3),2)}"
else:
    mensaje = f"Alguno de los datos no son validos"

print(f"{mensaje}")
