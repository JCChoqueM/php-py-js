from digitos import digitos
from potencia import potencia


def digitoN(numero, posicion):
    digitos_numero = digitos(numero)
    exponente = digitos_numero - posicion - 1
    primero = abs(numero) // (potencia(10, exponente))
    segundo = primero % 10
    return segundo
