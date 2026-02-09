package com.aiiqlabs.lib.list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Vector;

import com.aiiqlabs.modal.Student;

public class StudentManager {
	
    private List<Student> students;

    public StudentManager(String type) {
        switch (type.toUpperCase()) {
            case "ARRAY":
                students = new ArrayList<>();
                break;
            case "LINKED":
                students = new LinkedList<>();
                break;
            case "VECTOR":
                students = new Vector<>();
                break;
            default:
                throw new IllegalArgumentException("Invalid list type");
        }
    }

    
 // Add student
    public void addStudent(Student s) {
        students.add(s);
    }

    // Remove student by ID
    public boolean removeStudentById(int id) {
        return students.removeIf(s -> s.getId() == id);
    }

    // Find student by ID
    public Student findStudentById(int id) {
        for (Student s : students) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null;
    }

    // Update marks
    public boolean updateMarks(int id, double newMarks) {
        Student s = findStudentById(id);
        if (s != null) {
            s.setMarks(newMarks);
            return true;
        }
        return false;
    }

    // Get all students (read-only style)
    public void printAllStudents() {
        for (Student s : students) {
            System.out.println(s);
        }
    }

    // Get total students
    public int getStudentCount() {
        return students.size();
    }
    
}
