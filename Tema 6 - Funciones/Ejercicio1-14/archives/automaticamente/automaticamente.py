import sys

from python.imprimir.imprimirEsCapicua import imprimir_es_capicua

# Cadena inicial
cadena = sys.argv[1]

# Eliminar los corchetes y espacios al principio y al final
cadena_limpia = cadena.strip("[] ")

# Dividir la cadena en elementos separados por coma y espacio
datos_con_espacios = cadena_limpia.split(", ")

# Eliminar espacios adicionales de cada elemento
datos = [dato.strip() for dato in datos_con_espacios]
print(datos)
print(datos[0])
print(datos[1])
select = datos[0]
input1 = (datos[1])
mensajeError = ""

if select == "esCapicua":
    mensajeError = imprimir_es_capicua(input1)
else:
    mensajeError = "Preguntame mas<br>"
print(mensajeError)
