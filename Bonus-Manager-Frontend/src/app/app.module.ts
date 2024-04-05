import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HttpClientModule} from "@angular/common/http";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ManageEmployeeComponent } from './components/manage-employee/manage-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { PendingBonusComponent } from './components/pending-bonus/pending-bonus.component';
import { AddBonusComponent } from './components/add-bonus/add-bonus.component';
import { ApproveBonusComponent } from './components/approve-bonus/approve-bonus.component';
import { ViewEmployeeBonusComponent } from './components/view-employee-bonus/view-employee-bonus.component';
import { ShowBonusDetailsComponent } from './components/show-bonus-details/show-bonus-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    UpdateEmployeeComponent,
    PendingBonusComponent,
    AddBonusComponent,
    ApproveBonusComponent,
    ViewEmployeeBonusComponent,
    ShowBonusDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
