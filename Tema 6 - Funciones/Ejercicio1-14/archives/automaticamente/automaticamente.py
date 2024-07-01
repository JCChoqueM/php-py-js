import sys

from python.imprimir.imprimirEsCapicua import imprimir_es_capicua
from python.imprimir.imprimirEsPrimo import imprimir_es_primo
from python.imprimir.imprimirSiguientePrimo import imprimir_siguiente_primo
from python.imprimir.imprimirPotencia import imprimir_potencia
from python.imprimir.imprimirDigitos import imprimir_digitos
from python.imprimir.imprimirVoltea import imprimir_voltea
from python.imprimir.imprimirDigitoN import imprimir_DigitoN

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
input1 = datos[1]
mensajeError = ""

if select == "esCapicua":
    mensajeError = imprimir_es_capicua(input1)
elif select == "esPrimo":
    mensajeError = imprimir_es_primo(input1)
elif select == "siguientePrimo":
    mensajeError = imprimir_siguiente_primo(input1)
elif select == "potencia":
    mensajeError = imprimir_potencia(input1, datos[2])
elif select == "digitos":
    mensajeError = imprimir_digitos(input1)
elif select == "voltea":
    mensajeError = imprimir_voltea(input1)
elif select == "digitoN":
    mensajeError = imprimir_DigitoN(input1, datos[2])
else:
    mensajeError = "Preguntame mas<br>"
print(mensajeError)
