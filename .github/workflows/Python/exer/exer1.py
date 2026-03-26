class First:

    def __init__(self):
        self.inicio = None
        self.fim = None
        


    class Tarefa:

        def __init__(self, tarefa, proximo, anterior):
            self.tarefa = tarefa
            self.proximo = proximo
            self.anterior = anterior

    
    def adicionar_tarefa(self, tarefa):

        self.tarefa = tarefa

        if self.inicio == None: 

            print('tarefa adicionada no ínicio: ', tarefa)

            nova_tarefa = self.Tarefa(tarefa, None, None)
            self.inicio = nova_tarefa
            self.fim = nova_tarefa
        
        elif self.inicio != None:
            
            print('Última tarefa adicionada: ', tarefa)

            nova_tarefa = self.Tarefa(tarefa, None, None)

            nova_tarefa.anterior = self.fim
            nova_tarefa.proximo = None

            self.fim = nova_tarefa
    

    def desfazer(self):

        print('Está a desfazer uma tarefa: ', self.fim.tarefa)

        novo_fim = self.fim.anterior
        novo_fim.proximo = None 
        self.fim = novo_fim

        print('Última tarefa é: ', self.fim.tarefa)



tarefa = First()

tarefa.adicionar_tarefa('t1')
tarefa.adicionar_tarefa('t2')
tarefa.adicionar_tarefa('t3')
tarefa.adicionar_tarefa('t4')
tarefa.adicionar_tarefa('t5')

tarefa.desfazer()
tarefa.desfazer()
