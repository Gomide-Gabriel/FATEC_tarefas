package aula3Condicional;

import java.util.Scanner;

public class VerificaSinal {

	public static void main(String[] args) {
		// Programa que verifica numero negativo
		
		Scanner entrada = new Scanner(System.in);
		double num;
		
		System.out.print("Informe o número: ");
		num = entrada.nextDouble();
		if (num < 0)
			System.out.println("O número é negativo!");

	}

}
