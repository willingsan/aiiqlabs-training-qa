package com.aiiqlabs.abstraction.services;

//Chargeable.java
public interface Chargeable {
 // capability interface for electric vehicles
 void chargeBattery();

 // default method with a small shared message
 default void plugIn() {
     System.out.println("Plugging in to charge...");
 }

 // static helper
 static void chargingGuidelines() {
     System.out.println("Use manufacturer-approved chargers only.");
 }
}
