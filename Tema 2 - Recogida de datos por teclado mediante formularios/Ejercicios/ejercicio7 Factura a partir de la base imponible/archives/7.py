import sys

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])

print(f"""Base Imponible es = {num1} Bs.
<br><br>Iva = {(num1*0.1):.2f} Bs.
<br><br>Total a pagar = {num1+(num1*0.1)} Bs.""")
