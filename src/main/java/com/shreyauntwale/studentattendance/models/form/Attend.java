package com.shreyauntwale.studentattendance.models.form;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;


/**
 * Created by LaunchCode
 */
@Entity
public class Attend {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private Student student;

    @NotNull
    private LocalDate date;

    private AttendType type;

    public Attend() {

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
    public String getStudentId() {
        return "" + this.student.getId ();
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
}
