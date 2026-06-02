# 4^n < n! é verdadeiro para todo n > N
# Escreva um programa para determinar N e depois prove
# o resultado por indução

import math

def encontrar_N():
    n = 1
    while True:
        if 4**n < math.factorial(n):
            return n
        n += 1

N = encontrar_N()
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


