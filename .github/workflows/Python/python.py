from random import randrange


def display_board(board):
    # The function accepts one parameter containing the board's current status
    # and prints it out to the console.
    
    d = '+------------'
    print(d * 3, end="+\n")
    for i in range(3):
      print('|            ', end="")
      if i == 2:
          print('|\n')
      for x in range(2):
           print('|            ', end="")
           if i == 2:
               print('|\n')
      #print(" "*len(d), end="|")


def enter_move(board):
    # The function accepts the board's current status, asks the user about their move, 
    # checks the input, and updates the board according to the user's decision.
    return ""


def make_list_of_free_fields(board):
    # The function browses the board and builds a list of all the free squares; 
    # the list consists of tuples, while each tuple is a pair of row and column numbers.
    return ""

def victory_for(board, sign):
    # The function analyzes the board's status in order to check if 
    # the player using 'O's or 'X's has won the game
    return ""

def draw_move(board):
    # The function draws the comp
    return ""

board = [ [i for i in range(3)] for i in range(3)]

display_board(board)