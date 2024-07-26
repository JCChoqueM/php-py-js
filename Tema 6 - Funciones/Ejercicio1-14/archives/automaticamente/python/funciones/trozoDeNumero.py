from digitos import digitos
from potencia import potencia


def trozoDeNumero(numero, inicial, final):
    numero = abs(numero)
    digito_numero = digitos(numero)
    exponente_detras = digito_numero - (final + 1)
    quita_detras = numero // potencia(10, exponente_detras)
    digito_numero = digitos(quita_detras)
    exponente_delante = digito_numero - inicial
    quita_delante = quita_detras % potencia(10, exponente_delante)
    digito_numero = digitos(quita_delante)

    if digito_numero < exponente_delante:
        especial = "0" * (exponente_delante - digito_numero)
        mensaje_especial = f"El trozo de numero es:<br> Literal: {especial}{quita_delante} <br>Numeral: {quita_delante}"
        return mensaje_especial
    else:
        return f"El trozo de numero es: {quita_delante}"
