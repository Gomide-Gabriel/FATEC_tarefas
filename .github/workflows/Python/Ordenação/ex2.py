import string

nome = ['Liliane', 'Alberto', 'Gustavo', 'Simone', 'Vitoria']
n = len(nome)
antigo_menor = None

for i in range(n):
    nome[i] = nome[i].lower()


for x in range(n):
    print('test')
    menor = x
    for y in range(menor+1, n):
        if ord(nome[menor][0]) > ord(nome[y][0]):
            novo_menor = nome[y]
            antigo_menor = nome[menor]

            nome[menor] = novo_menor
            nome[y] = antigo_menor
            print('novo_menor: ', novo_menor, ' antigo_menor: ', antigo_menor)


print(nome)