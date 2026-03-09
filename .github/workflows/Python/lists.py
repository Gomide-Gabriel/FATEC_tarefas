class Quest3:
    def __init__(self):
        self.itens = []
    
    def isEmpty(self):
        return self.itens == []

    def Push(self):
        self.itens.append(input('Insira uma tarefa'))

    def Pop(self):
        return self.itens.pop()
    
    def Peek(self):
        return self.itens[len(self.itens)-1]

    def Size(self):
        return len(self.itens)
    

q = Quest3()

option = 0

while option != 3:

    match option:
        case 1: # Inserir tarefa na pilha
            q.Push()
            option = 0
            continue
        case 2: # Obter próxima tarefa
            print('Última tarefa: ', q.Peek())
            print('Tarefa concluída: ',q.Pop())
            option = 0
            continue
        case 3: # Sair
            pass 

        case 0:
            option = int( input('Digite o número ' \
                '\nOpção 1: Inserir tarefa na pilha ' \
                '\nOpção 2: Obter a próxima tarefa da pilha ' \
                '\nopção 3: Sair'))
            continue
                
    