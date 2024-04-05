import {Component, Inject, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  employeeId:number;
  employee:any;
  employeeForm!:FormGroup;
  constructor(private appService:AppServiceService,
              public dialog: MatDialogRef<UpdateEmployeeComponent>,
              private snackBar: MatSnackBar,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeId=data.emplId;
  }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      firstname:[null,Validators.required],
      lastname:[null,Validators.required],
      jobTitel:[null,Validators.required],
      unit:[null,Validators.required]
    })

    this.getEmployee();
  }

  getEmployee(){
    this.appService.getEmployee(this.employeeId).subscribe(res =>{
      console.log(this.employeeId);
      this.employee=res;
      this.employeeForm.patchValue(this.employee);
    })
  }

  updateEmpl(){
    this.appService.updateEmployee(this.employeeForm.value,this.employeeId).subscribe(res =>{
      console.log(this.employeeForm.value);
      this.openSnackBar("Employee updated successfully")
    },
      error => {
      console.log("error updating Employee",error);
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
