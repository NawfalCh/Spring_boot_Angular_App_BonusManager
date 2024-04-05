import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {StorageInfosService} from "../../services/storage-infos.service";
import {MatDialog} from "@angular/material/dialog";
import {AddBonusComponent} from "../add-bonus/add-bonus.component";
import {ApproveBonusComponent} from "../approve-bonus/approve-bonus.component";
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-pending-bonus',
  templateUrl: './pending-bonus.component.html',
  styleUrls: ['./pending-bonus.component.css']
})
export class PendingBonusComponent implements OnInit{

  pendingB: any[]=[];

  constructor(private appService:AppServiceService,
              private storage:StorageInfosService,
              private dialoge: MatDialog,
              private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.getAllPendingB();
    this.isCEOLoggedIn();
  }

  getAllPendingB(){
    this.appService.getAllPendingB().subscribe(res =>{
      this.pendingB=res;
      console.log(this.pendingB);
    },
      error => {
      console.log("error fetching pending Bonus",error);
      })
  }

  isCEOLoggedIn(): boolean{
    return this.storage.isCEOLoggedIn();
}

  approveBonus(emplCode:number,pendingB:number){
    console.log(emplCode);
    this.dialoge.open(ApproveBonusComponent,{
      width:'800px',
      data:{emplCode, pendingB}
    })
  }

  cancelPendingB(pendingId:number){
    const confirmDelete = window.confirm(`Are you sure you want to cancel this Bonus ?`);
    if(confirmDelete){
      this.appService.deletePendingB(pendingId).subscribe(res =>{
          console.log(res);
          this.getAllPendingB();
          this.openSnackBar("Pending Bonus is successfully canceled and deleted")

        },
        error => {
          console.log("Erro deleting Pending Bonus", error);
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

}
