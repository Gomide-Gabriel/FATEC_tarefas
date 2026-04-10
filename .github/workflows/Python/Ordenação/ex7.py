import string

lista = ['Sao Paulo', 'Bauru', 'Atibaia', 'Candidu Mota']
n = len(lista)

for i in range(n):
    lista[i] = lista[i].lower()

print(lista[0][0])
for x in range(1, n):
    
    chave = lista[x]
    j = x-1

    print('chave: ', ord(chave[0]), '-', chave, '| j: ', ord(lista[j][0]), '-', lista[j],  '| loop: ', x)

    while j >= 0 and ord(lista[j][0]) > ord(chave[0]):
        lista[j+1] = lista[j]
        j-=1
        
    lista[j+1] = chave

print(lista) 
