package aula3Condicional;

import java.util.Scanner;

public class AumentoSalarial2 {

	public static void main(String[] args) {
		// Aumento Salarial usando printf

		Scanner entrada = new Scanner(System.in);
		double salario, porcento, aumento;
		
		System.out.printf("Informe seu salário atual:");
		salario = entrada.nextDouble();
		
		if (salario < 1500)
			{
			porcento = salario*0.15;
			aumento = salario + porcento;
			System.out.printf("\nVocê rebecerá um aumento, agora seu salário é: %.2f", aumento);
			}
		else
				System.out.printf("\nVocê não receberá aumento");
	}

}
