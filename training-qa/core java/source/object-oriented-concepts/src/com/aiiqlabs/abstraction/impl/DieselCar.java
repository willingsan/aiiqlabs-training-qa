package com.aiiqlabs.abstraction.impl;

//DieselCar.java
public class DieselCar extends ICECar {
 public DieselCar(String brand) {
     super(brand);
 }

 @Override
 public void move() {
     changeSpeed(22);
     System.out.println(brand + " diesel car is driving.");
 }

 @Override
 public void fuelType() {
     System.out.println(brand + " uses diesel.");
 }

 public void useDieselMode() {
     System.out.println(brand + " running in diesel mode.");
 }
}
