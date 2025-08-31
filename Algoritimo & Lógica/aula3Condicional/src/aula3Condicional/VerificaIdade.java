package aula3Condicional;

import java.util.Scanner;

public class VerificaIdade {

	public static void main(String[] args) {
		// Programa que verifica idade
		Scanner entrada = new Scanner(System.in);
		int idade;
		
		System.out.println("Informe sua idade: ");
		idade = entrada.nextInt();
		if (idade>=18)
			System.out.print("Você é maior de idade: ");
		else
			System.out.print("Você é menor de idade");

	}

}
