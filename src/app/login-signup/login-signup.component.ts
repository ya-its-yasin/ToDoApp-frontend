import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [LoginComponent, SignupComponent, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  static isLogin:boolean = true;
  toLogin(): any {
    return LoginSignupComponent.isLogin;
  }
  swapLogin(swap: number) {
    LoginSignupComponent.isLogin = (swap==0) ? false : true ;
  }

}
