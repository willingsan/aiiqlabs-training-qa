package com.aiiqlabs.exceptions;

public class MathsOperations {
	
	
	public long add(int firstInput, int secondInput) {
		return firstInput + secondInput;
	}
	
	public double divide(double firstInput, double secondInput) {
		System.out.println("From double parameter method");
		return (firstInput / secondInput);
	}

	
	public float divide(float firstInput, float secondInput) {
		System.out.println("From float parameter method");
		return (firstInput / secondInput);
	}
	
	public int divide(int firstInput, int secondInput) {
		System.out.println("From int parameter method");
		return firstInput / secondInput;
	}
	
	
	public float divide(float firstInput, int secondInput) {
		System.out.println("From float & int parameter method");
		return (firstInput / secondInput);
	}
	
//	public int divide(String firstInput, String secondInput) {
//		int firstNum = Integer.valueOf(firstInput.trim());
//		int secondNum = Integer.parseInt(secondInput);
//		return firstNum / secondNum;
//	}
	
	public int divide(String firstInput, String secondInput) {
		int firstNum = Integer.valueOf(firstInput.trim());
		int secondNum = Integer.valueOf(secondInput);
		
		return  firstNum / secondNum;
	}
	


}
