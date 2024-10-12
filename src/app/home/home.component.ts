import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    title = "Yasin";
    cnt = 0;
    num = 0;
    color = "";
    incre() {
      this.cnt++;
    }

    decre() {
      this.cnt--;
    }
}
