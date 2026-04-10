
#Insertion sort

lista = [5,3,4,7,1,9,8,2]
n = len(lista)
count = 0
                      # 1° loop
for i in range(1, n): # começa a acontagem no número 3
    chave = lista[i]  # armazena o 3 em uma chave
    j = i-1           # j quarda o indice 0, sendo o valor 5

    while j >= 0 and lista[j] > chave: # enquanto o j MAIOR que 0 e Lista no indice o, valor 5 maior que o próximo
        lista[j+1] = lista[j]          # coloca o maior no anterior
        j -= 1                         # j -> -1 nesse loop
        count+=1
    lista[j] = chave                 # lista no indice 0 recebe valor da chave, 5
    count+=1
 

print('Lista: ', lista, '\nMovimentos: ', count)