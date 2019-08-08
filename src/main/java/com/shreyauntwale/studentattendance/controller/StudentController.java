package com.shreyauntwale.studentattendance.controller;

import com.shreyauntwale.studentattendance.models.data.StudentDao;
import com.shreyauntwale.studentattendance.models.form.Student;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;




@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class StudentController {
    @Autowired
    private StudentDao studentdao;


    @GetMapping("/api/student")
    public Iterable home() {

        Iterable<Student> listofmaps = studentdao.findAll ();

        return listofmaps;
    }










}














