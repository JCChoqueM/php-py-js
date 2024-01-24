# -- coding: latin-1 --
import sys
import json


# Obtener los argumentos de la línea de comandos
asociativo = sys.argv[1]
fruta = sys.argv[2]
asociativo = asociativo.replace("\\u00f1", "ñ")
fruta = fruta.replace("\\u00f1", "ñ")
fruta = fruta.strip()

# Dividir la cadena en pares clave-valor
pares_clave_valor = [par.strip() for par in asociativo[1:-1].split(",")]

# Crear un asociativo_diccionario a partir de los pares clave-valor
asociativo_diccionario = {}
for par in pares_clave_valor:
    clave, valor = par.split(":")
    asociativo_diccionario[clave.strip()] = valor.strip()

if fruta in asociativo_diccionario:
    # Construir la tabla HTML con la información de la fruta
    mensaje = "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>"
    mensaje += "<tr>"
    mensaje += "<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>{}</th>".format(
        fruta
    )
    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += "<img src='images/{}.png' alt='{}' style='width: 150px; height: 150px;'><br>".format(
        fruta.replace("ñ", "_").lower(), fruta
    )
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += (
        "<strong style='font-size: 1.2em; '>{0} en inglés es: <br>{1}</strong>".format(
            fruta, asociativo_diccionario[fruta]
        )
    )
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "</table>"
else:
    mensaje = "<p style='color: red;'>No bromees, {} no es una fruta >:(".format(fruta)

print(mensaje)
