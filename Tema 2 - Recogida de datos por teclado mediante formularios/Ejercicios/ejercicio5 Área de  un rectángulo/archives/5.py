import sys

# Obtener los argumentos de la línea de comandos
num1 = float(sys.argv[1])
num2 = float(sys.argv[2])
area = round(num1*num2, 2)


print(f"""Area = Base * Altura
			<br><br>Base = {num1}
			<br><br>Altura ={num2} 
			<br><br>Area = {num1} * {num2}
			<br><br>Area = {area} """)
