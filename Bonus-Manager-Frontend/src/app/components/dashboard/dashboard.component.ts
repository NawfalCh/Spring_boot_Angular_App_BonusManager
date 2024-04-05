import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AddBonusComponent} from "../add-bonus/add-bonus.component";
import {ViewEmployeeBonusComponent} from "../view-employee-bonus/view-employee-bonus.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  employees: any[]=[];

  constructor(private appService:AppServiceService,
              private dialoge: MatDialog,
              private snackBar: MatSnackBar,
              ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(){
    this.appService.getEmployees().subscribe(res =>{
      console.log(res);
      this.employees=res;
    },
      error => {
        console.log("Error fetching Employees:", error);
      })
  }

  addBonus(emplId:number){
    console.log(emplId);
    this.dialoge.open(AddBonusComponent,{
      width:'800px',
      data:{emplId}
    })
  }








}
