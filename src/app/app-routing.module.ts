import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './dashboard2/pages/create-employee/create-employee.component';
import { HomepageComponent } from './dashboard2/pages/homepage/homepage.component';
import { ViewEmployeeComponent } from './dashboard2/pages/view-employee/view-employee.component';

const routes: Routes = [
  {path: '', redirectTo:'/homepage',pathMatch:'full'},
  {path:"homepage",component:HomepageComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'view-employee',component:ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
