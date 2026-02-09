package com.aiiqlabs.lib.queue;

import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

import com.aiiqlabs.modal.Student;

public class StudentPriorityQueueManager {

    private Queue<Student> queue;

    public StudentPriorityQueueManager() {
        queue = new PriorityQueue<>(
            Comparator.comparingDouble(Student::getMarks).reversed()
        );
    }

    public void addStudent(Student s) {
        queue.offer(s);
    }

    public Student serveStudent() {
        return queue.poll();  // Removes highest priority student
    }

    public Student peekTopStudent() {
        return queue.peek();
    }

    public void printQueue() {
        for (Student s : queue) {
            System.out.println(s);
        }
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }
}

