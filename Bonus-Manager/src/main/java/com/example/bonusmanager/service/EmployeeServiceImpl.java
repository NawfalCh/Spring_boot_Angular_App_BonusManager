package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.EmployeeDTO;
import com.example.bonusmanager.entity.Employee;
import com.example.bonusmanager.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {



    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private DTOsMapper mapper;


    @Override
    public boolean addEmployee(EmployeeDTO employee) {
        Employee create = new Employee();

        create.setCode(findMaxCode());
        create.setFirstname(employee.getFirstname());
        create.setLastname(employee.getLastname());
        create.setJobTitel(employee.getJobTitel());
        create.setUnit(employee.getUnit());

        Employee checkt= employeeRepo.save(create);
        Optional<Employee> exist= employeeRepo.findById(checkt.getEmployeeId());
        if(exist.isPresent())
            return true;
        return false;
    }

    @Override
    public List<EmployeeDTO> getEmployees() {
        List<Employee> emps= employeeRepo.findAll();
        return emps.stream()
                .map(emp -> mapper.EmployeeToDTO(emp))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteEmpl(Integer id) {
        employeeRepo.deleteById(id);
    }

    @Override
    public boolean updateEmpl(EmployeeDTO emplDTO, Integer id) {
        Optional<Employee> found= employeeRepo.findById(id);
        Employee exist= null;
        if(found.isPresent()){
            exist= found.get();

            exist.setFirstname(emplDTO.getFirstname());
            exist.setLastname(emplDTO.getLastname());
            exist.setJobTitel(emplDTO.getJobTitel());
            exist.setUnit(emplDTO.getUnit());
            employeeRepo.save(exist);
            return true;

        }
        return false;
    }

    @Override
    public EmployeeDTO getEmplById(Integer id) {
        Employee empl = employeeRepo.findById(id).get();
        return mapper.EmployeeToDTO(empl);
    }

    @Override
    public EmployeeDTO getEmplByCode(int code) {
        Employee empl= employeeRepo.findByCode(code);
        return mapper.EmployeeToDTO(empl);
    }

    private int findMaxCode(){

        int employeecode= employeeRepo.findMaxEmployeeCode();
        int codeplus= employeecode + 1;
        return codeplus;
    }
}
