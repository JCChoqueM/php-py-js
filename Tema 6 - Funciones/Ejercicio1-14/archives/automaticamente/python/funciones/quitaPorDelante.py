from potencia import potencia


def quita_por_delante(numero, digito):
    numero = abs(numero)
    nuevo_numero = numero // potencia(10, digito)
    return nuevo_numero
