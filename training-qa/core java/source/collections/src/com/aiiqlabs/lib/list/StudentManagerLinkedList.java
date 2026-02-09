package com.aiiqlabs.lib.list;


import java.util.LinkedList;
import java.util.List;

import com.aiiqlabs.modal.Student;

public class StudentManagerLinkedList {
	// Still using List interface (best practice)
    private List<Student> students;

    public StudentManagerLinkedList() {
        students = new LinkedList<>();
    }

    public void addStudent(Student s) {
        students.add(s);
    }

    public boolean removeStudentById(int id) {
        return students.removeIf(s -> s.getId() == id);
    }

    public Student findStudentById(int id) {
        for (Student s : students) {
            if (s.getId() == id) {
                return s;
            }
        }
        return null;
    }

    public boolean updateMarks(int id, double newMarks) {
        Student s = findStudentById(id);
        if (s != null) {
            s.setMarks(newMarks);
            return true;
        }
        return false;
    }

    public void printAllStudents() {
        for (Student s : students) {
            System.out.println(s);
        }
    }

    public int getStudentCount() {
        return students.size();
    }
}
