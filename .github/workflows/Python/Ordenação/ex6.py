#Insertion 

lista = [1, 2, 3, 4, 9, 0, 7, 6, 5, 8]
n = len(lista)

count = 0

for i in range(1, n):
    chave = lista[i]
    j = i-1

    while j >= 0 and lista[j] > chave:
        lista[j+1] = lista[j]
        j-=1
        count +=1
    lista[j+1] = chave
    count +=1

print('Lista: ', lista, '\nMovimentos: ', count)
