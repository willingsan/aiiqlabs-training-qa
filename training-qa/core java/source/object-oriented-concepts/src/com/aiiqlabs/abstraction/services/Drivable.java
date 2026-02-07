package com.aiiqlabs.abstraction.services;

//Drivable.java
public interface Drivable {
 // abstract method (public abstract implicitly)
 void move();

 // default method provides a shared behavior that implementers can override
 default void honk() {
     System.out.println("Default horn: Beep Beep!");
 }

 // static utility method on the interface itself
 static void safetyTip() {
     System.out.println("Safety tip: Always wear a seatbelt.");
 }

 // private helper for default methods (since Java 9)
 private static String formatBrand(String brand) {
     return "[" + brand + "]";
 }
}

