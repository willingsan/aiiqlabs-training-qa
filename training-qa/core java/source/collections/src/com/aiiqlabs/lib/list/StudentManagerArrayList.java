package com.aiiqlabs.lib.list;

import java.util.ArrayList;
import java.util.List;

import com.aiiqlabs.modal.Student;

public class StudentManagerArrayList {

    // Encapsulated collection
    private List<Student> students;

    public StudentManagerArrayList() {
        students = new ArrayList<>();
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

