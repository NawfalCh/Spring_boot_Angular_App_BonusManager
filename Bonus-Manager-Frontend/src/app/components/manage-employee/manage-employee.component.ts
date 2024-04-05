import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AddEmployeeComponent} from "../add-employee/add-employee.component";
import {UpdateEmployeeComponent} from "../update-employee/update-employee.component";

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit{

  employees: any[]=[];

  constructor(private appService:AppServiceService,
              private snackBar: MatSnackBar,
              private dialoge: MatDialog) {
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

  deleteEmployee(emplid:number){
    const confirmDelete = window.confirm('Are you sure you want to delete this Employee?');
   if(confirmDelete){
     this.appService.deleteEmployee(emplid).subscribe(res =>{
         console.log("Employee deleted");
         this.openSnackBar("Employee deleted");
       this.getEmployees();
       },
       error =>{
         console.log("error by deleting Employee",error);
       })
   }
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

  addEmployee():void{
    this.dialoge.open(AddEmployeeComponent,{
      height: '500px',
      width: '600px',
    })
  }

  updateEmployee(emplId:number):void{

    this.dialoge.open(UpdateEmployeeComponent,{
      height: '500px',
      width: '600px',
      data:{emplId}


    })
  }

}
