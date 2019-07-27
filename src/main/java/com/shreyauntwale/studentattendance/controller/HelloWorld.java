package com.shreyauntwale.studentattendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorld {

    @RequestMapping(value = "/home")
    @ResponseBody
    public static String index(){
        return "Hello World";
    }

}
