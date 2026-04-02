lista = [9,4,8,5,3,2,7,1]
n = len(lista)
trocas = 0

for i in range(n):
    menor = i

    for j in range(i+1, n):
        if lista[menor] > lista[j]:
            novo_menor = lista[j]
            antigo_menor = lista[menor]

            lista[menor] = novo_menor
            lista[j] = antigo_menor

            trocas +=1

print('Lista: ', lista, '\nNúmero de trocas: ', trocas)
