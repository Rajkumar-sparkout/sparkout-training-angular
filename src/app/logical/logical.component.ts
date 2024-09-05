import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logical.component.html',
  styleUrl: './logical.component.css'
})
export class LogicalComponent implements OnInit{

  public originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public evenNumbers: any[] = [];
  public oddNumbers: any[] = [];

  constructor(){}

  ngOnInit(): void {

      for (const number of this.originalArray) {
        if (number % 2 === 0) {
          this.evenNumbers.push(number);
        } else {
          this.oddNumbers.push(number);
        }
      }   
    
  }

}
