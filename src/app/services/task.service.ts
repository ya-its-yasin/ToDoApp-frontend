import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getUserTasks(userId: number) {
    return this.http.get<any>(this.apiUrl+"getTasks/"+userId);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl+"addTask",task);
  }

  updateTask(task1: Task): Observable<any> {
    return this.http.put<any>(this.apiUrl+"updateTask",task1);
  }

  finishTask(taskId: number) {
    return this.http.delete<any>(this.apiUrl+"finish/"+taskId);
  }

  getCompletedTasks(userId: number) {
    return this.http.get<any>(this.apiUrl+"ctasks/"+userId);
  }

}
