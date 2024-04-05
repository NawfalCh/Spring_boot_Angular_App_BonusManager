import {Component, Inject, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-bonus-details',
  templateUrl: './show-bonus-details.component.html',
  styleUrls: ['./show-bonus-details.component.css']
})
export class ShowBonusDetailsComponent implements OnInit{

  bonusId!:number;
  employeeCode:any;
  firstname:any;
  lastname:any;
  year!:number;
  attitude!:number;
  behaviour!:number;
  communication!:number;
  integrity!:number;
  leadership!:number;
  openness!:number;
  totalBonus!:number;
  remarque:any;

  price1: number = 0;
  price2: number = 0;
  price3: number = 0;
  price4: number = 0;
  price5: number = 0;
  price6: number = 0;
  constructor(private appService:AppServiceService,
              public dialog: MatDialogRef<ShowBonusDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.bonusId=data.id;
  }

  ngOnInit(): void {
    this.getBonusDetails();
  }

  getBonusDetails(){
    this.appService.getBonusById(this.bonusId).subscribe(res =>{
      console.log(res);
        this.employeeCode=res.employeeCode;
        this.firstname=res.firstname;
        this.lastname=res.lastname;
        this.year=res.year;
        this.attitude=res.attitude;
        this.behaviour=res.behaviour;
        this.communication=res.communication;
        this.integrity=res.integrity;
        this.leadership=res.leadership;
        this.openness=res.openness;
        this.totalBonus=res.totalBonus;
        this.remarque=res.remarque;

        this.price1=this.attitude*50;
        this.price2=this.behaviour*50;
        this.price3=this.communication*50;
        this.price4=this.integrity*50;
        this.price5=this.leadership*50;
        this.price6=this.openness*50;
    },
      error => {
      console.log("error",error);
      })
  }

  closeDialog() {
    this.dialog.close();

  }

}
