import sys
import math

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])
num2 = float(sys.argv[2])
num3 = float(sys.argv[3])
if num1 != 0:
    d = (num2**2) - (4 * num1 * num3)
    if d > 0:
        solucion = (-num2 + math.sqrt(d)) / (2 * num1)
        solucion2 = (-num2 - math.sqrt(d)) / (2 * num1)
        mensaje = f"Discriminante = {d} <br>{d} > 0 <br> <br> Existen 2 soluciones <br> x1 ={solucion} <br>x2 ={solucion2}"
    elif d == 0:
        solucion = -num2 / (2 * num1)
        mensaje = f"Discriminante = {d} <br>{d} es == 0 <br> <br> Existen 1 solucion <br> x ={solucion}"
    elif d < 0:
        mensaje = f"Discriminante = {d} <br>{d} es < 0 <br> <br> Las soluciones son complejas y no se pueden calcular"

else:
    mensaje = "a debe ser distinto de 0"


print(f"{mensaje}")
