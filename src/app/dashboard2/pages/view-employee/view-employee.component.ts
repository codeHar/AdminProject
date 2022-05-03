import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees=[]

  constructor(private employeeService:EmployeeServiceService ) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe(
      (data:any)=>{
        console.log(data)
        this.employees=data.employees
      },
      err=>{
        console.log(err)
      }
    )
  }

}
