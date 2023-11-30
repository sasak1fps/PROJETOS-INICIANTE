from interface import titulo
def arquivoexiste(nome):
    arq = 'o.txt'
    try:
        a = open(nome , 'rt' )
        a.close()
    except FileNotFoundError:
        return False
    else:
        return True
    
def criaraquivo(nome):
    try:
        a = open(nome , 'wt+')
        a.close()
    except:
        print('ERRO AO CRIAR ARQUIVO')
    else:
        print(f'ARQUIVO {nome}CRIADO COM SUCESSO')

def lerarquivo(nome):
    try:
        a = open(nome , 'rt')
    except:
        print('erro')
    else:
        titulo('PESSOAS CADASTRADAS')
        for linha in a:
            dado = linha.split(';')
            dado[1] = dado[1].replace('\n' , '')
            print(f'{dado[0]:<26}  {dado[1]:>3}anos')
    finally:
        a.close()

def cadastrar(aqr , nome='desconhecido' , idade=0):
    try:
        a = open(aqr , 'at')
    except:
        print('ERRO!@#!')
    else:
        try:
            a.write(f' { nome } ; { idade } \n')
        except:
            print('erro ao escrever os dados')
        else:
            print(f'NOVO REGISTRO DE {nome} ADICIOADO')
            a.close()
    finally:
        a.close()