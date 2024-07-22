from potencia import potencia
from digitos import digitos


def quita_por_delante(numero, digito):
    numero = abs(numero)
    calculo = (digitos(numero)) - digito
    nuevo_numero = numero % potencia(10, calculo)
    return nuevo_numero
