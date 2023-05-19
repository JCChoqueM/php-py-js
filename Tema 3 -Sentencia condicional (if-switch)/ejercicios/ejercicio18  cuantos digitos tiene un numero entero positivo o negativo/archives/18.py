import sys
import math

# Obtener los argumentos de la línea de comandos
b = int(sys.argv[1])
a = abs(b)
if 0 <= a <= 99999:
    if 0 <= a <= 9:
        dig = 1
    elif 10 <= a <= 99:
        dig = 2
    elif 100 <= a <= 999:
        dig = 3
    elif 1000 <= a <= 9999:
        dig = 4
    elif 10000 <= a <= 99999:
        dig = 5
    mensaje = f"""El numero {b} tiene <br> {dig} {"digito" if dig==1 else "digitos"}"""
else:
    mensaje = "Ingrese un maximo de 5 digitos"
    

print(mensaje)
