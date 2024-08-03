from potencia import potencia
from digitos import digitos


def pegaPorDelante(numero, numero2):
    aux = digitos(numero)
    pegado = (abs(numero2) * potencia(10, aux)) + abs(numero)
    if numero2 < 0:
        return -pegado
    else:
        return pegado
