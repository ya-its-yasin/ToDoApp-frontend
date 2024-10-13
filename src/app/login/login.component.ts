import { Component } from '@angular/core';
import { User } from '../model/user'
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = new User();

  constructor(private userService:UserService, private router: Router){}

  loginNow():any {
    this.userService.userLogin(this.user).subscribe(
      (response: HttpResponse<any>)=>{
        this.user.userId = response.body.userId;
        this.router.navigate(['/home/'+this.user.userId] );
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  }
}
