package aula3Condicional;

import java.util.Scanner;

public class CalculaMedia2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

				Scanner entrada = new Scanner(System.in);
				String nome;
				double n1,n2,media;
				
				System.out.printf("Informe seu nome: ");
				nome = entrada.nextLine();
				System.out.printf("Digite a primeira nota: ");
				n1 = entrada.nextDouble();
				System.out.printf("Digite a segunda nota: ");
				n2 = entrada.nextDouble();
				media = (n1+n2)/2;
				System.out.printf("Sua média é %.2f", media);

				if (media >=6)
					System.out.printf("\nAprovado");
				else
					System.out.printf("\nReprovado");
				
			}

	}

