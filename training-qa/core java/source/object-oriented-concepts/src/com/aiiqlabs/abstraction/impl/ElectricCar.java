package com.aiiqlabs.abstraction.impl;

import com.aiiqlabs.abstraction.services.Chargeable;

//ElectricCar.java
public class ElectricCar extends Car implements Chargeable {
 private int batteryLevel; // percentage 0-100

 public ElectricCar(String brand) {
     super(brand);
     this.batteryLevel = 100;
 }

 @Override
 public void move() {
     changeSpeed(30);
     batteryLevel = Math.max(0, batteryLevel - 5);
     System.out.println(brand + " electric car is gliding silently. Battery: " + batteryLevel + "%.");
 }

 @Override
 public void chargeBattery() {
     batteryLevel = 100;
     System.out.println(brand + " battery charged to 100%.");
 }

 @Override
 public void honk() {
     System.out.println("Soft beep from " + brand + " (electric).");
 }
}
