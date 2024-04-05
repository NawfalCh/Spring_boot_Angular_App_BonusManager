import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


//Local Environement
//const BASIC_URL =['http://localhost:8080'];

//Prod Environement
const BASIC_URL =['http://bonus-manager.eu-central-1.elasticbeanstalk.com'];

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }


  loginUser(user:any):Observable<any>{
    return this.http.post(BASIC_URL+"/login",user);
  }

  getEmployees():Observable<any>{
    return this.http.get(BASIC_URL+"/employees")
  }

  addEmployee(emplDTO:any):Observable<any>{
    return this.http.post(BASIC_URL+"/addempl",emplDTO);
  }

  deleteEmployee(emlpId:number):Observable<any>{
    return this.http.delete(BASIC_URL+"/employee/"+emlpId);
  }

  getEmployee(emlpId:number):Observable<any>{
    return this.http.get(BASIC_URL+"/employee/"+emlpId);
  }

  updateEmployee(empl:any,emlpId:number):Observable<any>{
    return this.http.put(BASIC_URL+"/employee/"+emlpId, empl);
  }

  getAllPendingB():Observable<any>{
    return this.http.get(BASIC_URL+"/allpendings");
  }

  getPending(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"/pending/"+id);
  }

  addBonus(pendingDTO:any,emplid:number):Observable<any>{
    return this.http.post(BASIC_URL+"/addpending/"+emplid, pendingDTO);
  }

  approveBonus(bonusDTO:any,emplid:number):Observable<any>{
    return this.http.post(BASIC_URL+"/approvebonus/"+emplid, bonusDTO);
  }

  deletePendingB(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+"/pending/"+id);
  }

  getEmployeeByCode(emlpCode:number):Observable<any>{
    return this.http.get(BASIC_URL+"/employee/code/"+emlpCode);
  }

  getBonusByEmplId(emplId:number):Observable<any>{
    return this.http.get(BASIC_URL+"/allbonus/"+emplId);
  }

  getBonusById(bonusId:number):Observable<any>{
    return this.http.get(BASIC_URL+"/bonus/"+bonusId);
  }

}
