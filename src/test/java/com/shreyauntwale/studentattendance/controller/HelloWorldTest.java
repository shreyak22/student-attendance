package com.shreyauntwale.studentattendance.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class HelloWorldTest {

    @Test
    void index() {
        HelloWorld hello = new HelloWorld ();

        assertEquals("Hello World", hello.index () );
    }
}