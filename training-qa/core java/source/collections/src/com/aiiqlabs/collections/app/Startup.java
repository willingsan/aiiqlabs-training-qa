package com.aiiqlabs.collections.app;

import com.aiiqlabs.lib.list.StudentManager;
import com.aiiqlabs.lib.list.StudentManagerArrayList;
import com.aiiqlabs.lib.list.StudentManagerLinkedList;
import com.aiiqlabs.lib.list.StudentManagerVector;
import com.aiiqlabs.modal.Student;

public class Startup {
	
	public static void main(String[] args) {
		Startup startup = new Startup();
		System.out.println("===========================List======================================");
		startup.studentsArrayList();
		System.out.println("===========================ArrayList=====================================");
		startup.studentsLinkedList();
		System.out.println("===========================Vector======================================");
		startup.studentsVector();
		System.out.println("===========================Dynamic======================================");
		startup.studentsDynamic();

	}
	
    public void studentsArrayList() {

        StudentManagerArrayList manager = new StudentManagerArrayList();

        manager.addStudent(new Student(1, "Amit", 85.5));
        manager.addStudent(new Student(2, "Neha", 90.0));
        manager.addStudent(new Student(3, "Raj", 78.0));

        System.out.println("All Students:");
        manager.printAllStudents();

        System.out.println("\nUpdating marks for ID 2...");
        manager.updateMarks(2, 95.0);

        System.out.println("\nStudent with ID 2:");
        System.out.println(manager.findStudentById(2));

        System.out.println("\nRemoving student ID 3...");
        manager.removeStudentById(3);

        System.out.println("\nFinal Student List:");
        manager.printAllStudents();

        System.out.println("\nTotal Students: " + manager.getStudentCount());
    }
    
    
    public void studentsLinkedList() {

        StudentManagerLinkedList manager = new StudentManagerLinkedList();

        manager.addStudent(new Student(1, "Vijay", 91.5));
        manager.addStudent(new Student(2, "Govind", 93.0));
        manager.addStudent(new Student(3, "Bhanu", 88.0));

        System.out.println("All Students:");
        manager.printAllStudents();

        System.out.println("\nUpdating marks for ID 2...");
        manager.updateMarks(2, 95.0);

        System.out.println("\nStudent with ID 2:");
        System.out.println(manager.findStudentById(2));

        System.out.println("\nRemoving student ID 3...");
        manager.removeStudentById(3);

        System.out.println("\nFinal Student List:");
        manager.printAllStudents();

        System.out.println("\nTotal Students: " + manager.getStudentCount());
    }

    
    public void studentsVector() {

        StudentManagerVector manager = new StudentManagerVector();

        manager.addStudent(new Student(1, "Vijay", 91.5));
        manager.addStudent(new Student(2, "Govind", 93.0));
        manager.addStudent(new Student(3, "Bhanu", 88.0));

        System.out.println("All Students:");
        manager.printAllStudents();

        System.out.println("\nUpdating marks for ID 2...");
        manager.updateMarks(2, 95.0);

        System.out.println("\nStudent with ID 2:");
        System.out.println(manager.findStudentById(2));

        System.out.println("\nRemoving student ID 3...");
        manager.removeStudentById(3);

        System.out.println("\nFinal Student List:");
        manager.printAllStudents();

        System.out.println("\nTotal Students: " + manager.getStudentCount());
    }
    
    public void studentsDynamic() {
    	 StudentManager manager = new StudentManager("ARRAY"); // Try LINKED or VECTOR

         manager.addStudent(new Student(1, "Amit", 85.5));
         manager.addStudent(new Student(2, "Neha", 90.0));
         manager.addStudent(new Student(3, "Raj", 78.0));

         System.out.println("All Students:");
         manager.printAllStudents();

         manager.updateMarks(2, 95.0);

         System.out.println("\nAfter Updating Marks:");
         manager.printAllStudents();

         manager.removeStudentById(3);

         System.out.println("\nAfter Removal:");
         manager.printAllStudents();

         System.out.println("\nTotal Students: " + manager.getStudentCount());
    }
    
}
