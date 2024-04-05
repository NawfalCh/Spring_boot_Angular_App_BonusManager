import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppServiceService} from "../../services/app-service.service";
import {StorageInfosService} from "../../services/storage-infos.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb:FormBuilder,
              private userservice:AppServiceService,
              private storage:StorageInfosService,
              private router:Router) {
    this.loginForm= fb.group({
      username:[null,Validators.required],
      password:[null, Validators.required]
      })
  }

  login(){

    this.userservice.loginUser(this.loginForm.value).subscribe(res =>{
      console.log(res);
      if(res.role != null){
        const user={
          id:res.id,
          username:res.username,
          role:res.role
        }
        this.storage.saveUser(user);
        this.router.navigateByUrl("/dashboard");
      }
    })

  }



}
