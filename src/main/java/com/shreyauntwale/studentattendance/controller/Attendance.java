package com.shreyauntwale.studentattendance.controller;


import com.shreyauntwale.studentattendance.models.data.AttendanceDao;
import com.shreyauntwale.studentattendance.models.data.StudentDao;
import com.shreyauntwale.studentattendance.models.form.Attend;

import com.shreyauntwale.studentattendance.models.form.AttendType;
import com.shreyauntwale.studentattendance.models.form.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;


@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class Attendance {
    @Autowired
    private AttendanceDao attendDao;
    @Autowired
    private StudentDao studentDao;


    @GetMapping("/api/attend")
    public Iterable index() {

        Iterable<Attend> listofmaps = attendDao.findAll ();

        return listofmaps;
    }



    @RequestMapping(value="/api/fetch" , method=RequestMethod.GET)
    @ResponseBody
    public Iterable fetchResult(@RequestParam("from") @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate fromDate) {

        Iterable<Attend> listofmaps = attendDao.findAll ();
        ArrayList<Attend> attends = new ArrayList<> (  );
        for (Attend map : listofmaps) {
            if (map.getDate ().equals ( fromDate )){
                attends.add (map);
            }

        }

        return attends;

    }


    @PostMapping("/api/attend/add")
    public void processAddAttendanceForm(@RequestBody Attend newAttendance) {
        Student student = studentDao.findById ( newAttendance.getStudentIdToSet ( ) ).orElseGet ( null );

        newAttendance.setStudent ( student );
        newAttendance.setType ( AttendType.valueOf ( newAttendance.getTypeId () ));

        attendDao.save ( newAttendance );
    }




}














