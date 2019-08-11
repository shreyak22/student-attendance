package com.shreyauntwale.studentattendance.models.form;

import java.util.ArrayList;

public class StudentData {

    static ArrayList<Student> students = new ArrayList<>();

    // getAll
    public static ArrayList<Student> getAll() {
        return students;
    }

    // add
    public static void add(Student newStudent) {
        students.add(newStudent);
    }

    // remove
    public static void remove(int id) {
        Student studentToRemove = getById(id);
        students.remove(studentToRemove);
    }

    // getById
    public static Student getById(int id) {

        Student theStudent = null;

        for (Student candidateStudent : students) {
            if (candidateStudent.getId() == id) {
                theStudent = candidateStudent;
            }
        }

        return theStudent;
    }

}
