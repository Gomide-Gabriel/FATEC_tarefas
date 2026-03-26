class Forth:

    def __init__(self):
        self.inicio = None
        self.fim = None
        self.count = 0

    
    class Frame:

        def __init__(self,  dado, anterior, proximo):
            self.id = 0
            self.dado = dado # ( Nome, parametros, var local)
            self.anterior = anterior
            self.proximo = proximo

    
    def push(self, dado):

        if self.count <= 1000:
            
            self.count += 1

            if self.inicio == None:
                novo_frame = self.Frame(dado, None, None)
                novo_frame.id = self.count

                self.inicio = novo_frame
                self.fim = novo_frame

            else:

                novo_frame = self.Frame(dado, None, None)
                novo_frame.id = self.count
                
                novo_frame.anterior = self.fim
                novo_frame.proximo = None

                self.fim = novo_frame     

            print('Frame adicionado: ID -', self.fim.id, " ", self.fim.dado, '->')

        else:
            return print('Limite de ', self.count, ' Frames atingidos')
        

    
    def pop(self):

        self.count -=1

        print('Está a desfazer o Frame: ID -', self.fim.id, " ", self.fim.dado)

        novo_fim = self.fim.anterior
        novo_fim.proximo = None 
        self.fim = novo_fim

        print('Última Frame é: ID -', self.fim.id, " ", self.fim.dado)


frame = Forth()

frame.push(('main()', 'none', 'abcd'))
frame.push(('funcA()', 'none', 'abcd'))

frame.pop()