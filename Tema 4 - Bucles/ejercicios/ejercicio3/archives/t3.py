"""
Este módulo muestra un mensaje incrementando el valor de i.
"""
MENSAJE = ""
i = 0
while True:
    MENSAJE += f"Somos {i} <br>"
    i += 5
    if i == 105:
        break
print(MENSAJE)
