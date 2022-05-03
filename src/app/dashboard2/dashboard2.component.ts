import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  resizeSideBar(sidebar:HTMLDivElement){
    sidebar.classList.toggle("active")
    console.log("resizeSideBar")
  }

  logOut(){
    this.authService.logOut()
  }

}
