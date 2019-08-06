package com.shreyauntwale.studentattendance.models.form;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;


/**
 * Created by LaunchCode
 */
@Entity
public class Attend {
    @Id
    @GeneratedValue
    private int id;

    @NotNull
    @Size(min=3, max=15)
    private String name;

    @NotNull
    @Size(min=3, max=15)
    private String lastname;

    @NotNull
    private LocalDate date;




    private AttendType type;



    public Attend(String name, String lastname) {
        this();
        this.name = name;
        this.lastname = lastname;
    }

    public Attend() {

    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getId(){
        return id;
    }

    @JsonProperty("firstname")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @JsonProperty("present")
    public AttendType getType() {
        return type;
    }

    public void setType(AttendType type) {
        this.type = type;
    }
}
