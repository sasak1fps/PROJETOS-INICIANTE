from interface import linha,titulo,menu,leiaint
from aquivo import *#arquivoexiste , criaraquivo,lerarquivo
from time import sleep

arq = 'projetopythom.txt'
if not arquivoexiste(arq):
    criaraquivo(arq)

while True:
    resp = menu(['Ver Pessoas Cadastradas'  , 'Cadastrar Pessoas ' ,   'Sair do Sistema'])

    if resp == 1 :
        lerarquivo(arq)
        
    elif resp == 2:
        titulo('NOVO CADASTRO')
        nome = str(input('NOME:   '))
        idade = leiaint('IDADE:   ')
        cadastrar(arq , nome , idade)
        
    elif resp == 3:

        print(' SAINDO DO SISTEMA ...')
        sleep(1)
        break

    else:   
         print(' ERRO@! digite opcao valida ')
         sleep(1)