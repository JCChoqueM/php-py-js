import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from quitaPorDetras import quita_por_detras
from digitos import digitos
from crearTabla import crearTablaReves

def imprimir_quita_por_detras(input1, input2):
    centrar = "style='text-align: center;'"
    rojo = "style='color: red;'"
    verde = "style='color: darkgreen;'"
    mensaje_error = ""
    try:
        input1 = int(input1)
        estado = "1"
    except ValueError:
        input1 = 0
        estado = "0"

    try:
        input2 = int(input2)
        estado += "1"
    except ValueError:
        input2 = 0
        estado += "0"

    if estado == "00":
        mensaje_error = "Ambos campos estan vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensaje_error = "El campo 1 está vacio."
    elif estado == "10":
        mensaje_error = "El campo 2 esta vacio."
    elif estado == "11":
        n_digito = digitos(int(input1))
        input1 = int(input1)
        input2 = int(input2)
        digito_s = "digito" if input2 == 1 else "digitos"
        mensaje_error = f"<div {centrar}>"
        mensaje_error += (
            f"El numero {input1} tiene <span {verde}>{n_digito} {digito_s}.</span> <br>"
        )
        mensaje_error += crearTablaReves(abs(input1), 1)
        if input2 == 0:
            mensaje_error += f"<span {rojo}>Quitar {input2} digitos nos dara el mismo numero {input1}</span><br>"
            mensaje_error += crearTablaReves(abs(input1), 1)
        elif input2 > n_digito:
            mensaje_error += (
                f"<span {rojo}>No se puede quitar {input2} digitos por Detras</span>"
            )
        elif input2 < 0:
            mensaje_error += f"<span {rojo}>La cantidad de numeros a quitar no puede ser negativa</span>"
        elif input2 == n_digito:
            mensaje_error += (
                f"<span {rojo}>Quitar {input2} digitos resultara en 0</span>"
            )
        else:
            mensaje_error += f"<span {verde}>El numero {input1} menos {input2} {digito_s} es: {quita_por_detras(input1, input2)}.</span>"
            mensaje_error += crearTablaReves(abs(quita_por_detras(input1, input2)), 1)
        mensaje_error += "</div>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
