package com.shreyauntwale.studentattendance.models.form;

public enum AttendType {


        Present ("Present"),
        Absent ("Absent");


        private final String presenty ;

        AttendType(String presenty) {
            this.presenty = presenty;
        }

        //I have to create a getter so that I can access presenty

        public String getName() {
            return presenty;
        }

    }


