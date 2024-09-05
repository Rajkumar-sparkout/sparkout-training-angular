import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-nested-form-array',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './nested-form-array.component.html',
  styleUrl: './nested-form-array.component.css'
})
export class NestedFormArrayComponent implements OnInit {

  employeeForm!: FormGroup;


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employees: this.fb.array([]) 
    });
  }

  employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray
  }

  newEmployee(): FormGroup{
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee(){
    this.employees().push(this.newEmployee())
  }

  removeEmployee(employeeIndex: number){
    this.employees().removeAt(employeeIndex)
  }

  employeeSkills(employeeIndex: number){
    return this.employees().at(employeeIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup{
    return this.fb.group({
      skill: '',
      experience: ''
    });
  }

  addEmployeeSkill(employeeIndex: number){
    this.employeeSkills(employeeIndex).push(this.newSkill())
  }

  removeEmployeeSkill(employeeIndex: number, skillIndex: number){
    this.employeeSkills(employeeIndex).removeAt(skillIndex)
  }

  onSubmit(){
    console.log(this.employeeForm.value);
  }

// Nested Form Array:
// https://www.tektutorialshub.com/angular/nested-formarray-example-add-form-fields-dynamically/

// https://github.com/sparkouttech/minex-angular.git

}
