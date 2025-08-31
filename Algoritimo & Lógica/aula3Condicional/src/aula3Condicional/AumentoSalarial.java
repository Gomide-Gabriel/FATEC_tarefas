package aula3Condicional;

import java.util.Scanner;

public class AumentoSalarial {

	public static void main(String[] args) {
		// Programa que oferta aumento salarial para funcionarios que recebem < 1500,00

		Scanner entrada = new Scanner(System.in);
		double salario, porcento, aumento;
		
		System.out.print("Informe seu salário atual: ");
		salario = entrada.nextDouble();
		
		if (salario < 1500)
			{
			porcento = salario*0.15;
			aumento = salario + porcento;
			System.out.print("Você rebecerá um aumento, agora seu salário é: "+ aumento);
			}
		else
				System.out.println("Você não receberá aumento");
	}

}
