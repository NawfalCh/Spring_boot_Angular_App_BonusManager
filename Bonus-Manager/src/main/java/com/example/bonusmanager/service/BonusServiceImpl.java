package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.BonusDTO;
import com.example.bonusmanager.dto.PendingBonusDTO;
import com.example.bonusmanager.entity.Bonus;
import com.example.bonusmanager.entity.Employee;
import com.example.bonusmanager.entity.PendingBonus;
import com.example.bonusmanager.repository.BonusRepo;
import com.example.bonusmanager.repository.EmployeeRepo;
import com.example.bonusmanager.repository.PendingBonusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BonusServiceImpl implements BonusService{

    @Autowired
    private PendingBonusRepo pendingRepo;
    @Autowired
    private BonusRepo bonusRepo;
    @Autowired
    private EmployeeRepo emplRepo;
    @Autowired
    private DTOsMapper mapper;

    @Override
    public boolean addBonus(PendingBonusDTO bonusDTO, Integer emplId) {
        Optional<Employee> empl = emplRepo.findById(emplId);
        Employee founded = null;
        if(empl.isPresent()){
            founded=empl.get();
            PendingBonus pendingB= new PendingBonus();
            pendingB.setYear(bonusDTO.getYear());
            pendingB.setLeadership(bonusDTO.getLeadership());
            pendingB.setOpenness(bonusDTO.getOpenness());
            pendingB.setBehaviour(bonusDTO.getBehaviour());
            pendingB.setAttitude(bonusDTO.getAttitude());
            pendingB.setCommunication(bonusDTO.getCommunication());
            pendingB.setIntegrity(bonusDTO.getIntegrity());
            pendingB.setTotalBonus(bonusDTO.getTotalBonus());
            pendingB.setEmployee(founded);
            pendingRepo.save(pendingB);
            return true;
        }
        return false;
    }

    @Override
    public List<PendingBonusDTO> getAllPending() {
        List<PendingBonus> pendings = pendingRepo.findAll();
        return pendings.stream()
                .map(p -> mapper.PendingBonusToDTO(p))
                .collect(Collectors.toList());
    }

    @Override
    public PendingBonusDTO getPending(Integer id) {
        Optional<PendingBonus> pending = pendingRepo.findById(id);

        return mapper.PendingBonusToDTO(pending.get());
    }

    @Override
    public void deletePendingById(Integer id) {
        pendingRepo.deleteById(id);

    }

    @Override
    public boolean approveBonus(BonusDTO bonusDTO, Integer emplTd) {
        Optional<Employee> empl = emplRepo.findById(emplTd);
        Employee founded = null;
        if(empl.isPresent()){
            founded=empl.get();
            Bonus bonus= new Bonus();
            bonus.setYear(bonusDTO.getYear());
            bonus.setLeadership(bonusDTO.getLeadership());
            bonus.setOpenness(bonusDTO.getOpenness());
            bonus.setBehaviour(bonusDTO.getBehaviour());
            bonus.setAttitude(bonusDTO.getAttitude());
            bonus.setCommunication(bonusDTO.getCommunication());
            bonus.setIntegrity(bonusDTO.getIntegrity());
            bonus.setTotalBonus(bonusDTO.getTotalBonus());
            bonus.setRemarque(bonusDTO.getRemarque());
            bonus.setEmployee(founded);
            bonusRepo.save(bonus);
            return true;
        }
        return false;
    }

    @Override
    public List<BonusDTO> getApprovedBonus(Integer emplid) {

        List<Bonus> bonus = bonusRepo.findByEmployee_EmployeeId(emplid);
        return bonus.stream()
                .map(b -> mapper.BonusToDTO(b))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteApprovBonus(Integer bonusid) {
        bonusRepo.deleteById(bonusid);
    }

    @Override
    public List<BonusDTO> getAllBonus() {
        List<Bonus> bonus = bonusRepo.findAll();
        return bonus.stream()
                .map(b -> mapper.BonusToDTO(b))
                .collect(Collectors.toList());
    }

    @Override
    public BonusDTO getBonusById(Integer id) {
        Optional<Bonus> bonus= bonusRepo.findById(id);
        return mapper.BonusToDTO(bonus.get());
    }


}
