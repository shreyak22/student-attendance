package com.shreyauntwale.studentattendance.models.data;


import com.shreyauntwale.studentattendance.models.form.Attend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

    @Repository
    @Transactional
    public interface AttendanceDao extends CrudRepository<Attend, Integer> {

    }

