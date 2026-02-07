package com.aiiqlabs.abstraction.impl;

//Bike.java
public class Bike extends Vehicle {
 public Bike(String brand) {
     super(brand);
 }

 @Override
 public void move() {
     changeSpeed(10);
     System.out.println(brand + " bike is riding on two wheels.");
 }

 public void kickStart() {
     System.out.println(brand + " bike kick-started.");
 }
}
