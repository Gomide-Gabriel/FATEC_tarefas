dados = 1000
melhor_caso = dados * 0.8


def selection():

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