list = [8,4,5,2,1,0,9,6]
n = len(list)
antigo_menor = None

for i in range(n):
    menor = i
    for x in range(menor+1, n):
        if list[menor] < list[x]:
            pass
        elif list[menor] > list[x]:
            novo_menor = list[x]
            antigo_menor = list[menor]
            
            list[menor] = novo_menor
            list[x] = antigo_menor

            print('novo_menor: ', novo_menor, ' antigo_menor: ', antigo_menor)

print(list)