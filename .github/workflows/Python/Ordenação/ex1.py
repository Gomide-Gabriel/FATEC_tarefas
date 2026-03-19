list = [8,4,5,2,1,0,9,6]
n = len(list)

for i in len(n):
    maior = i
    for x in range(maior+1, n):
        if x > maior:
            novo_maior = x
            antigo_maior = maior
            maior = novo_maior

