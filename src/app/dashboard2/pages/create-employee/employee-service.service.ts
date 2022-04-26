import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from "./employee"

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  createEmployee(data:Employee){
     return this.http.post('http://localhost:420/employee',data,{headers:{'Content-Type':'application/json',"x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiNjI2N2M3YThhNGVjNjFjNThmMjEyYWQ4IiwiaWF0IjoxNjUwOTcwNTc5LCJleHAiOjE2NTA5Nzc3Nzl9.0EO9lXIOsa6R04VbWI2kng-GZEBFd8XlOzQaA-YrrkY"}})
  }
}
