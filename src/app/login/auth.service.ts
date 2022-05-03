import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";

interface User{
  userid:string
  token:string
}

interface ResponseData{
  status:boolean,
  message:string,
  token:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=new BehaviorSubject<any>(null)

  constructor(private http:HttpClient,private jwtHelper:JwtHelperService) { }

  login(loginData){
    return this.http.post('http://localhost:420/login',loginData)
    .pipe(tap((userData:ResponseData)=>{
      console.log("user data: ",userData)
      this.user.next(userData.token)
      localStorage.setItem('user_token',userData.token)
     })
    )
  }

  isAuthenticated(){
    const token=localStorage.getItem('user_token')
    if(!token){
      return false
    }
    return !this.jwtHelper.isTokenExpired(token)
  }

autoLogin(){
  const userData=localStorage.getItem('user_token')
  if(!userData || this.jwtHelper.isTokenExpired(userData)){
    return
  }
  this.user.next(userData) 
}

logOut(){
  this.user.next(null)
  localStorage.removeItem('user_token')
}

}
