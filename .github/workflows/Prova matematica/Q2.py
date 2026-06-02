# 2^n < n^3 é verdadeiro para todo n > N
# Escreva um programa para determinar N e depois prove
# o resultado por indução

def encontrar_N():
    n = 1
    while True:
        # verifica que vale para n e persiste adiante
        if all(2**m > m**3 for m in range(n, n+6)):
            return n
        n += 1

N = encontrar_N()
print(f"N = {N}")
print(f"2^{N} = {2**N}")
print(f"{N}^3 = {N**3}")
print(f"2^{N} > {N}^3 ? {2**N > N**3}")

# Confirma que n = N-1 ainda falha
n_antes = N - 1
print(f"\nVerificação (n={n_antes}):")
print(f"2^{n_antes} = {2**n_antes}")
print(f"{n_antes}^3 = {n_antes**3}")
print(f"2^{n_antes} > {n_antes}^3 ? {2**n_antes > n_antes**3}")