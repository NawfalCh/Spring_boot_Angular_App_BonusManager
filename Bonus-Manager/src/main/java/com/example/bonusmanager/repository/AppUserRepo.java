package com.example.bonusmanager.repository;

import com.example.bonusmanager.entity.AppUser;
import com.example.bonusmanager.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends JpaRepository<AppUser,Integer> {

    AppUser findByRole(Role role);
    AppUser findByUsernameAndAndPassword(String username, String password);
}
