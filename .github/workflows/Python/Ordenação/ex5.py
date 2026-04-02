
#Insertion sort

lista = [5,3,4,7,1,9,8,2]
n = len(lista)
count = 0

for i in range(n):
    
    for j in range(i+1, n):
        if lista[i] > lista[j]:
            maior = lista[i]
            count +=2    

            lista[i] = lista[j]
            lista[j] = maior

print('Lista: ', lista, '\nMovimentos: ', count)