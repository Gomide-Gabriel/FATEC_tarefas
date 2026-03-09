class Math:

    def __init__(self):
        self.expressao = None
        self.bracketLeft = 0 # quantidade de parenteses esquerdos
        self.bracketRight = 0 # quantidade de parenteses direitos


    def Adicionar(self, expressao):
        self.expressao = expressao
        self.Iterar()

    
    def Iterar(self): # percorre os carácteres da expressão
        
        for i in range(len(self.expressao)):
            if self.expressao[i] == '(':        # o Correto é começar pelo > ( < e partir daí
                self.bracketLeft += 1           # abre a primeira contagem 
                
                for x in range(i+1, len(self.expressao)): # na contagem do primeiro parenteses, ele procura por outros 
                                                          # adiciona no contador 
                    if self.expressao[x] == ')':
                        self.bracketRight += 1
                    elif self.expressao[x] == '(':
                        self.bracketLeft += 1

            else:                                         # caso começe com > ) <
                print('Começou errado')
                continue
        
        print(f"right: {self.bracketRight}\n" \
        f"left: {self.bracketLeft} ")

        

    def Balancear(self):     # a lógica é, como podem haver casos como '((x_x(x)) = x)' e outros
                             # o meio é saber se a quantidade de parenteses vai ser par
        
        if (self.bracketLeft + self.bracketRight) % 2 == 0:
            print('Está balanceado: ')
        else:
            print('Não está balanceado: ')
        
m = Math()

m.Adicionar('(2+3) = 4)')
m.Balancear()

m.Adicionar('(2+3) = 4')
m.Balancear()

m.Adicionar('((2+3)) = 4)')
m.Balancear()

