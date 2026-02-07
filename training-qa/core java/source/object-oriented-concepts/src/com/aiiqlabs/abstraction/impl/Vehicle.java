package com.aiiqlabs.abstraction.impl;

import com.aiiqlabs.abstraction.services.Drivable;

//Vehicle.java
public abstract class Vehicle implements Drivable {
 protected final String brand;
 protected int speed; // shared state

 public Vehicle(String brand) {
     this.brand = brand;
     this.speed = 0;
 }

 // concrete method shared by all vehicles
 public void start() {
     System.out.println(brand + " started.");
 }

 // concrete method shared by all vehicles
 public void stop() {
     speed = 0;
     System.out.println(brand + " stopped.");
 }

 // concrete helper that subclasses can reuse or override
 protected void changeSpeed(int delta) {
     speed = Math.max(0, speed + delta);
     System.out.println(brand + " speed now " + speed + " km/h.");
 }

 // abstract method: every concrete subclass must implement move()
 @Override
 public abstract void move();
 
 @Override
 public void honk() {
	 System.out.println("From Vehicle class");
 }

 @Override
 public String toString() {
     return "Vehicle{brand='" + brand + "', speed=" + speed + "}";
 }
}

