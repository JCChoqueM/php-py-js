"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) >= 4:
    num1 = sys.argv[1]
    num2 = sys.argv[2]
    NUMERO = json.loads(sys.argv[3])

if num1.isnumeric() and num2.isnumeric():
    MENSAJE = ""
    if num1 == num2:
        colorCambio = "background-color: orange; color:black"
    else:
        colorCambio = "background-color: yellow; color:black"
    BUSCAR = int(num1) in NUMERO
    if num1 != num2:
        MENSAJE = (
            f"<span style='{colorCambio}'>Se a reemplazado {num1}  por {num2}</span>"
        )
    else:
        MENSAJE = f"<span style='{colorCambio}'>No se a realizado cambios:</span>"
    MENSAJE += (
        "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Cambio</th></tr>"
    )
    if BUSCAR:
        for contador, valor_numero in enumerate(NUMERO):
            DESCRIPCION = valor_numero
            if valor_numero == int(num1):
                valor_numero = num2
                MENSAJE += f"<tr><td style='{colorCambio}'>{contador}</td><td style='{colorCambio}'>{DESCRIPCION}</td><td style='{colorCambio}'>{valor_numero}</td></tr>"
            else:
                MENSAJE += f"<tr><td>{contador}</td><td>{DESCRIPCION}</td><td>{valor_numero}</td></tr>"
    else:
        MENSAJE = f"No se encontro el numero {num1} en el array:"
        MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>"
        for contador, valor_numero in enumerate(NUMERO):
            MENSAJE += f"<tr><td>{contador}</td><td style='background-color: pink; color:black'>{valor_numero}</td></tr>"
    MENSAJE += "</table>"
    print(f"{MENSAJE}")
else:
    print("De ingresar datos en los formularios")
