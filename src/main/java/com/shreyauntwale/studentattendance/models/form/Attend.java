package com.shreyauntwale.studentattendance.models.form;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;



@Entity
public class Attend {
    @Id
    @GeneratedValue
    private int id;

    // creating student instance to establish Many to One relationship

    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;


    @NotNull
    private LocalDate date;

    private AttendType type;

    // only to set student id for json

    @Transient
    private int studentIdToSet;


    @Transient
    private String typeId;

    public Attend() {

    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getId(){
        return id;
    }

    @JsonProperty("studentName")
    public String getStudent() {
        return this.student.getName () + " " + this.student.getLastname ();
    }

    @JsonProperty("studentId")
    public int getStudentId() {
        return this.student.getId ();
    }

    @JsonProperty("present")
    public AttendType getType() {
        return type;
    }

    @JsonProperty("date")
    public LocalDate getDate() {
        return date;
    }

    public void setType(AttendType type) {
        this.type = type;
    }

    public String  getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public void setStudentIdToSet(int studentIdToSet) {
        this.studentIdToSet = studentIdToSet;
    }

    public int getStudentIdToSet() {
        return studentIdToSet;
    }


}
