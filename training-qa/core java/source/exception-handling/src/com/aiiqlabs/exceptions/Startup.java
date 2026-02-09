package com.aiiqlabs.exceptions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Startup {
	
	public static int readInput(Scanner scanner) {
		
		do {

			System.out.println("Enter the value : ");
			try {
				 int inputOne = scanner.nextInt();
				 return inputOne;
			}catch(InputMismatchException ime) {
				System.out.println("Enter only integer value.");
				scanner.next();
				continue;
			}catch(NumberFormatException nfe) {
				System.out.println("Enter only integer value.");
				continue;
			}
		}while(true);
		
	}

	public static void main(String[] args) {
		
		Scanner numberReader = new Scanner(System.in);
		int exit = 0;
		
		do {
		
			int inputOne = 0;
			int inputTwo = 0;
		
			inputOne = Startup.readInput(numberReader);
			inputTwo = Startup.readInput(numberReader);
			
			System.out.println("Sum is : " + (inputOne + inputTwo));
			
			System.out.println("Enter 1 to exit");
			exit = numberReader.nextInt();
			
		}while (exit != 1);
		numberReader.next();
		numberReader.close();

	}

}