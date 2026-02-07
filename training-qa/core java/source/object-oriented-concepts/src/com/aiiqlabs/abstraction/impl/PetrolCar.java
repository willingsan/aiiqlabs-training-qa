package com.aiiqlabs.abstraction.impl;

//PetrolCar.java
public class PetrolCar extends ICECar {
 public PetrolCar(String brand) {
     super(brand);
 }

 @Override
 public void move() {
     changeSpeed(25);
     System.out.println(brand + " petrol car is driving.");
 }

 @Override
 public void fuelType() {
     System.out.println(brand + " uses petrol.");
 }

 public void usePetrolMode() {
     System.out.println(brand + " running in petrol mode.");
 }
}
