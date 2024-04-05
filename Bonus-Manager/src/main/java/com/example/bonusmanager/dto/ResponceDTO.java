package com.example.bonusmanager.dto;

import com.example.bonusmanager.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponceDTO {
    private int id;
    private String username;
    private String role;
}
