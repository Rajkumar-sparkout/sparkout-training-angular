import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { PercentagePipe } from '../pipes/percentage.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, PercentagePipe, FilterPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements OnInit{

  /**
   * Inbuilt pipe
   */
  studentService: StudentService = inject(StudentService);
  students: Student[] = [];
  totalMarks!: number;

  day = "08/01/2024";

  /**
   * Async pipe
   */
  totalStudents = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(this.students.length)
    })
  })

  /**
   * filter pipe
   */
  filterText: string = "All"

  /**
   * common
   */
  ngOnInit(): void {
    this.students = this.studentService.filterStudentByGender(this.filterText);
    this.totalMarks  = this.studentService.totalMarks
  }

  /**
   * Adding filterfunctionality without pipe
   * @param event 
   */
  onFilterChanged(event: any){
    let selectedValue = event.target.value;
    this.students = this.studentService.filterStudentByGender(selectedValue);
  }

}
