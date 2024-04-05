package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.EmployeeDTO;
import com.example.bonusmanager.dto.RequestDTO;
import com.example.bonusmanager.dto.ResponceDTO;

public interface AuthService {
    ResponceDTO login(RequestDTO request);

}
