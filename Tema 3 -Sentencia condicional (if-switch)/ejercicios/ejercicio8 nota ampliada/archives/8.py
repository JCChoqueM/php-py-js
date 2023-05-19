import sys
import math

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])
num2 = float(sys.argv[2])
num3 = float(sys.argv[3])
if (
    (num1 >= 0 and num1 <= 100)
    and (num2 >= 0 and num2 <= 100)
    and (num3 >= 0 and num3 <= 100)
):
    promedio = round(((num1 + num2 + num3) / 3), 2)
    if promedio < 51:
        mensaje = f"""Su nota es: {promedio} <br> Nota: Insuficiente"""
    elif promedio >= 51 and promedio <= 59:
        mensaje = f"""Su nota es: {promedio} <br> Nota: Suficiente"""
    elif promedio >= 60 and promedio <= 74:
        mensaje = f"""Su nota es: {promedio} <br> Nota: Bien"""
    elif promedio >= 75 and promedio <= 90:
        mensaje = f"""Su nota es: {promedio} <br> Nota: Notable"""
    elif promedio > 90:
        mensaje = f"""Su nota es: {promedio} <br> Nota: Sobresaliente"""
else:
    mensaje = f" Uno o varios datos no son correctos"


print(f"{mensaje}")
