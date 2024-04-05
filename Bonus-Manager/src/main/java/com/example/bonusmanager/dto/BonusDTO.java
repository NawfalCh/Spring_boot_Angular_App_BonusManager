package com.example.bonusmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BonusDTO {

    private int id;
    private int year;
    private int leadership;
    private int openness;
    private int behaviour;
    private int attitude;
    private int communication;
    private int integrity;
    private double totalBonus;
    private String remarque;
    private int employeeCode;
    private String firstname;
    private String lastname;
    private String jobTitel;
    private String unit;
}
