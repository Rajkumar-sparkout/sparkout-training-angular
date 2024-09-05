import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students: Student[] = [
    new Student(1, "John smith", "Male", new Date('11-12-1997'), "MBA", 520, 1899),
    new Student(2, "Mark vought", "Male", new Date('10-06-1998'), "B.Tech", 420, 2899),
    new Student(3, "Sarah king", "Female", new Date('09-22-1996'), "B.Tech", 540, 2899),
    new Student(4, "Merry Jana", "Female", new Date('06-12-1995'), "MBA", 380, 1899),
    new Student(5, "Stev smith", "Male", new Date('12-21-1999'), "M.Sc", 430, 799),
    new Student(6, "Jonas weber", "Male", new Date('06-18-1997'), "M.Sc", 320, 799),
  ];

  totalMarks: number = 600;

  createStudent(name: string, gender: string, dob: Date, course: string, marks: number, fee: number){
    let id = this.students.length + 1;
    let student = new Student(id, name, gender,dob, course, marks, fee);
    this.students.push(student);
  }

  filterStudentByGender(filterBy: string){
    if(filterBy.toLowerCase() === 'all' || filterBy === '' || this.students.length === 0){
      return this.students
    } else{
      return this.students.filter((std)=> {
        return std.gender.toLowerCase() === filterBy.toLowerCase();
      })
    }
  }
}
