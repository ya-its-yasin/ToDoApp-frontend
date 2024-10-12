import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getGreetings() {
    return this.http.get(this.apiUrl);
  }

  userSignUp(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl+"signup",user);
  }

  userLogin(user: User): Observable<any>{
    return this.http.post<any>(this.apiUrl+"login",user);
  }
}
