import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor(
    private authService:AuthService,
    private fb:FormBuilder,
    private router:Router,
    private toastr:ToastrService  
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]]
    })
  }

  get f(){
    return this.loginForm.controls
  }

  login(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value)
    .subscribe(
      data=>{
        console.log(data)
        this.toastr.success('Login Successful', 'Success',{timeOut:3000})
      },
      err=>{
        console.log(err)
        this.toastr.error('Login Failed', 'Error',{timeOut:3000})
      }
    )
  }

}
