package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.BonusDTO;
import com.example.bonusmanager.dto.EmployeeDTO;
import com.example.bonusmanager.dto.PendingBonusDTO;
import com.example.bonusmanager.entity.Bonus;
import com.example.bonusmanager.entity.Employee;
import com.example.bonusmanager.entity.PendingBonus;
import org.springframework.stereotype.Component;

@Component
public class DTOsMapper {


    public EmployeeDTO EmployeeToDTO(Employee emp){
        EmployeeDTO empDTO = new EmployeeDTO();
        empDTO.setEmployeeId(emp.getEmployeeId());
        empDTO.setCode(emp.getCode());
        empDTO.setFirstname(emp.getFirstname());
        empDTO.setLastname(emp.getLastname());
        empDTO.setJobTitel(emp.getJobTitel());
        empDTO.setUnit(emp.getUnit());

        return empDTO;
    }

    public PendingBonusDTO PendingBonusToDTO(PendingBonus pendingB){
        PendingBonusDTO pendingDTO = new PendingBonusDTO();
        pendingDTO.setId(pendingB.getId());
        pendingDTO.setYear(pendingB.getYear());
        pendingDTO.setLeadership(pendingB.getLeadership());
        pendingDTO.setOpenness(pendingB.getOpenness());
        pendingDTO.setBehaviour(pendingB.getBehaviour());
        pendingDTO.setAttitude(pendingB.getAttitude());
        pendingDTO.setCommunication(pendingB.getCommunication());
        pendingDTO.setIntegrity(pendingB.getIntegrity());
        pendingDTO.setTotalBonus(pendingB.getTotalBonus());
        pendingDTO.setEmployeeCode(pendingB.getEmployee().getCode());
        pendingDTO.setFirstname(pendingB.getEmployee().getFirstname());
        pendingDTO.setLastname(pendingB.getEmployee().getLastname());
        pendingDTO.setJobTitel(pendingB.getEmployee().getJobTitel());
        pendingDTO.setUnit(pendingB.getEmployee().getUnit());
        return pendingDTO;
    }

    public BonusDTO BonusToDTO(Bonus bonus){
        BonusDTO bonusDTO = new BonusDTO();
        bonusDTO.setId(bonus.getId());
        bonusDTO.setYear(bonus.getYear());
        bonusDTO.setLeadership(bonus.getLeadership());
        bonusDTO.setOpenness(bonus.getOpenness());
        bonusDTO.setBehaviour(bonus.getBehaviour());
        bonusDTO.setAttitude(bonus.getAttitude());
        bonusDTO.setCommunication(bonus.getCommunication());
        bonusDTO.setIntegrity(bonus.getIntegrity());
        bonusDTO.setTotalBonus(bonus.getTotalBonus());
        bonusDTO.setRemarque(bonus.getRemarque());
        bonusDTO.setEmployeeCode(bonus.getEmployee().getCode());
        bonusDTO.setFirstname(bonus.getEmployee().getFirstname());
        bonusDTO.setLastname(bonus.getEmployee().getLastname());
        bonusDTO.setJobTitel(bonus.getEmployee().getJobTitel());
        bonusDTO.setUnit(bonus.getEmployee().getUnit());
        return bonusDTO;
    }





}
