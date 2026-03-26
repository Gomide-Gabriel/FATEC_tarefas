import heapq

class Second:

    def __init__(self):
        self.itens = []
        heapq.heapify(self.itens)

    def queue(self, cliente, prioridade):
        heapq.heappush(self.itens, (cliente, prioridade))


    def dequeue(self):
        print(heapq.heappop(self.itens))

    


lista = Second()

lista.queue(2, 'C1')
lista.queue(1, 'C2')
lista.queue(3, 'C3')
lista.queue(1, 'C4')
lista.queue(2, 'C5')
lista.queue(3, 'C5')
lista.queue(1, 'C5')

lista.dequeue()
lista.dequeue()
lista.dequeue()
lista.dequeue()
lista.dequeue()