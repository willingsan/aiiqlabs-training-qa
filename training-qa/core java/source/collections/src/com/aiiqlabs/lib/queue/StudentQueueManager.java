package com.aiiqlabs.lib.queue;

import java.util.LinkedList;
import java.util.Queue;

import com.aiiqlabs.modal.Student;

public class StudentQueueManager {

    private Queue<Student> queue;

    public StudentQueueManager() {
        queue = new LinkedList<>();
    }

    // Add student to queue
    public void addStudent(Student s) {
        queue.offer(s);
    }

    // Serve next student
    public Student serveStudent() {
        return queue.poll();  // Removes head
    }

    // View next student
    public Student peekNextStudent() {
        return queue.peek();
    }

    // Print all waiting students
    public void printQueue() {
        for (Student s : queue) {
            System.out.println(s);
        }
    }

    public int getQueueSize() {
        return queue.size();
    }

    public boolean isQueueEmpty() {
        return queue.isEmpty();
    }
}
