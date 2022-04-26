import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  myForm!:FormGroup

  constructor(private fb:FormBuilder,private employeeService:EmployeeServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: [''],
      email: ['',[Validators.email,Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      phone: ['',Validators.required],
      address:['',Validators.required],
      post: ['',Validators.required],
      gender:['',Validators.required],
    })
  }

  get f(){
    return this.myForm.controls
  }

  createEmployee(form:FormGroup){
    console.log(form)
    if(form.invalid){
      console.log("Invalid form")
      return
    }
    console.log(form.value)
    this.employeeService.createEmployee(form.value)
    .subscribe(
      data=>{
        console.log(data)
        this.toastr.success("Employee created successfully","Success",{timeOut:3000})
      },
      err=>{
        console.log(err)
        this.toastr.error("Error creating employee","Error",{timeOut:3000})
      }
    )
  }

}
