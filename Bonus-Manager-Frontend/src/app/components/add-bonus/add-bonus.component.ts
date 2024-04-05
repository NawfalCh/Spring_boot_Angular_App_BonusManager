import {Component, Inject, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-bonus',
  templateUrl: './add-bonus.component.html',
  styleUrls: ['./add-bonus.component.css']
})
export class AddBonusComponent implements OnInit{


  employeeId:number;
  employee:any;
  code:any;
  firstname:any;
  lastname:any;
  pendingBForm!:FormGroup;
  totalBonus:number=0.0;
  price1: number = 0;
  price2: number = 0;
  price3: number = 0;
  price4: number = 0;
  price5: number = 0;
  price6: number = 0;


  constructor(private appService:AppServiceService,
              public dialog: MatDialogRef<AddBonusComponent>,
              private snackBar: MatSnackBar,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeId=data.emplId;
  }

  ngOnInit(): void {
    this.pendingBForm= this.fb.group({
      year:[null,Validators.min(0)],
      Attitude:[null,[Validators.min(0),Validators.max(4)]],
      Behaviour:[null,[Validators.min(0),Validators.max(4)]],
      Communication:[null,[Validators.min(0),Validators.max(4)]],
      Integrity:[null,[Validators.min(0),Validators.max(4)]],
      Leadership:[null,[Validators.min(0),Validators.max(4)]],
      Openness:[null,[Validators.min(0),Validators.max(4)]],
    })
    this.getEmployeeInfos();

  }

  getEmployeeInfos(){
    this.appService.getEmployee(this.employeeId).subscribe(res =>{
      this.employee=res;
      this.code=this.employee.code;
      this.firstname=this.employee.firstname;
      this.lastname=this.employee.lastname;
    })

  }

  addPendingB(){
    const bonus={
      year:this.pendingBForm.value.year,
      attitude:this.pendingBForm.value.Attitude,
      behaviour:this.pendingBForm.value.Behaviour,
      communication:this.pendingBForm.value.Communication,
      integrity:this.pendingBForm.value.Integrity,
      leadership:this.pendingBForm.value.Leadership,
      openness:this.pendingBForm.value.Openness,
      totalBonus:this.totalBonus
    }
    this.appService.addBonus(bonus,this.employeeId).subscribe(res =>{
      console.log(res);
      this.openSnackBar("Bonus added successfully");
    },
      error => {
      console.log("error adding a bonus ", error);
      this.openSnackBar("Bonus not added");
      })

    console.log(bonus);
  }

  calcTotalBonus():void{
    this.price1=this.pendingBForm.value.Attitude*50;
    this.price2=this.pendingBForm.value.Behaviour*50;
    this.price3=this.pendingBForm.value.Communication*50;
    this.price4=this.pendingBForm.value.Integrity*50;
    this.price5=this.pendingBForm.value.Leadership*50;
    this.price6=this.pendingBForm.value.Openness*50;

    this.totalBonus=this.price1+this.price2+this.price3+this.price4+this.price5+this.price6;
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
