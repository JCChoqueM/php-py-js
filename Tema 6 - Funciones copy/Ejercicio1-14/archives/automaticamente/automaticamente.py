import sys

from python.imprimir.imprimirEsCapicua import imprimir_es_capicua
from python.imprimir.imprimirEsPrimo import imprimir_es_primo
from python.imprimir.imprimirSiguientePrimo import imprimir_siguiente_primo
from python.imprimir.imprimirPotencia import imprimir_potencia
from python.imprimir.imprimirDigitos import imprimir_digitos
from python.imprimir.imprimirVoltea import imprimir_voltea
from python.imprimir.imprimirDigitoN import imprimir_DigitoN
from python.imprimir.imprimirPosicionDeDigito import imprimirPosicionDeDigito
from python.imprimir.imprimirQuitaPorDetras import imprimir_quita_por_detras
from python.imprimir.imprimirQuitaPorDelante import imprimir_quita_por_delante
from python.imprimir.imprimirPegaPorDetras import imprimir_pega_por_detras
from python.imprimir.imprimirPegaPorDelante import imprimir_pega_por_delante
from python.imprimir.imprimirTrozoDeNumero import imprimir_trozo_de_numero
from python.imprimir.imprimirJuntaNumeros import imprimir_junta_numeros


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
    while len(datos) < 1:
        datos.append("")

select = datos[0]

mensajeError = ""
if select == "esCapicua":
    mensajeError = imprimir_es_capicua(datos[1])
elif select == "esPrimo":
    mensajeError = imprimir_es_primo(datos[1])
elif select == "siguientePrimo":
    mensajeError = imprimir_siguiente_primo(datos[1])
elif select == "potencia":
    mensajeError = imprimir_potencia(datos[1], datos[2])
elif select == "digitos":
    mensajeError = imprimir_digitos(datos[1])
elif select == "voltea":
    mensajeError = imprimir_voltea(datos[1])
elif select == "digitoN":
    mensajeError = imprimir_DigitoN(datos[1], datos[2])
elif select == "posicionDeDigito":
    mensajeError = imprimirPosicionDeDigito(datos[1], datos[2])
elif select == "quitaPorDetras":
    mensajeError = imprimir_quita_por_detras(datos[1], datos[2])
elif select == "quitaPorDelante":
    mensajeError = imprimir_quita_por_delante(datos[1], datos[2])
elif select == "pegaPorDetras":
    mensajeError = imprimir_pega_por_detras(datos[1], datos[2])
elif select == "pegaPorDelante":
    mensajeError = imprimir_pega_por_delante(datos[1], datos[2])
elif select == "trozoDeNumero":
    mensajeError = imprimir_trozo_de_numero(datos[1], datos[2], datos[3])
elif select == "juntaNumeros":
    mensajeError = imprimir_junta_numeros(datos[1], datos[2])
else:
    mensajeError = "Preguntame mas<br>"
print(mensajeError)
