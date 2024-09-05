import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  @ViewChild('userForm') uf!: NgForm;

   countries = [
    {"countryName": "India"},
    {"countryName": "Australia"},
    {"countryName": "Srilanka"},
  ]

  // onSubmit(myForm: NgForm){
  //   console.log(myForm);
  // }
  onSubmit(){
    console.log(this.uf);
  }

  setDefaultValue(){
    this.uf.setValue({
      firstName: "Vijay",
      lastName: "V",
      country: "India",
      gender: "Male",
      details: {
        email: "vijay@gmail.com",
        mobileNumber: "1236547890"
      }
    })
  }

}
