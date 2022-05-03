import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from "./employee"

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  createEmployee(data:Employee){
    const token=localStorage.getItem("user_token")
     return this.http.post('http://localhost:420/employee',data,{headers:{'Content-Type':'application/json',"x-auth-token":token}})
  }

  getEmployees(){
    const token=localStorage.getItem("user_token")
    return this.http.get('http://localhost:420/employee',{headers:{'Content-Type':'application/json',"x-auth-token":token}})
  }
}
