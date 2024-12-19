from voltea import voltea2
from digitos import digitos

def posicion_de_digito_izquierda_derecha(numero, digito):
    # Voltear el número
    volteado = voltea2(numero)

    # Encontrar la posición del dígito en el número volteado
    posicion_en_volteado = posicion_de_digito_derecha_izquierda(volteado, digito)

    # Si el número tiene la misma cantidad de dígitos después de voltear
    if digitos(numero) == digitos(volteado):
        return posicion_en_volteado

    # Manejo especial para ceros al final del número original
    if digito == 0:
        if posicion_en_volteado == "No encontrado (-1)":
            return digitos(volteado)

    return posicion_en_volteado


def posicion_de_digito_derecha_izquierda(numero, digito):
    posicion = 0
    divisor = abs(numero)
    encontrado = False

    # Caso especial para cuando el número es 0 y el dígito buscado es 0
    if divisor == 0 and digito == 0:
        return posicion

    # Buscar la posición del dígito
    while divisor > 0:
        if divisor % 10 == digito:
            encontrado = True
            break
        posicion += 1
        divisor //= 10

    return posicion if encontrado else "No encontrado (-1)"
