from es_primo import es_primo


def siguiente_primo(numero):
    numero += 1
    while not es_primo(numero):
        numero += 1
    return numero