package com.aiiqlabs.abstraction.impl;

import com.aiiqlabs.abstraction.services.Drivable;

//Car.java
public class Car extends Vehicle {
	
 public Car(String brand) {
     super(brand);
 }

 @Override
 public void move() {
     changeSpeed(20);
     System.out.println(brand + " car is driving on the road.");
 }

 public void openTrunk() {
	 honk();
     System.out.println(brand + " trunk opened.");
 }
 
 @Override
 public void honk() {
	 System.out.println("Honk from Car");
 }
}
