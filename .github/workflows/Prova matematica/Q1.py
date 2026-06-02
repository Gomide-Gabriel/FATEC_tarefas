# 4^n < n! é verdadeiro para todo n > N
# Escreva um programa para determinar N e depois prove
# o resultado por indução

import math

def encontrar_N():
    n = 1                             # valor inicial de n
    while True:                 
        if 4**n < math.factorial(n):  # verifica o fatorial de n se maior que 4^n
            return n                  # se SIM encerra o loop
        n += 1                        # se NÂO soma +1 em n e o processo é repetido
    
N = encontrar_N() # valor de n encontrado e armazenado
print(f"N = {N}")
print(f"4^{N} = {4**N}")
print(f"{N}! = {math.factorial(N)}")
print(f"4^{N} < {N}! ? {4**N < math.factorial(N)}")

# Verificação: para n = N-1, a desigualdade ainda é falsa
n_antes = N - 1
print(f"\nVerificação (n={n_antes}):")
print(f"4^{n_antes} = {4**n_antes}")
print(f"{n_antes}! = {math.factorial(n_antes)}")
print(f"4^{n_antes} < {n_antes}! ? {4**n_antes < math.factorial(n_antes)}")


