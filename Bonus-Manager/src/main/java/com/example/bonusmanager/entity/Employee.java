package com.example.bonusmanager.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee-id")
    private Integer employeeId;
    private int code;
    private String firstname;
    private String lastname;
    private String jobTitel;
    private String unit;
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private List<PendingBonus> pendingB;
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private List<Bonus> bonus;

}
