import sys

from python.imprimir.imprimirEsCapicua import imprimir_es_capicua

# Cadena inicial
cadena = sys.argv[1] if len(sys.argv) > 1 else ""

# Verificar si la cadena está vacía después de eliminar los corchetes y espacios
if not cadena.strip("[] "):
    datos = ["", ""]
else:
    # Eliminar los corchetes y espacios al principio y al final
    cadena_limpia = cadena.strip("[] ")

    # Dividir la cadena en elementos separados por coma
    datos_con_espacios = cadena_limpia.split(",")

    # Eliminar espacios adicionales de cada elemento
    datos = [dato.strip() for dato in datos_con_espacios]

    # Asegurar que la lista tenga al menos dos elementos
    while len(datos) < 2:
        datos.append("")

select = datos[0]
input1 = (datos[1])
mensajeError = ""

if select == "esCapicua":
    mensajeError = imprimir_es_capicua(input1)
else:
    mensajeError = "Preguntame mas<br>"
print(mensajeError)
