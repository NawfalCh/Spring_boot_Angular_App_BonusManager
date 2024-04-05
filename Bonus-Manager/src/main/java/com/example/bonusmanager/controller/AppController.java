package com.example.bonusmanager.controller;

import com.example.bonusmanager.dto.*;
import com.example.bonusmanager.entity.PendingBonus;
import com.example.bonusmanager.service.BonusService;
import com.example.bonusmanager.service.EmployeeService;
import com.example.bonusmanager.service.AuthService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AppController {

    @Autowired
    private AuthService authService;
    @Autowired
    private EmployeeService emplService;
    @Autowired
    private BonusService bonusService;

    @GetMapping("")
    public String landingPage(){
        return "Welcome To Bonus Manager By Nawfal Cherif";
    }

    @PostMapping("login")
    public ResponceDTO login (@RequestBody RequestDTO request){
        return authService.login(request);
    }

    @PostMapping("addempl")
    public boolean addEmployee(@RequestBody EmployeeDTO empDTO){
        return  emplService.addEmployee(empDTO);
    }

    @GetMapping("employees")
    public List<EmployeeDTO> getAllEmpl(){
        return emplService.getEmployees();
    }

   @DeleteMapping("employee/{id}")
    public void delete(@PathVariable Integer id){
        emplService.deleteEmpl(id);
   }

   @PutMapping("employee/{id}")
   public boolean update(@RequestBody EmployeeDTO emplDTO,@PathVariable Integer id){
        return emplService.updateEmpl(emplDTO,id);
   }

   @GetMapping("employee/{id}")
   public EmployeeDTO getEmplById(@PathVariable Integer id){
        return emplService.getEmplById(id);
    }

    @GetMapping("employee/code/{code}")
    public EmployeeDTO getEmplByCode(@PathVariable int code){
        return emplService.getEmplByCode(code);
    }

    @PostMapping("addpending/{emplid}")
    public boolean addpendingBonus(@RequestBody PendingBonusDTO pendingB, @PathVariable Integer emplid){

        return bonusService.addBonus(pendingB,emplid);

    }

    @GetMapping("allpendings")
    public List<PendingBonusDTO> getAllPendingB(){
        return bonusService.getAllPending();
    }

    @GetMapping("pending/{id}")
    public PendingBonusDTO getPending(@PathVariable Integer id){
        return bonusService.getPending(id);
    }

    @DeleteMapping("pending/{id}")
    public void deletePending(@PathVariable Integer id){
        bonusService.deletePendingById(id);
    }

    @PostMapping("/approvebonus/{emplid}")
    boolean approveBonus(@RequestBody BonusDTO bonusDTO,@PathVariable Integer emplid){
        return bonusService.approveBonus(bonusDTO,emplid);
    }

    //get bonuses of a specific employee
    @GetMapping("allbonus/{emplid}")
    public List<BonusDTO> getApprovedBonus(@PathVariable Integer emplid){
        return bonusService.getApprovedBonus(emplid);
    }

    //get all Bonuses (Bonuses of all Employee)
    @GetMapping("/bonuses")
    public List<BonusDTO> getAllBonuses(){
        return bonusService.getAllBonus();
    }

    @GetMapping("bonus/{bonusid}")
    public BonusDTO getBonusById(@PathVariable Integer bonusid){
        return bonusService.getBonusById(bonusid);
    }

    @DeleteMapping("/approvebonus/{bonusid}")
    public void deleteBonusById(@PathVariable Integer bonusid){
        bonusService.deleteApprovBonus(bonusid);
    }


}
