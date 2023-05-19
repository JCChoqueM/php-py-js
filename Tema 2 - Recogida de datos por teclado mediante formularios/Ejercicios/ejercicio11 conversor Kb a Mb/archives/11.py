import sys

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])
Mb=num1/1024
print(f"""Kb = {num1}
            <br><br>Mb= {num1} / 1024
            <br><br>{num1} kb = {Mb} Mb""")
