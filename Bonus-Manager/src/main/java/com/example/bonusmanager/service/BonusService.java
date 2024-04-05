package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.BonusDTO;
import com.example.bonusmanager.dto.PendingBonusDTO;



import java.util.List;

public interface BonusService {

    boolean addBonus(PendingBonusDTO bonusDTO,Integer emplId);
    List<PendingBonusDTO> getAllPending();
    PendingBonusDTO getPending(Integer id);
    void deletePendingById(Integer Id);
    boolean approveBonus(BonusDTO bonusDTO, Integer emplTd);
    List<BonusDTO> getApprovedBonus(Integer emplid);
    void deleteApprovBonus(Integer Id);
    List<BonusDTO> getAllBonus();
    BonusDTO getBonusById(Integer id);
}
