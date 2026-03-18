class ListaDupla:

    def __init__(self):
        self.fim = None
        self.inicio = None
        self.counter = 0

    class Node:

        def __init__(self, dado, proximo, anterior):
            self.dado = dado
            self.proximo = proximo
            self.anterior = anterior

    
    def adicionar_inicio(self, dado):
        self.dado = dado
        self.counter += 1

        if self.inicio == None:
            novo_node = self.Node(dado, None, None)
            self.inicio = novo_node
            self.fim = novo_node
            
        else:
            novo_node = self.Node(dado, None, None) 
            # referencia o node em si
            novo_node.proximo = self.inicio
            novo_node.anterior = None
            
            # referencia o antigo elemento do inicio antes de se transformar no atual
            #self.inicio.proximo = self.inicio
            self.inicio.anterior = novo_node 
            self.inicio = novo_node

            

    def adicionar_fim(self, dado):
        self.dado = dado
        self.counter += 1

        if self.fim == None:
            novo_node = self.Node(dado, None, None)
            self.fim = novo_node
            self.inicio = novo_node
            
        else:
            novo_node = self.Node(dado, None, None)
            # referencia o node em si
            novo_node.anterior = self.fim
            novo_node.proximo = None

            # referencia o antigo elemento do inicio antes de se transformar no atual
            self.fim.proximo = novo_node
            self.fim.anterior = self.fim
            self.fim = novo_node
            
        pass

    def remover_inicio(self):
        
        next_node = self.inicio.proximo
        self.inicio = None

        if self.inicio == None:
            next_node.anterior = None
            self.inicio = next_node
            self.inicio.proximo =  next_node.proximo

    def remover_fim(self):
        previous_node = self.fim.anterior
        previous_node.proximo = None
        self.fim = None

        pass

    def exibir_frente_pra_tras(self):
        node_atual = self.inicio
        i = 0
        
        print("\nFrente pra tras :\n ")
        while i < self.counter and node_atual != None:
            print(node_atual.dado, i, end=' \n ')
            node_atual = node_atual.proximo
            i +=1
        print('end')

    def exibir_tras_pra_frente(self):
        node_atual = self.fim
        i = 0

        print("\nTras pra frente:\n ")
        while i < self.counter and node_atual != None:
            print(node_atual.dado, end=' \n ')
            node_atual = node_atual.anterior
            i +=1
        print('end')


    def tamanho(self):
        
        print('Tamanho: ', self.counter)


list = ListaDupla()

list.adicionar_inicio('Contato:\nNome - Gabriel | Telefone - 119999999 | email -  gabriel@gmail.com ')
list.adicionar_inicio('Contato:\nNome - Daniel | Telefone - 119888888 | email -  daniel@gmail.com')
list.adicionar_inicio('Contato:\nNome - Miguel | Telefone - 119777777 | email -  miguel@gmail.com ')
list.adicionar_fim('Contato:\nNome - Rafael | Telefone - 119666666 | email -  rafael@gmail.com ')

list.exibir_frente_pra_tras()
list.remover_inicio()
list.exibir_frente_pra_tras()

list.remover_fim()

list.exibir_frente_pra_tras()

#list.exibir_tras_pra_frente()



