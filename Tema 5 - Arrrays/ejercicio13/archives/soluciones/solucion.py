# -- coding: latin-1 --
import sys


def convertir_cadena_a_lista(cadena):
    # Reemplazar la secuencia de escape \\u00f1 con el carácter "ñ"
    cadena_con_n = cadena.replace("\\u00f1", "ñ")

    # Eliminar los corchetes al principio y al final de la cadena
    cadena_sin_corchetes = cadena_con_n.strip("[]")

    # Dividir la cadena en elementos individuales
    elementos = cadena_sin_corchetes.split(",")

    # Eliminar espacios en blanco alrededor de cada elemento y crear la lista
    lista = [elemento.strip() for elemento in elementos]

    return lista


# Obtener los argumentos de la línea de comandos
input1 = sys.argv[1]
input2 = sys.argv[2]
input3 = sys.argv[3]
valoresUtilizados = convertir_cadena_a_lista(sys.argv[4])
clavesUtilizadas = convertir_cadena_a_lista(sys.argv[5])


# Reemplazar la secuencia de escape \\u00f1 con el carácter "ñ"


# Convertir los inputs a una lista
input = [input1, input2, input3]
for i in range(len(input)):
    input[i] = input[i].replace("\\u00f1", "ñ")
    input[i] = input[i].strip()

# Inicializar variables para contar los resultados
correcto = 0
incorrecto = 0
mensaje = "<table border='1' style='text-align:center';><tr>"

# Iterar sobre los inputs y comparar con los valores utilizados
for indice, valor in enumerate(input):
    colorFondo = (
        "color: green;" if valor == valoresUtilizados[indice] else "color: red;"
    )
    mensaje += "<td>"
    mensaje += f"<span style='font-size: 25px;'>{clavesUtilizadas[indice]}</span><br>"
    mensaje += "<table border='1'><tr><td>"
    mensaje += f"<img src='images/{clavesUtilizadas[indice]}.png' alt='{clavesUtilizadas[indice]}' style='width: 130px; height: 165px;'><br>"
    mensaje += (
        "</td></tr><tr><td style='height: 75px; text-align: center; font-size: 17px;'>"
    )
    mensaje += valor
    if valor == valoresUtilizados[indice]:
        correcto += 1
        mensaje += f"<br><span style='{colorFondo};'>correcto</span>"
    else:
        incorrecto += 1
        mensaje += f"<br><span style='{colorFondo};'>incorrecto</span><br>la traduccion es:<br>{valoresUtilizados[indice]}"
    mensaje += "</td></tr></table></td>"

mensaje += f"</tr></table><br> correctos: {correcto}<br>Incorrectos: {incorrecto}"
print(mensaje)
