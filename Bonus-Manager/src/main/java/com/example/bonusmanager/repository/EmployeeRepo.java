package com.example.bonusmanager.repository;

import com.example.bonusmanager.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

    @Query("SELECT MAX(e.code) FROM Employee e")
    int findMaxEmployeeCode();

    Employee findByCode(int code);

}
