package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {

    boolean addEmployee(EmployeeDTO employee);
    List<EmployeeDTO> getEmployees();
    void deleteEmpl(Integer id);
    boolean updateEmpl(EmployeeDTO emplDTO, Integer id);
    EmployeeDTO getEmplById(Integer id);
    EmployeeDTO getEmplByCode(int code);
}
