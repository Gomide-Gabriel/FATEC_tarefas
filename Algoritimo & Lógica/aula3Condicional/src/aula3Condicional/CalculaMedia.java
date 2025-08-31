package aula3Condicional;

import java.util.Scanner;

public class CalculaMedia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner entrada = new Scanner(System.in);
		String nome;
		double n1,n2,media;
		
		System.out.println("Informe seu nome: ");
		nome = entrada.nextLine();
		System.out.print("Digite a primeira nota: ");
		n1 = entrada.nextDouble();
		System.out.print("Digite a segunda nota: ");
		n2 = entrada.nextDouble();
		media = (n1+n2)/2;
		System.out.println(nome+ "\n Sua média é: "+media);
		if (media >=6)
			System.out.println("Aprovado");
		else
			System.out.print("Reprovado");
		
	}

}
