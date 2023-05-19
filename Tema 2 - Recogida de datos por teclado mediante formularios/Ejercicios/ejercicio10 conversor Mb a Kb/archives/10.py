import sys

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])
Kb=num1*1024
print(f"""Mb = {num1} 
            <br><br>Kb= {num1} * 1024
            <br><br>{num1} Mb = {Kb} Kb""")
