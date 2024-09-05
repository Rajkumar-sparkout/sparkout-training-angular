import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directive/highlight.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  //if else
  a = 10;
  b = 5;

  //for
  items = [10, 20, 30, 40, 50]

  //switch
  userRloe = "admin";

  //ngclass
  isActive = false;
  toggleActive(){
    this.isActive = !this.isActive
  }

  //ngStyle
  backgroundColor = "lightgreen";
  fontSize = "12";

  updateStyles(){
    this.backgroundColor = "lightblue";
    this.fontSize = "16"
  }

  //ngModel
  name = "";

}
