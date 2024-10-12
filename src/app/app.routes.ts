import { Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';

export const routes: Routes = [
    { path: 'login-signup', component: LoginSignupComponent },
    { path: '', redirectTo: '/login-signup', pathMatch: 'full' },
    { path: '**', redirectTo: '/login-signup' }
];
