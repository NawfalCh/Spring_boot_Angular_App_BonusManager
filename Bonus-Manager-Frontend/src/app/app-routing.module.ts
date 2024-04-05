import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {ManageEmployeeComponent} from "./components/manage-employee/manage-employee.component";
import {PendingBonusComponent} from "./components/pending-bonus/pending-bonus.component";
import {ViewEmployeeBonusComponent} from "./components/view-employee-bonus/view-employee-bonus.component";

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"manage-employee", component:ManageEmployeeComponent},
  {path:"pending-bonus",component:PendingBonusComponent},
  {path:"employee-bonuses/:employeeId",component:ViewEmployeeBonusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
