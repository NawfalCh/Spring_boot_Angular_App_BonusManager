package com.example.bonusmanager.dto;

import com.example.bonusmanager.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PendingBonusDTO {

    private int id;
    private int year;
    private int leadership;
    private int openness;
    private int behaviour;
    private int attitude;
    private int communication;
    private int integrity;
    private double totalBonus;
    private int employeeCode;
    private String firstname;
    private String lastname;
    private String jobTitel;
    private String unit;
}
