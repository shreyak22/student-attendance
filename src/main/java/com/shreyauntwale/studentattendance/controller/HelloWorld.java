package com.shreyauntwale.studentattendance.controller;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.Date;


@RestController
public class HelloWorld {

        @GetMapping("/api/hello")
        public String hello() {
            return "Hello, the time at the server is now " + new Date () + "\n";
        }



}
