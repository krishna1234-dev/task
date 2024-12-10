import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  digits = [0,1,2,3,4,5,6,7,8,9]
  lastDigit: number | null = null;
  length: number | null = null;
  generatedNumber: string = '';
  private intervalId: any; 

  ngOnInit() {}

  generateNumber() {
    if (this.lastDigit !== null && this.length && this.length > 1) {
      this.updateNumber();
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => this.updateNumber(), 5000);
    }
    console.log(this.generatedNumber)
  }

  updateNumber() {
    const randomPrefix = Array(this.length! - 1)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join('');
    this.generatedNumber = randomPrefix + this.lastDigit;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
