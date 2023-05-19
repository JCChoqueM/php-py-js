"""
Este módulo muestra un mensaje incrementando el valor de i.
"""
MENSAJE = ""
i = 320
while True:
    MENSAJE += f" while True {i} <br>"
    i -= 20
    if i == 140:
        break
print(MENSAJE)
