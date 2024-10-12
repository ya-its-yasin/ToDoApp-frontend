import { Component } from '@angular/core';
import { User } from '../model/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: User = new User();
  password1!: string;

  constructor(private userService:UserService, private router: Router){}

  SignUpNow():any {
    if(this.user.password.length<8){
      alert("Password length should be greater than 8!!!")
      return;
    }
    if(this.user.password!=this.password1){
      alert("Password is not match!!!");
      return;
    }
    //this.user.password = btoa(this.user.password); 
    this.userService.userSignUp(this.user).subscribe(
      (response: HttpResponse<any>)=>{
        window.alert(response.body);
        LoginSignupComponent.isLogin = true;
        this.router.navigate(['/login-signup']);
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  }
}
