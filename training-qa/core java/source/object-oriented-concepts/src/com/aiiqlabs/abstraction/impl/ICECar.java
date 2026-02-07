package com.aiiqlabs.abstraction.impl;

//ICECar.java
public abstract class ICECar extends Car {
 protected int fuelLevel; // percentage 0-100

 public ICECar(String brand) {
     super(brand);
     this.fuelLevel = 100;
 }

 // Abstract method specific to ICE variants
 public abstract void fuelType();

 // Shared concrete behavior for ICE cars
 public void refuel(int amount) {
     fuelLevel = Math.min(100, fuelLevel + amount);
     System.out.println(brand + " refueled to " + fuelLevel + "%.");
 }
}
