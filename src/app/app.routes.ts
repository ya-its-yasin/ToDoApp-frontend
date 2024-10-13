import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login-signup', pathMatch: 'full' }, // Default route
    { path: 'login-signup', component: LoginSignupComponent },
    { path: 'home/:userId', component: HomeComponent }
];
