import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageInfosService {

  constructor() { }


  saveUser(user:any):void{
    window.localStorage.removeItem("user");
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    const userData = localStorage.getItem("user");
    if (userData !== null) {
      return JSON.parse(userData);
    }
    return null;
  }
  //get the role of logged User
  getUserRole(){
    const user = this.getUser();
    if(user == null)return "";
    return user.role;
  }

  isCEOLoggedIn():boolean{
    return this.getUserRole() == "CEO";
  }

  isHRLoggedIn():boolean{
    return this.getUserRole() == "HR";
  }

  logout():void{
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("username");
  }
}
