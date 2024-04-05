import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../services/app-service.service";
import {StorageInfosService} from "../../services/storage-infos.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {ShowBonusDetailsComponent} from "../show-bonus-details/show-bonus-details.component";

@Component({
  selector: 'app-view-employee-bonus',
  templateUrl: './view-employee-bonus.component.html',
  styleUrls: ['./view-employee-bonus.component.css']
})
export class ViewEmployeeBonusComponent implements OnInit{

  approvedBonus: any[]=[];
  employeeId:number=this.activatedRoute.snapshot.params["employeeId"];

  constructor(private appService:AppServiceService,
              private activatedRoute:ActivatedRoute,
              private dialoge: MatDialog,) {
  }

  ngOnInit(): void {
    this.getAbrrovedBonus();
  }

  getAbrrovedBonus(){
    this.appService.getBonusByEmplId(this.employeeId).subscribe(res =>{
      this.approvedBonus=res;
      console.log(this.approvedBonus);
      console.log(this.employeeId);
    },
      error => {
      console.log("error",error);
      })
  }

  showBonuDetail(id:number){
    console.log(id);
    this.dialoge.open(ShowBonusDetailsComponent,{
      width:'800px',
      data:{id}
    })
  }

}
