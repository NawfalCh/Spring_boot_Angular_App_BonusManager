package com.example.bonusmanager.repository;


import com.example.bonusmanager.entity.PendingBonus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PendingBonusRepo extends JpaRepository<PendingBonus,Integer> {


}
