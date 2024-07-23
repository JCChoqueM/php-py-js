def pegaPorDetras(numero, digito):
    pegado = (abs(numero) * 10) + digito
    if numero < 0:
        return -pegado
    else:
        return pegado
