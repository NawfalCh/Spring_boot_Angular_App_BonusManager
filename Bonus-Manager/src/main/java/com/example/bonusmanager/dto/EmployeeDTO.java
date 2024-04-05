package com.example.bonusmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {

    private int employeeId;
    private int code;
    private String firstname;
    private String lastname;
    private String jobTitel;
    private String unit;
}
