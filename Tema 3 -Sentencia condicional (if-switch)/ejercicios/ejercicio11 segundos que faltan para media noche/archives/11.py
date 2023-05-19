import sys
import math

# Obtener los argumentos de la línea de comandos
hora = int(sys.argv[1])
min = int(sys.argv[2])
if (hora >= 0 and hora <= 23) and (min >= 0 and min <= 59):
    segundos = 86400 - (((hora * 60) * 60) + min * 60)
    mensaje = f"""La hora es {"0" if hora<10 else ""}{hora}:{"0" if min<10 else ""}{min} {"Am." if hora<12 else "Pm."}
    <br>Falta {segundos} seg. para la media noche"""
else:
    mensaje = "Hora o min no son validos "

print(f"{mensaje}")
