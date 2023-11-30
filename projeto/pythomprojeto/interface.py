def leiaint(msg):
 while True:
    try:
         n = int(input(msg))
    except(ValueError,TypeError):
         print('\033[0;31mERRO, digite um numero valido \033[m')
         continue
    except(KeyboardInterrupt):
        print(f'\033[0;33m USUARIO INTERROMPEU A EXECUCAO DO PROGRAMA \033[m')
        return 0
    else:
            return n 


def linha(tam=42):
    return '-' * tam

def titulo(txt):
    print(linha())
    print(txt.center(42))
    print(linha())

def menu(lista):
    titulo('\033[33mMENU PRINCIPAL\033[m')    
    c=1
    for item in lista:
        print(f'\033[32m{c}\033[m - \033[33m{item}\033[m')
        c+=1
    print(linha())
    opc = leiaint('\033[34m sua opcão; \033[m')
    return opc 