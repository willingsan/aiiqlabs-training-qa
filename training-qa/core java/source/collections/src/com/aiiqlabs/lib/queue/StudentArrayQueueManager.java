package com.aiiqlabs.lib.queue;

import java.util.ArrayDeque;
import java.util.Queue;

import com.aiiqlabs.modal.Student;

public class StudentArrayQueueManager {

    private Queue<Student> queue;

    public StudentArrayQueueManager() {
        queue = new ArrayDeque<>(); 
    }

    // Add student to queue
    public void addStudent(Student s) {
        queue.offer(s);
    }

    // Serve next student (remove from front)
    public Student serveStudent() {
        return queue.poll();
    }

    // View next student without removing
    public Student peekNextStudent() {
        return queue.peek();
    }

    public void printQueue() {
        if (queue.isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }

        for (Student s : queue) {
            System.out.println(s);
        }
    }

    public int getQueueSize() {
        return queue.size();
    }
}
