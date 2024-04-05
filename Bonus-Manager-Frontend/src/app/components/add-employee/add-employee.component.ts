import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppServiceService} from "../../services/app-service.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employeeForm!:FormGroup;

  constructor(private appService:AppServiceService,
              public dialog: MatDialogRef<AddEmployeeComponent>,
              private snackBar: MatSnackBar,
              private router:Router,
              private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      firstname:[null,Validators.required],
      lastname:[null,Validators.required],
      jobTitel:[null,Validators.required],
      unit:[null,Validators.required]
    })
  }

   addEmpl(){
    this.appService.addEmployee(this.employeeForm.value).subscribe(res =>{

         this.openSnackBar("employee has been added successfully");

         },
      error => {
      this.openSnackBar("Error detected")
      console.log("error detected", error);
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
