package com.example.bonusmanager.repository;

import com.example.bonusmanager.entity.Bonus;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BonusRepo extends JpaRepository<Bonus,Integer> {

    List<Bonus> findByEmployee_EmployeeId(Integer emplId);
}
