package com.example.bonusmanager.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "approved_bonus")
public class Bonus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int year;
    private int leadership;
    private int openness;
    private int behaviour;
    private int attitude;
    private int communication;
    private int integrity;
    private double totalBonus;
    private String remarque;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee-id", nullable = false)
    private Employee employee;
}
