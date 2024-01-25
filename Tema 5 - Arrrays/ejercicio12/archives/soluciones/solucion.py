# -- coding: latin-1 --
import random
import sys

fruta = sys.argv[1]
fruta = fruta.replace("\\u00f1", "ñ")
fruta = fruta.strip()

asociativo_diccionario = {
    "manzana": "Apple",
    "platano": "Banana",
    "naranja": "Orange",
    "uva": "Grape",
    "frutilla": "Strawberry",
    "mango": "Mango",
    "kiwi": "Kiwi",
    "piña": "Pineapple",
    "cereza": "Cherry",
    "pera": "Pear",
    "sandia": "Watermelon",
    "limon": "Lemon",
    "granada": "Pomegranate",
    "ciruela": "Plum",
    "papaya": "Papaya",
    "coco": "coconut",
    "higo": "Fig",
    "mandarina": "Tangerine",
    "mora": "Blackberry",
    "guayaba": "Guava",
    "pomelo": "Grapefruit",
    "durazno": "peach",
}

if fruta in asociativo_diccionario:
    # Construir la tabla HTML con la información de la fruta
    mensaje = "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>"
    mensaje += "<tr>"
    mensaje += f"<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>{fruta}</th>"

    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += f"<img src='images/{fruta.replace('ñ', '_').lower()}.png' alt='{fruta}' style='width: 150px; height: 150px;'><br>"
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += f"<strong style='font-size: 1.2em; '>{fruta} en inglés es: <br>{asociativo_diccionario[fruta]}</strong>"
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "</table>"
else:
    mensaje = f"<p style='color: red;'>No bromees, {fruta} no es una fruta >:("
print(mensaje)
