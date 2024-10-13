import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../model/Task';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { HttpResponse } from '@angular/common/http';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  user: User = new User();
  task: Task = new Task();
  tasks!: Task[];
  showFinished: boolean = false;
  cTasks!: Task[];

  constructor(private userService:UserService, private taskService:TaskService, private router: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((params) => {
      const tempId = JSON.parse(params.get('userId')!);
      this.user.userId = tempId!;
    });
  }

  ngOnInit():void {
    this.taskService.getUserTasks(this.user.userId).subscribe(
      (response)=>{
        this.tasks = response;
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )

    this.taskService.getCompletedTasks(this.user.userId).subscribe(
      (response)=>{
        this.cTasks = response;
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  }

  addTask():any {
    this.task.createdBy = this.user.userId;
    this.taskService.addTask(this.task).subscribe(
      (response: HttpResponse<any>)=>{
        this.task.taskId = response.body.taskId;
        this.tasks.push(this.task);
        this.task = new Task();
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  }

  doLogout():void {
    this.user.userId = 0;
    this.router.navigate(['/login-signup'] );
  }

  updateTask(task1: Task) {
    this.taskService.updateTask(task1).subscribe(
      (response: HttpResponse<any>)=>{
        this.ngOnInit();
        this.checkValue();
      },
      (error)=>{
        window.alert(error.error.body)
      }
    )
  } 

  completeTask(taskId: number) {
    //if(confirm("Are you sure to finish?")==true){
      this.taskService.finishTask(taskId).subscribe(
        (response: HttpResponse<any>)=>{
          this.ngOnInit();
        },
        (error)=>{
          window.alert(error.error.body)
        }
      )
    //}
  }


  checkValue() {
    if(this.showFinished==true){
      //this.getCompletedTasks();
    }
  }

}
