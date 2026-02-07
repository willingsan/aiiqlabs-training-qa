package com.aiiqlabs.abstraction.impl;

import com.aiiqlabs.abstraction.services.Chargeable;
import com.aiiqlabs.abstraction.services.Drivable;

public class Startup {
	
	public static void main(String[] args) {
		Drivable vehicle = new ElectricCar("Tesla");
		Chargeable ecar = (Chargeable)vehicle;
	}

}
