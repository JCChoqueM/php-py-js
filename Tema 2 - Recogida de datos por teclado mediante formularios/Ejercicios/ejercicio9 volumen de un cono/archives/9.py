import sys
import math

radio = float(sys.argv[1])
altura = float(sys.argv[2])
total = (math.pi * pow(radio, 2) * altura) / 3


mensaje = (f"""Vol = (&#928*radio^2*altura)/3
			<br><br>radio = {radio}
			<br><br>altura = {altura}
			<br> <br> Volumen= {round(total, 2)} cm^3""")

print(f" {mensaje}")
