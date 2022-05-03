import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-project';
  isAuthenticated=false
  
  constructor(private authService:AuthService){
    this.authService.autoLogin()
    this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user
    })
  }

  

}
