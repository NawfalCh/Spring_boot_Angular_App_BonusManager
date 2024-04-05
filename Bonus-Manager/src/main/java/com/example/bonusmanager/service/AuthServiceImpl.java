package com.example.bonusmanager.service;

import com.example.bonusmanager.dto.RequestDTO;
import com.example.bonusmanager.dto.ResponceDTO;
import com.example.bonusmanager.entity.AppUser;
import com.example.bonusmanager.entity.Role;
import com.example.bonusmanager.repository.AppUserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private AppUserRepo appUserRepo;
    @PostConstruct
    public void createCEO(){
        AppUser ceo= appUserRepo.findByRole(Role.CEO);
        if(ceo == null){
            AppUser newCEO= new AppUser();
            newCEO.setUsername("ceo");
            newCEO.setPassword("ceo123");
            newCEO.setRole(Role.CEO);

            appUserRepo.save(newCEO);
            System.out.println("ceo created successfuly");
        }else {
            System.out.println("");
        }

    }


    @PostConstruct
    public void createHR(){
        AppUser hr= appUserRepo.findByRole(Role.HR);
        if(hr == null){
            AppUser newHR= new AppUser();
            newHR.setUsername("hr");
            newHR.setPassword("hr123");
            newHR.setRole(Role.HR);

            appUserRepo.save(newHR);
            System.out.println("hr created successfuly");
        }else {
            System.out.println("");
        }
    }

    @Override
    public ResponceDTO login(RequestDTO request) {

        AppUser tmpUser = appUserRepo.findByUsernameAndAndPassword(request.getUsername(), request.getPassword());

        if(tmpUser == null){
            return new ResponceDTO(0,"",null);
        }

        return new ResponceDTO(tmpUser.getId(), tmpUser.getUsername(), tmpUser.getRole().name());

    }
}
