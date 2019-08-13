package com.shreyauntwale.studentattendance.models.form;

import com.fasterxml.jackson.annotation.JsonProperty;


import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Student {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    @Size(min=3, max=15)
    private String name;

    @NotNull
    @Size(min=3, max=15)
    private String lastname;

    @OneToMany(mappedBy = "student")
    private List<Attend> attendanceDays;

    public Student( String name, String lastname) {
        this.name = name;
        this.lastname = lastname;
    }


    public Student(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public List<Attend> getAttendanceDays() {
        return attendanceDays;
    }

    public void setAttendanceDays(List<Attend> attendanceDays) {
        this.attendanceDays = attendanceDays;
    }
}
