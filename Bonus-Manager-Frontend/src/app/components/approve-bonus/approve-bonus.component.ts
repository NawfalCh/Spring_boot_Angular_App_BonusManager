import {Component, Inject, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-approve-bonus',
  templateUrl: './approve-bonus.component.html',
  styleUrls: ['./approve-bonus.component.css']
})
export class ApproveBonusComponent implements OnInit{

  employeeId!:number;
  pendingBonusId!:number;
  employee:any;
  code:any;
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
  remarqueForm!:FormGroup;
  price1: number = 0;
  price2: number = 0;
  price3: number = 0;
  price4: number = 0;
  price5: number = 0;
  price6: number = 0;

  constructor(private appService:AppServiceService,
              public dialog: MatDialogRef<ApproveBonusComponent>,
              private snackBar: MatSnackBar,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.code=data.emplCode;
    this.pendingBonusId=data.pendingB;
  }

  ngOnInit(): void {
    this.remarqueForm=this.fb.group({
      remarque:[null,Validators.required]
    })
    this.getEpmlInfos();
    this.getPendingBInfos();

  }

  getEpmlInfos(){
    this.appService.getEmployeeByCode(this.code).subscribe(res =>{
      this.employee=res;
      this.employeeId=this.employee.employeeId;
      this.firstname=this.employee.firstname;
      this.lastname=this.employee.lastname;
      console.log(this.employee);

    },
      error => {
      console.log("No Employee with this code exist", error);
      })
  }

  getPendingBInfos(){
    this.appService.getPending(this.pendingBonusId).subscribe(res =>{
      console.log(res);
      this.year=res.year;
      this.attitude=res.attitude;
      this.behaviour=res.behaviour;
      this.communication=res.communication;
      this.integrity=res.integrity;
      this.leadership=res.leadership;
      this.openness=res.openness;
      this.totalBonus=res.totalBonus;

        this.price1=this.attitude*50;
        this.price2=this.behaviour*50;
        this.price3=this.communication*50;
        this.price4=this.integrity*50;
        this.price5=this.leadership*50;
        this.price6=this.openness*50;
    },
      error => {
      console.log("Pending Bonus not found",error);
      })
  }



  approveBonus(){
    const bonus={
      year:this.year,
      attitude:this.attitude,
      behaviour:this.behaviour,
      communication:this.communication,
      integrity:this.integrity,
      leadership:this.leadership,
      openness:this.openness,
      totalBonus:this.totalBonus,
      remarque:this.remarqueForm.value.remarque,
    }
    this.appService.approveBonus(bonus,this.employeeId).subscribe(res =>{
      console.log(res);
      console.log(bonus);
      this.openSnackBar("Bonus approved successfully");
      this.appService.deletePendingB(this.pendingBonusId).subscribe(res =>{
        console.log(res);
        console.log("Pending Bonus deleted")
      })

    },
      error => {
      console.log("Error approving Bonus",error)
        this.openSnackBar("Error approving Bonus")
      })

  }

  closeDialog() {
    this.dialog.close();

  }

  openSnackBar(message: string) {
    let snackBarRef: MatSnackBarRef<any> = this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['custom-snackbar'],
    });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snackbar dismissed');
    });
  }

}
