lista = [1,0,9,5,8,4,7,3]
n = len(lista)

antigo_maior = None
maior = None

for i in range(n):
    maior = i
    print('loop1')

    for j in range(i+1, n):
        if lista[maior] < lista[j]:
            print('loop2')
            antigo_maior = lista[maior]
            novo_maior = lista[j]

            lista[maior] = novo_maior
            lista[j] = antigo_maior 

            print('Maior: ', maior, 'Antigo Maior: ', antigo_maior)


print(lista)